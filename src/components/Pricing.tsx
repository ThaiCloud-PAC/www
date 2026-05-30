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
    <section id="pricing" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[12px] uppercase tracking-[0.16em] text-cyan-700">
            {t("eyebrow")}
          </span>
          <h2 className="font-display mt-4 text-[36px] leading-[1.1] tracking-tight text-ink-900 md:text-[52px]">
            {t("title")}
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-500">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {tiers.map((tier, i) => {
            const featured = i === 1;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl p-7 ${
                  featured
                    ? "bg-ink-900 text-white shadow-xl shadow-ink-900/20 ring-1 ring-cyan-500/30 md:-mt-4 md:mb-4"
                    : "border border-ink-100 bg-white"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-cyan-500 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-ink-950">
                    {t("popular")}
                  </span>
                )}

                <div
                  className={`font-display text-[22px] font-semibold ${
                    featured ? "text-white" : "text-ink-900"
                  }`}
                >
                  {tier.name}
                </div>
                <p
                  className={`mt-1.5 text-[13px] ${
                    featured ? "text-white/65" : "text-ink-500"
                  }`}
                >
                  {tier.tagline}
                </p>

                <div className="mt-7">
                  <div
                    className={`font-display font-mono-num text-[38px] leading-none font-semibold ${
                      featured ? "text-cyan-200" : "text-ink-900"
                    }`}
                  >
                    {tier.price}
                  </div>
                  <div
                    className={`mt-1 text-[11px] uppercase tracking-wider ${
                      featured ? "text-white/45" : "text-ink-400"
                    }`}
                  >
                    {t("billed")}
                  </div>
                </div>

                <a
                  href="#trial"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-4 py-3 text-[13px] font-semibold transition ${
                    featured
                      ? "bg-white text-ink-900 hover:bg-cyan-100"
                      : "border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white"
                  }`}
                >
                  {tier.cta}
                </a>

                <ul className="mt-7 space-y-2.5">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-[13.5px] ${
                        featured ? "text-white/85" : "text-ink-700"
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={`mt-0.5 flex-shrink-0 ${
                          featured ? "text-cyan-200" : "text-cyan-700"
                        }`}
                        aria-hidden
                      >
                        <path
                          d="M3 8.5l3 3 7-7"
                          stroke="currentColor"
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
