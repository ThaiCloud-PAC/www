import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

type Module = { name: string; desc: string };

// SVG icons per module
const icons: Record<string, ReactNode> = {
  WMS: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3 21V9l9-6 9 6v12" strokeLinejoin="round" />
      <path d="M9 21V12h6v9" />
    </svg>
  ),
  OMS: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 14h4" strokeLinecap="round" />
    </svg>
  ),
  Picking: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
      <circle cx="20" cy="17" r="2" />
    </svg>
  ),
  Shipping: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  ),
  Returns: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M9 14L4 9l5-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 9h11a5 5 0 015 5v1a5 5 0 01-5 5h-4" strokeLinecap="round" />
    </svg>
  ),
  Inventory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3 7l9-4 9 4-9 4z" strokeLinejoin="round" />
      <path d="M3 7v10l9 4 9-4V7" strokeLinejoin="round" />
      <path d="M12 11v10" />
    </svg>
  ),
  Settlement: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="9" />
      <path
        d="M12 7v10M15 9.5c-.5-1-1.7-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2-2.5-.5-3-1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  API: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path
        d="M8 5l-5 7 5 7M16 5l5 7-5 7M14 4l-4 16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

// Per-module color rotation matching the mockup's :nth-child(4n+x) cycle
// 4n+1 = cyan, 4n+2 = amber, 4n+3 = teal, 4n+4 = orange
const iconPalette: { bg: string; color: string }[] = [
  { bg: "rgba(96,199,211,0.12)", color: "var(--color-cyan-500)" },
  { bg: "rgba(250,178,23,0.12)", color: "var(--color-amber-500)" },
  { bg: "rgba(0,168,167,0.18)", color: "var(--color-teal-300)" },
  { bg: "rgba(243,117,33,0.15)", color: "var(--color-orange-400)" },
];

export function OnePlatform() {
  const t = useTranslations("Platform");
  const modules = t.raw("modules") as Module[];

  return (
    <section
      id="solutions"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, var(--color-ink-950) 0%, var(--color-ink-900) 100%)",
        padding: "110px 0",
      }}
    >
      {/* cyan-tinted masked grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(96,199,211,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(96,199,211,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
        aria-hidden
      />
      {/* cyan glow upper-left */}
      <div
        className="pointer-events-none absolute h-[400px] w-[400px] blur-[80px]"
        style={{
          left: "8%",
          top: "10%",
          background:
            "radial-gradient(circle, rgba(96,199,211,0.25), transparent 65%)",
        }}
        aria-hidden
      />
      {/* amber glow lower-right */}
      <div
        className="pointer-events-none absolute h-[380px] w-[380px] blur-[80px]"
        style={{
          right: "8%",
          bottom: "5%",
          background:
            "radial-gradient(circle, rgba(250,178,23,0.18), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative z-[2] mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
            {t("eyebrow")}
          </span>
          <h2 className="font-display mt-3.5 text-[clamp(34px,4.5vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            {t("title")}
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-white/65">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
          {modules.map((m, idx) => {
            const palette = iconPalette[idx % 4];
            return (
              <div
                key={m.name}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-[22px] backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-white/[0.07]"
              >
                <div
                  className="mb-4 flex h-[42px] w-[42px] items-center justify-center rounded-[10px]"
                  style={{ background: palette.bg, color: palette.color }}
                >
                  <div className="h-[22px] w-[22px]">
                    {icons[m.name] ?? icons.WMS}
                  </div>
                </div>
                <div className="font-display mb-1 text-[18px] font-bold text-white">
                  {m.name}
                </div>
                <div className="text-[12.5px] text-white/55">{m.desc}</div>
                <span className="font-mono-num absolute right-4 top-3.5 text-[10px] text-white/20">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
