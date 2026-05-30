import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

type Module = { name: string; desc: string };

// SVG icons per module
const icons: Record<string, ReactNode> = {
  WMS: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 21V9l9-6 9 6v12" strokeLinejoin="round" />
      <path d="M9 21V12h6v9" />
    </svg>
  ),
  OMS: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 14h4" strokeLinecap="round" />
    </svg>
  ),
  Picking: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
      <circle cx="20" cy="17" r="2" />
    </svg>
  ),
  Shipping: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  ),
  Returns: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 14L4 9l5-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 9h11a5 5 0 015 5v1a5 5 0 01-5 5h-4" strokeLinecap="round" />
    </svg>
  ),
  Inventory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 7l9-4 9 4-9 4z" strokeLinejoin="round" />
      <path d="M3 7v10l9 4 9-4V7" strokeLinejoin="round" />
      <path d="M12 11v10" />
    </svg>
  ),
  Settlement: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M15 9.5c-.5-1-1.7-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2-2.5-.5-3-1.5" strokeLinecap="round" />
    </svg>
  ),
  API: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 5l-5 7 5 7M16 5l5 7-5 7M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function OnePlatform() {
  const t = useTranslations("Platform");
  const modules = t.raw("modules") as Module[];

  return (
    <section id="solutions" className="relative overflow-hidden bg-bone py-24 text-ink-900 md:py-32">
      <div className="absolute inset-0 bg-dots opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[12px] uppercase tracking-[0.16em] text-cyan-700">
            {t("eyebrow")}
          </span>
          <h2 className="font-display mt-4 text-[36px] leading-[1.1] tracking-tight text-ink-900 md:text-[52px]">
            {t("title")}
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {modules.map((m, idx) => (
            <div
              key={m.name}
              className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-5 transition hover:border-cyan-500/50 hover:shadow-md hover:shadow-cyan-500/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-ink-900 transition group-hover:bg-cyan-500/20">
                <div className="h-5 w-5">{icons[m.name] ?? icons.WMS}</div>
              </div>
              <div className="font-display mt-4 text-[18px] font-semibold text-ink-900">
                {m.name}
              </div>
              <div className="mt-1 text-[12.5px] text-ink-500">{m.desc}</div>

              {/* deterministic corner index */}
              <span className="absolute right-3 top-3 font-mono-num text-[10px] text-ink-200">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
