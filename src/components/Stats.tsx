import { useTranslations } from "next-intl";

type StatItem = { value: string; label: string };

export function Stats() {
  const t = useTranslations("Stats");
  const items = t.raw("items") as StatItem[];

  return (
    <section className="bg-paper py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 p-10 md:p-16">
          <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
          <div
            className="pointer-events-none absolute -right-20 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,0.4), transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="font-display text-[28px] leading-tight tracking-tight text-bone md:text-[34px]">
                {t("title")}
              </h2>
              <p className="mt-3 text-[14px] text-bone/60">{t("subtitle")}</p>
              <a
                href="#stories"
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-cyan-300 transition hover:text-cyan-400"
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

            <div className="grid grid-cols-1 gap-8 md:col-span-8 md:grid-cols-3">
              {items.map((s, i) => (
                <div
                  key={s.label}
                  className={`${
                    i > 0 ? "md:border-l md:border-bone/10 md:pl-8" : ""
                  }`}
                >
                  <div className="font-display font-mono-num text-[56px] leading-none font-semibold text-cyan-300 md:text-[72px]">
                    {s.value}
                  </div>
                  <div className="mt-3 text-[13px] leading-relaxed text-bone/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
