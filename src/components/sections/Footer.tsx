"use client";

import { Mail, PhoneCall } from "lucide-react";
import { useT } from "@/i18n";
import { COMPANY } from "@/lib/company";
import { SOCIALS, external } from "@/lib/socials";
import { Wordmark } from "@/components/Header";
import SocialIcon from "@/components/SocialIcon";

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  const story = [
    { href: "#speed", label: `01 · ${t.nav.speed}` },
    { href: "#intelligence", label: `02 · ${t.nav.intelligence}` },
    { href: "#network", label: `03 · ${t.nav.network}` },
  ];
  const company = [
    { href: "#products", label: t.nav.products },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative border-t border-white/8 bg-night-2 pt-16 pb-8 text-white/70">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">{t.footer.blurb}</p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  {...external(s.href)}
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-full border border-white/15 transition-colors hover:border-cyan hover:text-cyan"
                >
                  <SocialIcon glyph={s.glyph as "linkedin" | "mail"} />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: t.footer.story, links: story },
            { title: t.footer.company, links: company },
          ].map((col) => (
            <div key={col.title}>
              <h2 className="eyebrow mb-4 text-[11px] text-white/50">{col.title}</h2>
              <ul className="grid gap-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="eyebrow mb-4 text-[11px] text-white/50">{t.footer.contact}</h2>
            <ul className="grid gap-2.5 text-sm">
              <li className="flex items-center gap-2">
                <PhoneCall className="size-4 shrink-0" aria-hidden="true" />
                <a href={COMPANY.phoneHref} className="hover:text-white">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-x-4 gap-y-1 border-t border-white/8 pt-6 text-[13px] text-white/45">
          <span>
            © {year} {COMPANY.legalName} {COMPANY.registration}
          </span>
          <span>{t.footer.city}</span>
        </div>
      </div>
    </footer>
  );
}
