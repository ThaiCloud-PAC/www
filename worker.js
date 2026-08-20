// Canonical-host redirect in front of the static assets.
// Any hostname that isn't SITE_URL's (www.thaicloud.com, packiko.com, ...)
// gets a 301 to the same path on SITE_URL. workers.dev previews are exempt.
export default {
  fetch(request, env) {
    const url = new URL(request.url);
    const site = new URL(env.SITE_URL);
    if (url.hostname !== site.hostname && !url.hostname.endsWith(".workers.dev")) {
      url.protocol = site.protocol;
      url.hostname = site.hostname;
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
