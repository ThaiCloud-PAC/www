import { useTranslations } from "next-intl";

export function LogoCloud() {
  const t = useTranslations("LogoCloud");
  const logos = t.raw("logos") as string[];
  // duplicate for seamless marquee
  const all = [...logos, ...logos];

  return (
    <section className="border-y border-ink-100 bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-[12px] uppercase tracking-[0.16em] text-ink-500">
          {t("title")}
        </p>

        <div className="relative mt-8 overflow-hidden">
          {/* gradient masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

          <div className="animate-ticker flex w-max items-center gap-14">
            {all.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display whitespace-nowrap text-[22px] font-semibold tracking-tight text-ink-300 transition hover:text-ink-700"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
