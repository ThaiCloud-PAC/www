import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 text-ink-900 md:pt-40 md:pb-28">
      {/* soft top-down cyan wash */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(96,199,211,0.16), transparent 80%)",
        }}
        aria-hidden
      />

      {/* tasteful teal blob, lower-right */}
      <div
        className="pointer-events-none absolute -right-32 bottom-[-120px] h-[420px] w-[420px] rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(80,192,174,0.28), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* badge */}
        <div className="animate-fade-up mx-auto flex w-fit items-center gap-2 rounded-full border border-ink-100 bg-white/80 px-4 py-1.5 text-[12px] text-ink-700 backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-pulse-dot rounded-full bg-cyan-500" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-cyan-500" />
          </span>
          {t("badge")}
        </div>

        {/* headline */}
        <h1
          className="animate-fade-up font-display mx-auto mt-7 max-w-5xl text-center text-[44px] leading-[1.05] sm:text-[60px] md:text-[74px]"
          style={{ animationDelay: "100ms" }}
        >
          {t("titleLead")}{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-ink-900">
              {t("titleAccent")}
            </span>
            <span
              className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-sm bg-cyan-500/35"
              aria-hidden
            />
          </span>{" "}
          <span className="block text-ink-900">{t("titleTrail")}</span>
        </h1>

        {/* subtitle */}
        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-center text-[16px] leading-relaxed text-ink-600 md:text-[18px]"
          style={{ animationDelay: "200ms" }}
        >
          {t("subtitle")}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#trial"
            className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-ink-800"
          >
            {t("ctaPrimary")}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition group-hover:translate-x-0.5"
              aria-hidden
            >
              <path
                d="M2 8h11M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#demo"
            className="inline-flex items-center rounded-full border border-ink-200 bg-white px-6 py-3.5 text-[15px] font-medium text-ink-900 transition hover:bg-ink-50"
          >
            {t("ctaSecondary")}
          </a>
        </div>

        {/* trust row */}
        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-ink-500"
          style={{ animationDelay: "400ms" }}
        >
          <div className="flex items-center gap-1.5">
            <span className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="var(--color-teal-500)"
                  aria-hidden
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </span>
            <span className="font-mono-num text-ink-800">
              {t("trustRating")}
            </span>
            <span>·</span>
            <span>{t("trustLabel")}</span>
          </div>

          <span className="hidden h-3 w-px bg-ink-200 sm:inline" />

          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-[pulse-dot-amber_2.2s_ease-in-out_infinite] rounded-full bg-amber-500" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-amber-500" />
            </span>
            <span className="font-mono-num text-[11px] tracking-widest text-amber-600">
              {t("live")}
            </span>
            <span>231 {t("liveLabel")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
