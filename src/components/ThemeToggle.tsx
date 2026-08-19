"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useT } from "@/i18n";

/** system → light → dark → system. The icon shows the current choice. */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { choice, cycle } = useTheme();
  const t = useT();

  const Icon = choice === "system" ? Monitor : choice === "light" ? Sun : Moon;
  const label =
    choice === "system" ? t.a11y.themeSystem : choice === "light" ? t.a11y.themeLight : t.a11y.themeDark;

  return (
    <button
      type="button"
      onClick={cycle}
      title={`${t.a11y.theme} — ${label}`}
      aria-label={`${t.a11y.theme} (${label})`}
      className={`grid size-9 place-items-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand ${className}`}
    >
      <Icon className="size-4" aria-hidden="true" />
    </button>
  );
}
