"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import type { Locale } from "@/i18n/routing";

export function LocaleToggle({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  const baseBtn =
    "px-2.5 py-1 text-[12px] font-medium tracking-wide uppercase rounded-full transition";

  const active =
    tone === "dark"
      ? "bg-cyan-500 text-ink-950"
      : "bg-ink-900 text-bone";
  const idle =
    tone === "dark"
      ? "text-bone/60 hover:text-bone"
      : "text-ink-500 hover:text-ink-900";

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full p-0.5 ${
        tone === "dark" ? "bg-bone/10" : "bg-ink-100"
      } ${isPending ? "opacity-70" : ""}`}
    >
      <button
        type="button"
        onClick={() => switchTo("th")}
        className={`${baseBtn} ${locale === "th" ? active : idle}`}
        aria-pressed={locale === "th"}
      >
        TH
      </button>
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={`${baseBtn} ${locale === "en" ? active : idle}`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}
