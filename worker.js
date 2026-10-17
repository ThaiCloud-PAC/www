// Canonical-host redirect + the contact-form endpoint, in front of the static assets.
// Any hostname that isn't SITE_URL's (www.thaicloud.com, packiko.com, ...)
// gets a 301 to the same path on SITE_URL. workers.dev previews are exempt.

const MAX_LEN = { name: 200, email: 320, subject: 300, message: 5000 };

async function handleContact(request, env) {
  if (request.method !== "POST") {
    return Response.json({ ok: false, error: "method_not_allowed" }, { status: 405 });
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const subject = String(data.subject ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }
  for (const [k, max] of Object.entries(MAX_LEN)) {
    if (String(data[k] ?? "").length > max) {
      return Response.json({ ok: false, error: "too_long" }, { status: 400 });
    }
  }

  if (!env.RESEND_API_KEY) {
    // Deployed without the secret — fail loudly so it shows up in logs,
    // and the client falls back to its "email us instead" message.
    console.error("contact: RESEND_API_KEY is not set");
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM ?? "Packiko Website <noreply@thaicloud.com>",
      to: [env.CONTACT_TO ?? "hello@thaicloud.com"],
      reply_to: email,
      subject: subject ? `[thaicloud.com] ${subject}` : `[thaicloud.com] Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("contact: resend responded", res.status, await res.text());
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
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
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
