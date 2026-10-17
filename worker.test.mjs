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

console.log("ok");
