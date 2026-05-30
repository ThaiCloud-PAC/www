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

  // Each card gets its own visual treatment — brand palette
  const cards = [
    {
      // Beauty • DTC — warm orange→amber, light text
      bg: "linear-gradient(135deg, #F37521 0%, #FAB217 100%)",
      darkText: true,
      pattern: (
        <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full opacity-25">
          <defs>
            <pattern id="p1" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="400" height="240" fill="url(#p1)" />
        </svg>
      ),
    },
    {
      // Fashion • Cross-border — deep navy, light text
      bg: "linear-gradient(135deg, #02283F 0%, #035897 100%)",
      darkText: true,
      pattern: (
        <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full opacity-30">
          <defs>
            <pattern id="p2" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M0 25h50M25 0v50" stroke="#60C7D3" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="400" height="240" fill="url(#p2)" />
        </svg>
      ),
    },
    {
      // F&B • Health — cyan, dark text
      bg: "linear-gradient(135deg, #60C7D3 0%, #84D4DD 100%)",
      darkText: false,
      pattern: (
        <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full opacity-20">
          <defs>
            <pattern id="p3" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 5l25 25-25 25-25-25z" fill="none" stroke="#02283F" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="400" height="240" fill="url(#p3)" />
        </svg>
      ),
    },
  ];

  return (
    <section id="stories" className="bg-bone pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-[12px] uppercase tracking-[0.16em] text-cyan-700">
              {t("eyebrow")}
            </span>
            <h2 className="font-display mt-4 max-w-2xl text-[36px] leading-[1.1] tracking-tight text-ink-900 md:text-[48px]">
              {t("title")}
            </h2>
          </div>
          <a
            href="#all-stories"
            className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-700 transition hover:text-ink-900"
          >
            {t("readAll")}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M2 8h11M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition group-hover:translate-x-0.5"
              />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((s, i) => {
            const c = cards[i];
            // darkText=true means the card has a dark background → use light text on top
            const useLightText = c.darkText;
            const textColor = useLightText ? "text-white" : "text-ink-950";
            return (
              <article
                key={s.title}
                className="group relative aspect-[5/6] overflow-hidden rounded-2xl"
                style={{ background: c.bg }}
              >
                {c.pattern}

                <div className="relative flex h-full flex-col justify-between p-7">
                  <div>
                    <span
                      className={`inline-flex items-center rounded-full border ${
                        useLightText ? "border-white/40 text-white/90" : "border-ink-950/25 text-ink-950/80"
                      } bg-black/0 px-2.5 py-1 text-[11px] uppercase tracking-wider`}
                    >
                      {s.tag}
                    </span>
                  </div>

                  <div>
                    <div
                      className={`font-display font-mono-num text-[60px] leading-none font-bold tracking-tight md:text-[72px] ${textColor}`}
                    >
                      {s.metric}
                    </div>
                    <div
                      className={`mt-2 text-[12.5px] uppercase tracking-wider ${
                        useLightText ? "text-white/70" : "text-ink-950/70"
                      }`}
                    >
                      {s.metricLabel}
                    </div>
                    <h3
                      className={`font-display mt-6 text-[22px] leading-snug ${textColor}`}
                    >
                      {s.title}
                    </h3>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
