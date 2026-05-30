import { useTranslations } from "next-intl";

export function FooterCTA() {
  const t = useTranslations("FooterCTA");

  return (
    <section className="bg-paper pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-8 py-16 md:px-16 md:py-20">
          <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(ellipse at 80% 40%, rgba(34,211,238,0.3) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(255,107,71,0.25) 0%, transparent 60%)",
            }}
            aria-hidden
          />

          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[36px] leading-tight tracking-tight text-bone md:text-[48px]">
                {t("title")}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-bone/60">
                {t("subtitle")}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:flex-col">
              <a
                href="#trial"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3.5 text-[15px] font-semibold text-ink-950 transition hover:bg-cyan-400"
              >
                {t("ctaPrimary")}
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full border border-bone/20 bg-bone/5 px-6 py-3.5 text-[15px] font-medium text-bone backdrop-blur transition hover:bg-bone/10"
              >
                {t("ctaSecondary")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
