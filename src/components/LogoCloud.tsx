import { useTranslations } from "next-intl";

export function LogoCloud() {
  const t = useTranslations("LogoCloud");
  const logos = t.raw("logos") as string[];
  // duplicate for seamless marquee
  const all = [...logos, ...logos];

  return (
    <section className="border-b border-ink-100 bg-white py-[60px]">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-[12px] uppercase tracking-[0.15em] text-slate-500">
          {t("title")}
        </p>

        <div className="relative mt-8 overflow-hidden">
          {/* gradient fade masks — 80px */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

          <div className="animate-ticker flex w-max items-center gap-16">
            {all.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display whitespace-nowrap text-[24px] font-bold tracking-[-0.01em] text-slate-300 transition hover:text-slate-700"
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
