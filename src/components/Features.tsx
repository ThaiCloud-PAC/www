import { useTranslations } from "next-intl";

type FeatureItem = { title: string; description: string };

export function Features() {
  const t = useTranslations("Features");
  const items = t.raw("items") as FeatureItem[];

  const visuals = [
    // Inbound — receiving table
    (
      <svg viewBox="0 0 200 100" className="h-full w-full" key="inbound">
        <rect x="10" y="20" width="180" height="60" rx="6" fill="var(--color-ink-50)" />
        <line x1="10" y1="40" x2="190" y2="40" stroke="var(--color-ink-200)" />
        <text x="22" y="34" fontSize="8" fill="var(--color-ink-500)" fontFamily="JetBrains Mono">PO-1188</text>
        <text x="120" y="34" fontSize="8" fill="var(--color-ink-500)" fontFamily="JetBrains Mono">432 units</text>
        <rect x="14" y="46" width="172" height="10" rx="3" fill="white" stroke="var(--color-ink-100)" />
        <rect x="14" y="46" width="158" height="10" rx="3" fill="var(--color-cyan-500)" opacity="0.85" />
        <text x="22" y="68" fontSize="7" fill="var(--color-ink-400)" fontFamily="JetBrains Mono">RECEIVED 92%</text>
        <circle cx="178" cy="64" r="3" fill="var(--color-cyan-500)" />
      </svg>
    ),
    // Picking — wave card
    (
      <svg viewBox="0 0 200 100" className="h-full w-full" key="pick">
        <rect x="10" y="14" width="85" height="72" rx="6" fill="var(--color-ink-900)" />
        <text x="20" y="32" fontSize="8" fill="var(--color-cyan-300)" fontFamily="JetBrains Mono">WAVE #233</text>
        <text x="20" y="50" fontSize="20" fontWeight="700" fill="white" fontFamily="Bricolage Grotesque">18</text>
        <text x="20" y="62" fontSize="6" fill="rgba(255,255,255,0.5)" fontFamily="JetBrains Mono">ITEMS</text>
        <text x="20" y="76" fontSize="7" fill="rgba(255,255,255,0.7)" fontFamily="JetBrains Mono">ZONE B-2 • FEFO</text>
        <rect x="105" y="14" width="85" height="34" rx="6" fill="var(--color-orange-400)" opacity="0.18" />
        <text x="115" y="30" fontSize="7" fill="var(--color-orange-600)" fontFamily="JetBrains Mono">PRIORITY</text>
        <text x="115" y="42" fontSize="11" fontWeight="700" fill="var(--color-ink-900)" fontFamily="Bricolage Grotesque">SLA 2h</text>
        <rect x="105" y="52" width="85" height="34" rx="6" fill="var(--color-ink-50)" />
        <text x="115" y="68" fontSize="6" fill="var(--color-ink-500)" fontFamily="JetBrains Mono">ACCURACY</text>
        <text x="115" y="80" fontSize="11" fontWeight="700" fill="var(--color-ink-900)" fontFamily="JetBrains Mono">99.7%</text>
      </svg>
    ),
    // Shipping — carrier badges
    (
      <svg viewBox="0 0 200 100" className="h-full w-full" key="ship">
        <rect x="10" y="14" width="180" height="72" rx="6" fill="var(--color-ink-50)" />
        <text x="22" y="30" fontSize="7" fill="var(--color-ink-400)" fontFamily="JetBrains Mono">SELECTED CARRIER</text>
        {[
          { x: 22, t: "FLASH", on: true },
          { x: 70, t: "KERRY", on: false },
          { x: 115, t: "J&T", on: false },
          { x: 150, t: "POST", on: false },
        ].map((c) => (
          <g key={c.t}>
            <rect
              x={c.x}
              y={36}
              width={c.t.length * 7 + 8}
              height={16}
              rx={8}
              fill={c.on ? "var(--color-ink-900)" : "white"}
              stroke="var(--color-ink-200)"
            />
            <text
              x={c.x + (c.t.length * 7 + 8) / 2}
              y={47}
              fontSize="7"
              textAnchor="middle"
              fill={c.on ? "var(--color-cyan-300)" : "var(--color-ink-500)"}
              fontFamily="JetBrains Mono"
              fontWeight="600"
            >
              {c.t}
            </text>
          </g>
        ))}
        <text x="22" y="72" fontSize="7" fill="var(--color-ink-400)" fontFamily="JetBrains Mono">RULE • CHEAPEST IN ZONE A</text>
      </svg>
    ),
    // Insight — sparkline
    (
      <svg viewBox="0 0 200 100" className="h-full w-full" key="insight">
        <rect x="10" y="14" width="180" height="72" rx="6" fill="white" stroke="var(--color-ink-100)" />
        <text x="22" y="30" fontSize="7" fill="var(--color-ink-400)" fontFamily="JetBrains Mono">COST PER ORDER</text>
        <text x="22" y="50" fontSize="22" fontWeight="700" fill="var(--color-ink-900)" fontFamily="JetBrains Mono">฿24.10</text>
        <text x="22" y="62" fontSize="7" fill="var(--color-orange-500)" fontFamily="JetBrains Mono">▼ 38% vs last quarter</text>
        <polyline
          points="22,80 50,72 78,76 106,65 134,58 162,48 188,38"
          fill="none"
          stroke="var(--color-cyan-500)"
          strokeWidth="2"
        />
        <circle cx="188" cy="38" r="3" fill="var(--color-cyan-500)" />
      </svg>
    ),
  ];

  return (
    <section id="product" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[12px] uppercase tracking-[0.16em] text-cyan-700">
            {t("eyebrow")}
          </span>
          <h2 className="font-display mt-4 text-[36px] leading-[1.1] tracking-tight text-ink-900 md:text-[52px]">
            {t("title")}
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-500">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group relative flex flex-col rounded-2xl border border-ink-100 bg-white p-5 transition hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="aspect-[2/1] overflow-hidden rounded-lg bg-ink-50">
                {visuals[i]}
              </div>
              <h3 className="font-display mt-5 text-[20px] font-semibold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
