// node worker.test.mjs
import assert from "node:assert";
import worker from "./worker.js";

const env = {
  SITE_URL: "https://thaicloud.com",
  ASSETS: { fetch: () => new Response("asset") },
};
const get = (url) => worker.fetch(new Request(url), env);

let r = await get("https://www.thaicloud.com/pricing/?x=1");
assert.equal(r.status, 301);
assert.equal(r.headers.get("location"), "https://thaicloud.com/pricing/?x=1");

for (const host of ["https://packiko.com/", "https://www.packiko.com/a"]) {
  assert.equal((await get(host)).status, 301);
}

assert.equal((await get("https://thaicloud.com/")).status, 200);
assert.equal((await get("https://www.www.workers.dev/")).status, 200);

// /en/* canonicalizes to the unprefixed URL
r = await get("https://thaicloud.com/en/packiko?x=1");
assert.equal(r.status, 301);
assert.equal(r.headers.get("location"), "https://thaicloud.com/packiko?x=1");
r = await get("https://thaicloud.com/en");
assert.equal(r.headers.get("location"), "https://thaicloud.com/");

// unprefixed 404s fall back to the /en assets; /th does not
{
  const envEn = {
    SITE_URL: "https://thaicloud.com",
    ASSETS: {
      fetch: (req) =>
        new URL(req.url).pathname.startsWith("/en")
          ? new Response("en asset")
          : new Response("miss", { status: 404 }),
    },
  };
  r = await worker.fetch(new Request("https://thaicloud.com/packiko"), envEn);
  assert.equal(r.status, 200);
  assert.equal(await r.text(), "en asset");
  r = await worker.fetch(new Request("https://thaicloud.com/th/nope"), envEn);
  assert.equal(r.status, 404);
}

console.log("ok");
