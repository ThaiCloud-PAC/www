"use client";

import { useEffect, useState } from "react";
import { Check, CircleAlert, LoaderCircle, Mail, MapPin, PhoneCall, Send } from "lucide-react";
import { useT } from "@/i18n";
import { COMPANY } from "@/lib/company";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

/** The closing cards pre-select "merchant" / "investor" through this event. */
export const ROLE_EVENT = "packiko:contact-role";

type Status = { kind: "idle" | "sending" | "ok" | "error"; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELD =
  "w-full rounded-2xl border border-white/10 bg-night/60 px-4 py-3 text-[15px] text-white placeholder:text-white/40 transition-colors focus:border-cyan/60 focus:outline-none focus:ring-[3px] focus:ring-cyan/15";

export default function Contact() {
  const t = useT();
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [role, setRole] = useState<number | null>(null);

  useEffect(() => {
    const onRole = (e: Event) => setRole((e as CustomEvent<number>).detail);
    window.addEventListener(ROLE_EVENT, onRole);
    return () => window.removeEventListener(ROLE_EVENT, onRole);
  }, []);

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

    // The role rides in the subject so the /api/contact contract stays the same.
    const subject = [role !== null ? `[${t.contact.roles[role]}]` : "", data.subject ?? ""].join(" ").trim();

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name, email: data.email, subject, message: data.message }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus({ kind: "ok", message: t.contact.form.success });
      form.reset();
      setRole(null);
    } catch {
      setStatus({ kind: "error", message: t.contact.form.errorGeneric });
    }
  }

  const sending = status.kind === "sending";

  return (
    <section id="contact" className="relative bg-night pt-12 pb-24 sm:pb-32">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-8 lg:grid-cols-[7fr_4fr]">
        <Reveal>
          <div className="rounded-[32px] border border-white/10 bg-panel/70 p-6 sm:p-10">
            <h2 className="text-[30px] font-semibold tracking-tight text-white sm:text-4xl">{t.contact.heading}</h2>
            <p className="mt-3 max-w-xl text-muted">{t.contact.lead}</p>

            <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-4">
              <fieldset>
                <legend className="mb-3 text-sm text-white/60">{t.contact.roleLabel}</legend>
                <div className="flex flex-wrap gap-2">
                  {t.contact.roles.map((r, i) => (
                    <label
                      key={r}
                      className={cn(
                        "cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-cyan",
                        role === i ? "border-cyan/60 bg-cyan/15 text-white" : "border-white/12 text-white/70 hover:border-white/30",
                      )}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={i}
                        checked={role === i}
                        onChange={() => setRole(i)}
                        className="sr-only"
                      />
                      {r}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" type="text" autoComplete="name" placeholder={t.contact.form.name} aria-label={t.contact.form.name} className={FIELD} />
                <input name="email" type="email" autoComplete="email" placeholder={t.contact.form.email} aria-label={t.contact.form.email} className={FIELD} />
              </div>
              <input name="subject" type="text" placeholder={t.contact.form.subject} aria-label={t.contact.form.subject} className={FIELD} />
              <textarea name="message" rows={5} placeholder={t.contact.form.message} aria-label={t.contact.form.message} className={`${FIELD} resize-y`} />

              {/* honeypot: real people never see or fill this */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="pointer-events-none absolute -left-[9999px] size-0 opacity-0"
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-night transition hover:bg-white/90 disabled:opacity-70"
                >
                  {sending ? <LoaderCircle className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
                  {sending ? t.contact.form.sending : t.contact.form.send}
                </button>
                <p
                  role="status"
                  aria-live="polite"
                  className={cn(
                    "flex items-start gap-2 text-sm",
                    status.kind === "ok" ? "text-teal" : status.kind === "error" ? "text-orange" : "text-muted",
                  )}
                >
                  {status.kind === "ok" ? <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> : null}
                  {status.kind === "error" ? <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> : null}
                  {status.message ?? ""}
                </p>
              </div>
            </form>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-[32px] border border-white/10 bg-panel/40 p-6 sm:p-10">
            <h3 className="text-xl font-semibold text-white">{t.contact.locationHeading}</h3>
            <ul className="mt-6 grid gap-5 text-[15px]">
              <li className="flex gap-3 text-muted">
                <MapPin className="mt-0.5 size-5 shrink-0 text-cyan" aria-hidden="true" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex gap-3">
                <PhoneCall className="mt-0.5 size-5 shrink-0 text-cyan" aria-hidden="true" />
                <a href={COMPANY.phoneHref} className="text-white hover:text-cyan">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-cyan" aria-hidden="true" />
                <a href={`mailto:${COMPANY.email}`} className="text-white hover:text-cyan">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
