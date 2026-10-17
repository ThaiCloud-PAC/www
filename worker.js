// The Worker in front of thaicloud.com.
// - Canonical host: any hostname that isn't SITE_URL's (www.thaicloud.com,
//   packiko.com, ...) gets a 301 to the same path on SITE_URL. workers.dev
//   previews are exempt.
// - POST /api/contact: the contact form, mailed through SendGrid.
// - Everything else: the static export in ./out.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE = 5000;
/** Where messages go when CONTACT_TO isn't set: the address on the site. */
const DEFAULT_TO = "hello@thaicloud.com";

const json = (status, body, headers = {}) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", ...headers } });

/** "Name <a@b.c>" or "a@b.c" → SendGrid's { email, name }. */
function address(value) {
  const m = /^\s*(.*?)\s*<([^>]+)>\s*$/.exec(value);
  return m ? { email: m[2].trim(), ...(m[1] ? { name: m[1] } : {}) } : { email: value.trim() };
}

/** A header value: one line, whatever the visitor typed. */
const oneLine = (s) => s.replace(/[\r\n]+/g, " ");

/**
 * POST /api/contact. Ported from the Azure Static Web Apps function the site
 * used before it moved to Workers; same request, same responses.
 * Worker config: SENDGRID_API_KEY and CONTACT_FROM (a verified SendGrid
 * sender) as secrets; CONTACT_TO optional (comma-separated), default above.
 */
async function contact(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { error: "Invalid JSON body." });
  }

  const field = (k) => String(body?.[k] ?? "").trim();
  const name = oneLine(field("name"));
  const email = field("email");
  const subject = oneLine(field("subject"));
  const message = field("message");

  // Honeypot: a bot filled a field no human can see. Look successful, send nothing.
  if (field("website")) return json(200, { ok: true });

  if (!name || !email || !message) return json(400, { error: "Name, email and message are required." });
  if (!EMAIL_RE.test(email)) return json(400, { error: "That email address is not valid." });
  if (message.length > MAX_MESSAGE) return json(400, { error: "Message is too long." });

  const { SENDGRID_API_KEY, CONTACT_FROM } = env;
  if (!SENDGRID_API_KEY || !CONTACT_FROM) {
    console.error("Contact form is not configured: SENDGRID_API_KEY / CONTACT_FROM missing.");
    return json(500, { error: "Contact form is not configured." });
  }
  const to = (env.CONTACT_TO || DEFAULT_TO).split(",").map((a) => address(a)).filter((a) => a.email);

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: { authorization: `Bearer ${SENDGRID_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({
      personalizations: [{ to }],
      from: address(CONTACT_FROM),
      reply_to: { email, name },
      subject: subject ? `[thaicloud.com] ${subject}` : `[thaicloud.com] Message from ${name}`,
      content: [{ type: "text/plain", value: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(none)"}\n\n${message}` }],
    }),
  });
  if (!res.ok) {
    console.error("SendGrid send failed", res.status, await res.text());
    return json(502, { error: "Could not send the message." });
  }
  return json(200, { ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const site = new URL(env.SITE_URL);
    if (url.hostname !== site.hostname && !url.hostname.endsWith(".workers.dev")) {
      url.protocol = site.protocol;
      url.hostname = site.hostname;
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/api/contact" || url.pathname === "/api/contact/") {
      if (request.method !== "POST") return json(405, { error: "Method not allowed." }, { allow: "POST" });
      return contact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
