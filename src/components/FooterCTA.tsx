import { useTranslations } from "next-intl";

export function FooterCTA() {
  const t = useTranslations("FooterCTA");

  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-100/60 via-amber-50 to-cyan-100/60 px-8 py-16 ring-1 ring-ink-100 md:px-16 md:py-20">
          {/* soft orange blob, lower-right */}
          <div
            className="pointer-events-none absolute -right-24 -bottom-24 h-[360px] w-[360px] rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(243,117,33,0.18), transparent 70%)",
            }}
            aria-hidden
          />
          {/* soft cyan blob, upper-left */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-[360px] w-[360px] rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(96,199,211,0.18), transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[36px] leading-tight tracking-tight text-ink-900 md:text-[48px]">
                {t("title")}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-600">
                {t("subtitle")}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:flex-col">
              <a
                href="#trial"
                className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-ink-800"
              >
                {t("ctaPrimary")}
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full border border-ink-200 bg-white px-6 py-3.5 text-[15px] font-medium text-ink-900 transition hover:bg-ink-50"
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
