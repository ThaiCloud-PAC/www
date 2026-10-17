import { useTranslations } from "next-intl";

export function FooterCTA() {
  const t = useTranslations("FooterCTA");

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, var(--color-orange-500) 0%, var(--color-orange-400) 60%, var(--color-amber-500) 100%)",
        padding: "100px 0",
      }}
    >
      {/* masked grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        }}
        aria-hidden
      />
      {/* deep-orange blob upper-left */}
      <div
        className="pointer-events-none absolute h-[500px] w-[500px] blur-[70px]"
        style={{
          left: "-200px",
          top: "-100px",
          background:
            "radial-gradient(circle, rgba(196,84,24,0.4), transparent 65%)",
        }}
        aria-hidden
      />
      {/* amber blob lower-right */}
      <div
        className="pointer-events-none absolute h-[500px] w-[500px] blur-[70px]"
        style={{
          right: "-150px",
          bottom: "-150px",
          background:
            "radial-gradient(circle, rgba(250,178,23,0.5), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative z-[2] mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-12 md:gap-[60px]">
        <div className="md:col-span-7">
          <h2 className="font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.05] tracking-[-0.025em]">
            {t("title")}
          </h2>
          <p className="mt-[18px] max-w-[540px] text-[16px] leading-[1.6] text-white/85">
            {t("subtitle")}
          </p>
        </div>

        <div className="flex flex-col gap-3 md:col-span-5">
          <a
            href="#trial"
            className="inline-flex items-center justify-center rounded-full bg-ink-900 px-7 py-4 text-[15px] font-bold text-white transition hover:bg-ink-950"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-full border-[1.5px] border-white/50 bg-transparent px-7 py-4 text-[15px] font-semibold text-white transition hover:border-white hover:bg-white/12"
          >
            {t("ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
