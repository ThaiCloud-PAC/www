"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useT } from "@/i18n";

/** Two states only — dark is the default, light is the opt-out. */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const t = useT();

  const goingTo = theme === "dark" ? t.a11y.themeLight : t.a11y.themeDark;
  const Icon = theme === "dark" ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={toggle}
      title={goingTo}
      aria-label={goingTo}
      className={`grid size-9 place-items-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand ${className}`}
    >
      <Icon className="size-4" aria-hidden="true" />
    </button>
  );
}
