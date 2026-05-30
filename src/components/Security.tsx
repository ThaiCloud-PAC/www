import { useTranslations } from "next-intl";

export function Security() {
  const t = useTranslations("Security");
  const badges = t.raw("badges") as string[];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-[12px] uppercase tracking-[0.16em] text-cyan-700">
              {t("eyebrow")}
            </span>
            <h2 className="font-display mt-4 text-[32px] leading-[1.15] tracking-tight text-ink-900 md:text-[42px]">
              {t("title")}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
              {t("subtitle")}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {badges.map((b, i) => (
                <div
                  key={b}
                  className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-4 py-4 transition hover:border-cyan-500/50"
                >
                  <ShieldGlyph idx={i} />
                  <span className="text-[13px] font-medium leading-tight text-ink-800">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldGlyph({ idx }: { idx: number }) {
  const accents = ["#035897", "#60C7D3", "#00A8A7", "#0A6BA8", "#3DB5C3", "#2BA0AE"];
  const c = accents[idx % accents.length];
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path
        d="M14 3l9 4v7c0 5-3.5 9.5-9 11-5.5-1.5-9-6-9-11V7l9-4z"
        fill={c}
        opacity="0.15"
      />
      <path
        d="M14 3l9 4v7c0 5-3.5 9.5-9 11-5.5-1.5-9-6-9-11V7l9-4z"
        stroke={c}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 14l3 3 5-6"
        stroke={c}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
