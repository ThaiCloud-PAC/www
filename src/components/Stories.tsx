import { useTranslations } from "next-intl";

type Story = {
  tag: string;
  title: string;
  metric: string;
  metricLabel: string;
};

export function Stories() {
  const t = useTranslations("Stories");
  const items = t.raw("items") as Story[];

  const cards = [
    {
      // 1 Beauty • DTC — warm gradient, dark text
      bg: "linear-gradient(135deg, var(--color-orange-500), var(--color-amber-500))",
      lightText: false,
    },
    {
      // 2 Fashion — deep navy, light text
      bg: "linear-gradient(135deg, var(--color-ink-950), var(--color-ink-900))",
      lightText: true,
    },
    {
      // 3 F&B — cyan → brand teal, dark text
      bg: "linear-gradient(135deg, var(--color-cyan-500), var(--color-teal-500))",
      lightText: false,
    },
  ];

  return (
    <section id="stories" className="bg-bone pb-[100px] pt-[80px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-500">
              {t("eyebrow")}
            </span>
            <h2 className="font-display mt-3 max-w-[700px] text-[clamp(30px,4vw,46px)] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900">
              {t("title")}
            </h2>
          </div>
          <a
            href="#all-stories"
            className="group inline-flex items-center gap-1.5 border-b border-current pb-0.5 text-[14px] font-semibold text-slate-700 transition hover:text-slate-900"
          >
            {t("readAll")} →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {items.map((s, i) => {
            const c = cards[i];
            const textColor = c.lightText ? "text-white" : "text-slate-950";
            const tagBorder = c.lightText
              ? "border-white/40 text-white/85"
              : "border-current opacity-85";
            const labelOpacity = c.lightText ? "text-white/78" : "opacity-78";
            return (
              <article
                key={s.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[20px] p-7 ${textColor}`}
                style={{ background: c.bg, aspectRatio: "5/6" }}
              >
                <span
                  className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.12em] ${tagBorder}`}
                >
                  {s.tag}
                </span>

                <div>
                  <div
                    className="font-mono-num font-bold leading-[0.9] tracking-[-0.04em]"
                    style={{ fontSize: "clamp(56px, 8vw, 84px)" }}
                  >
                    {s.metric}
                  </div>
                  <div
                    className={`mt-2 text-[11px] uppercase tracking-[0.12em] ${labelOpacity}`}
                  >
                    {s.metricLabel}
                  </div>
                  <h3 className="font-display mt-6 text-[21px] font-bold leading-[1.25] tracking-[-0.01em]">
                    {s.title}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
