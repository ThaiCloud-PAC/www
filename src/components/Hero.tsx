import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 0%, var(--color-ink-900) 0%, var(--color-ink-950) 60%)",
        padding: "140px 0 60px",
      }}
    >
      {/* masked grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          WebkitMaskImage:
            "radial-gradient(120% 60% at 50% 30%, black 30%, transparent 80%)",
          maskImage:
            "radial-gradient(120% 60% at 50% 30%, black 30%, transparent 80%)",
        }}
        aria-hidden
      />

      {/* amber glow — upper left */}
      <div
        className="pointer-events-none absolute h-[540px] w-[540px] blur-[60px]"
        style={{
          left: "-200px",
          top: "60px",
          background:
            "radial-gradient(circle, rgba(250,178,23,0.35), transparent 65%)",
        }}
        aria-hidden
      />

      {/* orange glow — upper right */}
      <div
        className="pointer-events-none absolute h-[480px] w-[480px] blur-[60px]"
        style={{
          right: "-180px",
          top: "200px",
          background:
            "radial-gradient(circle, rgba(243,117,33,0.25), transparent 65%)",
        }}
        aria-hidden
      />

      {/* cyan glow — bottom center */}
      <div
        className="pointer-events-none absolute h-[320px] w-[700px] -translate-x-1/2 blur-[60px]"
        style={{
          left: "50%",
          bottom: "-120px",
          background:
            "radial-gradient(ellipse, rgba(96,199,211,0.35), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-[2] mx-auto max-w-7xl px-6 text-center">
        {/* badge */}
        <span className="inline-flex items-center gap-[9px] rounded-full border border-white/12 bg-white/[0.06] px-4 py-[7px] text-[12px] text-white/80 backdrop-blur">
          <span className="relative inline-flex h-[7px] w-[7px]">
            <span className="absolute inset-0 animate-pulse-amber rounded-full bg-amber-500" />
            <span className="relative inline-block h-[7px] w-[7px] rounded-full bg-amber-500" />
          </span>
          {t("badge")}
        </span>

        {/* headline */}
        <h1
          className="font-display mx-auto mt-7 max-w-[1100px] leading-[1.02] tracking-[-0.025em] text-white"
          style={{ fontSize: "clamp(44px, 7vw, 92px)" }}
        >
          {t("titleLead")}{" "}
          <span className="relative inline-block">
            <span
              className="relative z-10"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-orange-400) 20%, var(--color-amber-500) 80%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              {t("titleAccent")}
            </span>
            {/* halo behind accent */}
            <span
              className="absolute inset-x-0 -z-0 rounded"
              style={{
                bottom: "4%",
                height: "16%",
                background: "var(--color-orange-500)",
                opacity: 0.18,
              }}
              aria-hidden
            />
          </span>
          <br />
          {t("titleTrail")}
        </h1>

        {/* subtitle */}
        <p className="mx-auto mt-[26px] max-w-[720px] text-[17px] leading-[1.65] text-white/72">
          {t("subtitle")}
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <a
            href="#trial"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-[15px] font-bold text-white transition hover:-translate-y-px hover:bg-orange-600"
            style={{ boxShadow: "0 8px 24px -8px rgba(243,117,33,0.6)" }}
          >
            {t("ctaPrimary")} →
          </a>
          <a
            href="#demo"
            className="inline-flex items-center rounded-full border border-white/[0.18] bg-white/[0.08] px-7 py-4 text-[15px] font-semibold text-white backdrop-blur transition hover:bg-white/[0.14]"
          >
            {t("ctaSecondary")}
          </a>
        </div>

        {/* trust row */}
        <div className="mt-[42px] flex flex-wrap items-center justify-center gap-x-7 gap-y-3.5 text-[13px] text-white/65">
          <span className="inline-flex items-center gap-px">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="text-amber-500"
                style={{ fontSize: "14px", lineHeight: 1 }}
              >
                ★
              </span>
            ))}
          </span>
          <span className="font-mono-num text-white/85">{t("trustRating")}</span>
          <span>·</span>
          <span>{t("trustLabel")}</span>
          <span className="hidden h-3.5 w-px bg-white/[0.18] sm:inline-block" />
          <span className="font-mono-num inline-flex items-center gap-1.5 text-[11px] tracking-[0.12em] text-amber-500">
            <span className="relative inline-flex h-[7px] w-[7px]">
              <span className="absolute inset-0 animate-pulse-amber rounded-full bg-amber-500" />
              <span className="relative inline-block h-[7px] w-[7px] rounded-full bg-amber-500" />
            </span>
            {t("live")}
          </span>
          <span>231 {t("liveLabel")}</span>
        </div>
      </div>
    </section>
  );
}
