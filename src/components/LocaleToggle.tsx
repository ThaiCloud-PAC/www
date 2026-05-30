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
    "px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase rounded-full transition";

  const active =
    tone === "dark"
      ? "bg-amber-500 text-slate-950"
      : "bg-ink-900 text-white";
  const idle =
    tone === "dark"
      ? "text-white/60 hover:text-white"
      : "text-slate-500 hover:text-slate-900";

  const track =
    tone === "dark"
      ? "bg-white/[0.08] backdrop-blur"
      : "bg-ink-100";

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full p-[3px] ${track} ${
        isPending ? "opacity-70" : ""
      }`}
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
