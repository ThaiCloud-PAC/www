const { app } = require("@azure/functions");
const sgMail = require("@sendgrid/mail");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE = 5000;

const bad = (error) => ({ status: 400, jsonBody: { error } });

/**
 * POST /api/contact — the website contact form.
 * Env (set on the Static Web App, never committed): SENDGRID_API_KEY,
 * CONTACT_TO, CONTACT_FROM (a verified SendGrid sender).
 */
app.http("contact", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    let body;
    try {
      body = await request.json();
    } catch {
      return bad("Invalid JSON body.");
    }

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // Honeypot: a bot filled a field no human can see. Look successful, send nothing.
    if (String(body?.website ?? "").trim()) return { status: 200, jsonBody: { ok: true } };

    if (!name || !email || !message) return bad("Name, email and message are required.");
    if (!EMAIL_RE.test(email)) return bad("That email address is not valid.");
    if (message.length > MAX_MESSAGE) return bad("Message is too long.");

    const { SENDGRID_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
    if (!SENDGRID_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
      context.error("Contact form is not configured: SENDGRID_API_KEY / CONTACT_TO / CONTACT_FROM missing.");
      return { status: 500, jsonBody: { error: "Contact form is not configured." } };
    }

    sgMail.setApiKey(SENDGRID_API_KEY);
    try {
      await sgMail.send({
        to: CONTACT_TO,
        from: CONTACT_FROM,
        replyTo: { email, name },
        subject: subject ? `[thaicloud.com] ${subject}` : `[thaicloud.com] Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(none)"}\n\n${message}`,
      });
      return { status: 200, jsonBody: { ok: true } };
    } catch (err) {
      context.error("SendGrid send failed", err);
      return { status: 502, jsonBody: { error: "Could not send the message." } };
    }
  },
});
