"use client";

import Image from "next/image";
import { Mail, PhoneCall } from "lucide-react";
import { useT } from "@/i18n";
import { COMPANY } from "@/lib/company";
import { SOCIALS, external } from "@/lib/socials";
import SocialIcon from "./SocialIcon";

const PRODUCTS = ["Packiko Add-in", "Packiko Prime", "Packiko Ultra", "Packiko Hub"];

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep pt-16 pb-7 text-white/80">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 text-center sm:text-left lg:grid-cols-[2fr_1fr_1fr_2fr]">
          <div>
            <span className="inline-flex rounded-xl bg-white px-3 py-2">
              <Image src="/brand/logo.png" alt="ThaiCloud" width={110} height={32} className="h-8 w-auto" />
            </span>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed sm:mx-0">{t.footer.blurb}</p>
            <div className="mt-5 flex justify-center gap-2 sm:justify-start">
              {SOCIALS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  {...external(s.href)}
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-full border border-white/20 transition-colors hover:border-orange hover:bg-orange hover:text-white"
                >
                  <SocialIcon glyph={s.glyph as "linkedin" | "mail"} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">{t.footer.products}</h2>
            <ul className="grid gap-2.5 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p}>
                  <a href="#products" className="hover:text-orange">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">{t.footer.company}</h2>
            <ul className="grid gap-2.5 text-sm">
              <li>
                <a href="#problems" className="hover:text-orange">
                  {t.footer.links.problems}
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-orange">
                  {t.footer.links.solution}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange">
                  {t.footer.links.faq}
                </a>
              </li>
              <li>
                <a href="#contact-sec" className="hover:text-orange">
                  {t.footer.links.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">{t.footer.contact}</h2>
            <ul className="grid gap-2.5 text-sm">
              <li className="flex items-center justify-center gap-2 sm:justify-start">
                <PhoneCall className="size-4 shrink-0" aria-hidden="true" />
                <a href={COMPANY.phoneHref} className="hover:text-orange">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 sm:justify-start">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-orange">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-4 gap-y-1 border-t border-white/10 pt-6 text-center text-[13px] text-white/60 sm:justify-between">
          <span>
            © {year} {COMPANY.legalName} {COMPANY.registration}
          </span>
          <span>{t.footer.city}</span>
        </div>
      </div>
    </footer>
  );
}
