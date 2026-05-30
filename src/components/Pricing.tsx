import { useTranslations } from "next-intl";

type Tier = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
};

export function Pricing() {
  const t = useTranslations("Pricing");
  const tiers = t.raw("tiers") as Tier[];

  return (
    <section id="pricing" className="bg-bone py-[100px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-[60px] max-w-2xl text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-500">
            {t("eyebrow")}
          </span>
          <h2 className="font-display mt-3.5 text-[clamp(34px,4.5vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900">
            {t("title")}
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-500">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-[18px] md:grid-cols-3">
          {tiers.map((tier, i) => {
            const featured = i === 1;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-[18px] p-[30px] ${
                  featured
                    ? "-translate-y-3 border border-ink-800 text-white"
                    : "border border-ink-100 bg-white"
                }`}
                style={
                  featured
                    ? {
                        background:
                          "linear-gradient(180deg, var(--color-ink-900) 0%, var(--color-ink-950) 100%)",
                        boxShadow: "0 30px 60px -20px rgba(2,40,63,0.4)",
                      }
                    : undefined
                }
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-orange-500 px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-white">
                    {t("popular")}
                  </span>
                )}

                <div
                  className={`font-display text-[22px] font-bold ${
                    featured ? "text-white" : "text-slate-900"
                  }`}
                >
                  {tier.name}
                </div>
                <p
                  className={`mt-1.5 text-[13px] ${
                    featured ? "text-white/70" : "text-slate-500"
                  }`}
                >
                  {tier.tagline}
                </p>

                <div
                  className={`font-mono-num mt-7 text-[40px] font-bold leading-none ${
                    featured ? "text-amber-500" : "text-slate-900"
                  }`}
                >
                  {tier.price}
                </div>
                <div
                  className={`mt-1.5 text-[10.5px] uppercase tracking-[0.12em] ${
                    featured ? "text-white/60" : "text-slate-400"
                  }`}
                >
                  {t("billed")}
                </div>

                <a
                  href="#trial"
                  className={`mt-5 inline-flex items-center justify-center rounded-full px-5 py-3 text-[13.5px] font-bold transition ${
                    featured
                      ? "border border-transparent bg-orange-500 text-white hover:bg-orange-600"
                      : "border border-ink-900 text-slate-900 hover:bg-ink-900 hover:text-white"
                  }`}
                >
                  {tier.cta}
                </a>

                <ul className="mt-6 space-y-1.5">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 py-1 text-[13.5px] leading-[1.55] ${
                        featured ? "text-white/85" : "text-slate-700"
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="mt-0.5 shrink-0"
                        aria-hidden
                      >
                        <path
                          d="M3 8.5l3 3 7-7"
                          stroke={featured ? "var(--color-amber-500)" : "var(--color-teal-500)"}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
