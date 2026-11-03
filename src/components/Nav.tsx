"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { LocaleToggle } from "./LocaleToggle";

const LINKS = [
  { key: "product", href: "/packiko" },
  { key: "solutionsSellers", href: "/solutions/online-sellers" },
  { key: "solutions3pl", href: "/solutions/3pl" },
  { key: "customers", href: "/customers" },
  { key: "about", href: "/about" },
] as const;

export function Nav() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="ThaiCloud" onClick={() => setOpen(false)}>
          <Logo variant="dark" />
        </Link>

        <nav className="hidden items-center gap-[30px] lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className="text-[14px] text-white/78 transition hover:text-white"
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LocaleToggle tone="dark" />
          </div>
          <Link
            href="/demo"
            className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-[18px] py-2.5 text-[14px] font-semibold text-white transition hover:bg-orange-600"
          >
            {t("demo")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] text-white backdrop-blur transition hover:bg-white/[0.14] lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-[2px] w-4 rounded bg-white transition ${open ? "top-[5px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[5px] h-[2px] w-4 rounded bg-white transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[10px] h-[2px] w-4 rounded bg-white transition ${open ? "top-[5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-6 mt-3 rounded-2xl border border-white/[0.1] bg-ink-950/95 p-4 backdrop-blur lg:hidden">
          <ul className="space-y-1">
            {LINKS.map((l) => (
              <li key={l.key}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[15px] text-white/85 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {t(l.key)}
                </Link>
              </li>
            ))}
            <li className="px-4 pb-1 pt-3 sm:hidden">
              <LocaleToggle tone="dark" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
