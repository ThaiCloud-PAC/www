import { useTranslations } from "next-intl";

type StatItem = { value: string; label: string };

export function Stats() {
  const t = useTranslations("Stats");
  const items = t.raw("items") as StatItem[];

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, var(--color-orange-500) 0%, var(--color-orange-400) 50%, var(--color-amber-500) 100%)",
        padding: "110px 0",
      }}
    >
      {/* dot pattern with vertical mask */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
        aria-hidden
      />
      {/* corner glow */}
      <div
        className="pointer-events-none absolute -right-48 -bottom-48 h-[600px] w-[600px] blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(196,84,24,0.5), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative z-[2] mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-12 md:gap-[60px]">
        <div className="md:col-span-4">
          <h2 className="font-display text-[clamp(34px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.02em]">
            {t("title")}
          </h2>
          <p className="mt-3.5 text-[15px] text-white/85">{t("subtitle")}</p>
          <a
            href="#stories"
            className="group mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-bold text-orange-600 transition hover:translate-x-1"
          >
            {t("cta")}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M2 8h11M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-7 md:col-span-8 md:grid-cols-3 md:gap-10">
          {items.map((s, i) => (
            <div
              key={s.label}
              className={
                i > 0
                  ? "border-t border-white/18 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-[30px]"
                  : ""
              }
            >
              <div
                className="font-mono-num font-bold leading-[0.95] tracking-[-0.04em]"
                style={{ fontSize: "clamp(56px, 8vw, 96px)" }}
              >
                {s.value}
              </div>
              <div className="mt-3 text-[13px] leading-[1.5] text-white/90">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
