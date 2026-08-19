"use client";

import { useState } from "react";
import { CircleAlert, Check, LoaderCircle, Mail, MapPin, PhoneCall } from "lucide-react";
import { useT } from "@/i18n";
import { COMPANY } from "@/lib/company";
import Reveal from "./Reveal";

type Status = { kind: "idle" | "sending" | "ok" | "error"; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELD =
  "w-full rounded-2xl border border-line bg-raised px-4 py-3 text-[15px] text-ink placeholder:text-muted/80 focus:border-brand focus:outline-none focus:ring-[3px] focus:ring-brand/15";

export default function Contact() {
  const t = useT();
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (data.website) return; // honeypot — pretend it worked, send nothing
    if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
      setStatus({ kind: "error", message: t.contact.form.errorRequired });
      return;
    }
    if (!EMAIL_RE.test(data.email)) {
      setStatus({ kind: "error", message: t.contact.form.errorEmail });
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject ?? "",
          message: data.message,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus({ kind: "ok", message: t.contact.form.success });
      form.reset();
    } catch {
      setStatus({ kind: "error", message: t.contact.form.errorGeneric });
    }
  }

  const sending = status.kind === "sending";

  return (
    <section id="contact-sec" className="bg-surface py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[7fr_5fr]">
        <Reveal>
          <h2 className="text-[26px] font-bold leading-snug text-ink md:text-[34px]">{t.contact.heading}</h2>

          <form onSubmit={onSubmit} noValidate className="mt-7 grid gap-4 md:grid-cols-2">
            <div className="grid gap-4">
              <input name="name" type="text" autoComplete="name" placeholder={t.contact.form.name} className={FIELD} />
              <input name="email" type="email" autoComplete="email" placeholder={t.contact.form.email} className={FIELD} />
              <input name="subject" type="text" placeholder={t.contact.form.subject} className={FIELD} />
            </div>
            <textarea name="message" rows={6} placeholder={t.contact.form.message} className={`${FIELD} h-full resize-y`} />

            {/* honeypot: real people never see or fill this */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="pointer-events-none absolute -left-[9999px] size-0 opacity-0"
            />

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-70"
              >
                {sending ? <LoaderCircle className="size-4 animate-spin" aria-hidden="true" /> : null}
                {sending ? t.contact.form.sending : t.contact.form.send}
              </button>

              <p
                role="status"
                aria-live="polite"
                className={`mt-3 flex items-start gap-2 text-sm ${
                  status.kind === "ok" ? "text-teal-ink" : status.kind === "error" ? "text-orange-ink" : "text-muted"
                }`}
              >
                {status.kind === "ok" ? <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> : null}
                {status.kind === "error" ? <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> : null}
                {status.message ?? ""}
              </p>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="text-xl font-bold text-ink">{t.contact.locationHeading}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{t.contact.lead}</p>
          <ul className="mt-6 grid gap-4 text-[15px]">
            <li className="flex gap-3 text-muted">
              <MapPin className="mt-0.5 size-5 shrink-0 text-orange-ink" aria-hidden="true" />
              <span>{COMPANY.address}</span>
            </li>
            <li className="flex gap-3">
              <PhoneCall className="mt-0.5 size-5 shrink-0 text-orange-ink" aria-hidden="true" />
              <a href={COMPANY.phoneHref} className="text-ink hover:text-brand">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-orange-ink" aria-hidden="true" />
              <a href={`mailto:${COMPANY.email}`} className="text-ink hover:text-brand">
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
