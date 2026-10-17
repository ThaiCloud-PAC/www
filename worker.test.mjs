// node worker.test.mjs
import assert from "node:assert";
import worker from "./worker.js";

const env = {
  SITE_URL: "https://thaicloud.com",
  ASSETS: { fetch: () => new Response("asset") },
};
const get = (url) => worker.fetch(new Request(url), env);

/* ------------------------------------------------------- canonical host */

let r = await get("https://www.thaicloud.com/pricing/?x=1");
assert.equal(r.status, 301);
assert.equal(r.headers.get("location"), "https://thaicloud.com/pricing/?x=1");

for (const host of ["https://packiko.com/", "https://www.packiko.com/a"]) {
  assert.equal((await get(host)).status, 301);
}

assert.equal((await get("https://thaicloud.com/")).status, 200);
assert.equal((await get("https://www.www.workers.dev/")).status, 200);

/* --------------------------------------------------------- /api/contact */

// SendGrid is stubbed: record what would have been sent.
const sent = [];
let sendgridStatus = 202;
globalThis.fetch = async (url, init) => {
  sent.push({ url, init, body: JSON.parse(init.body) });
  return new Response(sendgridStatus === 202 ? null : "nope", { status: sendgridStatus });
};

const configured = { ...env, SENDGRID_API_KEY: "SG.test", CONTACT_FROM: "Website <web@thaicloud.com>" };
const post = (body, e = configured) =>
  worker.fetch(
    new Request("https://thaicloud.com/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: typeof body === "string" ? body : JSON.stringify(body),
    }),
    e,
  );
const valid = { name: "Nok", email: "nok@example.com", subject: "[Investor] Hello", message: "Hi there" };

r = await get("https://thaicloud.com/api/contact");
assert.equal(r.status, 405);
assert.equal(r.headers.get("allow"), "POST");

assert.equal((await post("{not json")).status, 400);
assert.equal((await post({ ...valid, message: " " })).status, 400);
assert.equal((await post({ ...valid, email: "nope" })).status, 400);
assert.equal((await post({ ...valid, message: "x".repeat(5001) })).status, 400);

// honeypot: looks fine, sends nothing
r = await post({ ...valid, website: "spam.example" });
assert.equal(r.status, 200);
assert.equal(sent.length, 0);

// not configured
r = await post(valid, env);
assert.equal(r.status, 500);
assert.equal(sent.length, 0);

// sent
r = await post({ ...valid, subject: "Hello\r\nBcc: x@y.z" });
assert.equal(r.status, 200);
assert.deepEqual(await r.json(), { ok: true });
assert.equal(sent.length, 1);
const [{ url, init, body }] = sent;
assert.equal(url, "https://api.sendgrid.com/v3/mail/send");
assert.equal(init.headers.authorization, "Bearer SG.test");
assert.deepEqual(body.personalizations, [{ to: [{ email: "hello@thaicloud.com" }] }]);
assert.deepEqual(body.from, { email: "web@thaicloud.com", name: "Website" });
assert.deepEqual(body.reply_to, { email: "nok@example.com", name: "Nok" });
assert.equal(body.subject, "[thaicloud.com] Hello Bcc: x@y.z"); // one line, no header injection
assert.match(body.content[0].value, /Hi there$/);

// CONTACT_TO overrides the default, comma-separated
sent.length = 0;
await post(valid, { ...configured, CONTACT_TO: "a@thaicloud.com, b@thaicloud.com" });
assert.deepEqual(sent[0].body.personalizations[0].to, [{ email: "a@thaicloud.com" }, { email: "b@thaicloud.com" }]);

// SendGrid refuses
sendgridStatus = 401;
const quiet = console.error;
console.error = () => {};
r = await post(valid);
console.error = quiet;
assert.equal(r.status, 502);

console.log("ok");
