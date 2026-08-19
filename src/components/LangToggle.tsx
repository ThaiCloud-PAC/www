"use client";

import { useLang } from "@/i18n";
import type { Lang } from "@/lib/prefs";

const OPTIONS: Lang[] = ["th", "en"];

/** TH | EN pill. No flags — a language is not a country. */
export default function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t.a11y.language}
      className={`inline-flex items-center rounded-full border border-line p-0.5 ${className}`}
    >
      {OPTIONS.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => setLang(o)}
          aria-pressed={lang === o}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
            lang === o ? "bg-cta text-white" : "text-muted hover:text-ink"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
