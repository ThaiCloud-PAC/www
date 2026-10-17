import { useTranslations } from "next-intl";

const accents = ["#035897", "#F37521", "#00A8A7", "#C58E12", "#008B8B", "#0671B8"];

export function Security() {
  const t = useTranslations("Security");
  const badges = t.raw("badges") as string[];

  return (
    <section className="bg-white py-[100px]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-[60px]">
        <div className="lg:col-span-5">
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-teal-600">
            {t("eyebrow")}
          </span>
          <h2 className="font-display mt-3.5 text-[clamp(28px,3vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-slate-900">
            {t("title")}
          </h2>
          <p className="mt-4 text-[15px] leading-[1.65] text-slate-500">
            {t("subtitle")}
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {badges.map((b, i) => (
              <div
                key={b}
                className="flex items-center gap-3 rounded-[14px] border border-ink-100 px-4 py-4 transition hover:border-cyan-500"
              >
                <ShieldGlyph color={accents[i % accents.length]} />
                <span className="text-[13px] font-semibold leading-[1.3] text-slate-700">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldGlyph({ color }: { color: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className="shrink-0"
      aria-hidden
    >
      <path
        d="M14 3l9 4v7c0 5-3.5 9.5-9 11-5.5-1.5-9-6-9-11V7l9-4z"
        fill={color}
        opacity="0.15"
      />
      <path
        d="M14 3l9 4v7c0 5-3.5 9.5-9 11-5.5-1.5-9-6-9-11V7l9-4z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 14l3 3 5-6"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
