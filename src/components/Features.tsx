import { useTranslations } from "next-intl";

type FeatureItem = { title: string; description: string };

// Per-card gradient backdrop (fv-1 .. fv-4 from the mockup)
const visualBg = [
  // fv-1 — inbound — light cyan wash
  "linear-gradient(135deg, var(--color-cyan-100), var(--color-paper))",
  // fv-2 — picking — warm cream
  "linear-gradient(135deg, var(--color-orange-50), var(--color-amber-50))",
  // fv-3 — shipping — dark navy
  "linear-gradient(135deg, var(--color-ink-900), var(--color-ink-950))",
  // fv-4 — insight — cream → amber
  "linear-gradient(135deg, var(--color-cream), var(--color-amber-100))",
];

export function Features() {
  const t = useTranslations("Features");
  const items = t.raw("items") as FeatureItem[];

  const visuals = [
    // 1 — Inbound progress card
    (
      <svg viewBox="0 0 200 100" className="h-full w-full" key="inbound">
        <rect x="14" y="20" width="172" height="60" rx="6" fill="white" stroke="#DBE2EB" />
        <text x="22" y="34" fontSize="8" fill="#5D6C82" fontFamily="JetBrains Mono">
          PO-1188
        </text>
        <text x="120" y="34" fontSize="8" fill="#5D6C82" fontFamily="JetBrains Mono">
          432 units
        </text>
        <rect x="18" y="44" width="164" height="9" rx="4" fill="#ECF1F6" />
        <rect x="18" y="44" width="150" height="9" rx="4" fill="var(--color-cyan-500)" />
        <text x="22" y="68" fontSize="7" fill="#5D6C82" fontFamily="JetBrains Mono">
          RECEIVED 92%
        </text>
        <circle cx="175" cy="65" r="3" fill="var(--color-teal-500)" />
      </svg>
    ),
    // 2 — Picking wave + priority
    (
      <svg viewBox="0 0 200 100" className="h-full w-full" key="pick">
        <rect x="14" y="14" width="86" height="72" rx="8" fill="#02283F" />
        <text x="24" y="32" fontSize="8" fill="var(--color-cyan-500)" fontFamily="JetBrains Mono">
          WAVE #233
        </text>
        <text x="24" y="54" fontSize="22" fontWeight="700" fill="white" fontFamily="Bricolage Grotesque">
          18
        </text>
        <text x="24" y="64" fontSize="6" fill="rgba(255,255,255,0.5)" fontFamily="JetBrains Mono">
          ITEMS
        </text>
        <text x="24" y="78" fontSize="7" fill="rgba(255,255,255,0.75)" fontFamily="JetBrains Mono">
          ZONE B-2 • FEFO
        </text>
        <rect x="108" y="14" width="78" height="34" rx="8" fill="var(--color-orange-400)" />
        <text x="118" y="30" fontSize="7" fill="white" fontFamily="JetBrains Mono" fontWeight="700">
          PRIORITY
        </text>
        <text x="118" y="42" fontSize="12" fontWeight="700" fill="white" fontFamily="Bricolage Grotesque">
          SLA 2h
        </text>
        <rect x="108" y="52" width="78" height="34" rx="8" fill="white" stroke="#DBE2EB" />
        <text x="118" y="68" fontSize="6" fill="#5D6C82" fontFamily="JetBrains Mono">
          ACCURACY
        </text>
        <text x="118" y="80" fontSize="11" fontWeight="700" fill="#0F1A2A" fontFamily="JetBrains Mono">
          99.7%
        </text>
      </svg>
    ),
    // 3 — Shipping carriers (sits on dark navy fv-3 backdrop)
    (
      <svg viewBox="0 0 200 100" className="h-full w-full" key="ship">
        <text x="20" y="28" fontSize="8" fill="var(--color-cyan-500)" fontFamily="JetBrains Mono">
          SELECTED CARRIER
        </text>
        <g>
          <rect x="20" y="36" width="50" height="20" rx="10" fill="var(--color-amber-500)" />
          <text
            x="45"
            y="49"
            fontSize="8"
            fill="#02283F"
            fontFamily="JetBrains Mono"
            fontWeight="700"
            textAnchor="middle"
          >
            FLASH
          </text>
        </g>
        <g>
          <rect
            x="76"
            y="36"
            width="46"
            height="20"
            rx="10"
            fill="rgba(255,255,255,0.1)"
            stroke="rgba(255,255,255,0.3)"
          />
          <text
            x="99"
            y="49"
            fontSize="7"
            fill="rgba(255,255,255,0.6)"
            fontFamily="JetBrains Mono"
            textAnchor="middle"
          >
            KERRY
          </text>
        </g>
        <g>
          <rect
            x="128"
            y="36"
            width="38"
            height="20"
            rx="10"
            fill="rgba(255,255,255,0.1)"
            stroke="rgba(255,255,255,0.3)"
          />
          <text
            x="147"
            y="49"
            fontSize="7"
            fill="rgba(255,255,255,0.6)"
            fontFamily="JetBrains Mono"
            textAnchor="middle"
          >
            J&amp;T
          </text>
        </g>
        <text x="20" y="78" fontSize="7" fill="rgba(255,255,255,0.55)" fontFamily="JetBrains Mono">
          RULE: CHEAPEST IN ZONE A
        </text>
      </svg>
    ),
    // 4 — Insight sparkline
    (
      <svg viewBox="0 0 200 100" className="h-full w-full" key="insight">
        <rect x="14" y="14" width="172" height="72" rx="8" fill="white" stroke="#DBE2EB" />
        <text x="22" y="30" fontSize="7" fill="#5D6C82" fontFamily="JetBrains Mono">
          COST PER ORDER
        </text>
        <text x="22" y="50" fontSize="22" fontWeight="700" fill="#02283F" fontFamily="JetBrains Mono">
          ฿24.10
        </text>
        <text x="22" y="62" fontSize="7" fill="var(--color-orange-500)" fontFamily="JetBrains Mono" fontWeight="700">
          ▼ 38% vs last quarter
        </text>
        <polyline
          points="22,80 50,72 78,76 106,65 134,58 162,48 182,38"
          fill="none"
          stroke="var(--color-cyan-500)"
          strokeWidth="2.2"
        />
        <circle cx="182" cy="38" r="3.5" fill="var(--color-cyan-500)" />
      </svg>
    ),
  ];

  return (
    <section id="product" className="bg-white py-[100px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-[60px] max-w-[760px] text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-500">
            {t("eyebrow")}
          </span>
          <h2 className="font-display mt-3.5 text-[clamp(34px,4.5vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900">
            {t("title")}
          </h2>
          <p className="mt-4 text-[17px] text-slate-500">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-[18px] border border-ink-100 bg-white p-[22px] transition-all duration-200 hover:-translate-y-[3px] hover:border-cyan-500 hover:shadow-[0_20px_40px_-20px_rgba(0,168,167,0.25)]"
            >
              <div
                className="relative mb-[18px] overflow-hidden rounded-xl"
                style={{ aspectRatio: "16/9", background: visualBg[i] }}
              >
                {visuals[i]}
              </div>
              <h3 className="font-display mb-2 text-[19px] font-bold tracking-[-0.01em] text-slate-900">
                {item.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
