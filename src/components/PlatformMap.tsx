import { BRAND_PATHS } from "./brandIcons";

/**
 * PlatformMap — animated ecosystem diagram:
 * sales channels → OMS → LISA → Packiko Core (stock · wave · pick · pack+VDO ·
 * gate) with the four products around it → carriers (fan-out) → customer.
 * Pure SVG + CSS keyframes (globals.css `.pm-*`), no deps.
 */
type Brand = { k: string; icon?: keyof typeof BRAND_PATHS; letter?: string; color: string };

const CHANNELS: Brand[] = [
  { k: "Shopee", icon: "shopee", color: "#EE4D2D" },
  { k: "Lazada", letter: "L", color: "#0F146D" },
  { k: "TikTok Shop", icon: "tiktok", color: "#000000" },
  { k: "LINE", icon: "line", color: "#00C300" },
  { k: "ShopSCAPE", letter: "S", color: "#1F6FEB" },
  { k: "Storefront", letter: "W", color: "#035897" },
];
const CARRIERS: Brand[] = [
  { k: "Kerry Express", letter: "K", color: "#F37021" },
  { k: "Flash Express", letter: "F", color: "#F5B400" },
  { k: "J&T Express", letter: "J", color: "#E31E24" },
  { k: "Thailand Post", letter: "T", color: "#C8102E" },
  { k: "Ninja Van", letter: "N", color: "#C4161C" },
  { k: "DHL", icon: "dhl", color: "#D40511" },
];
const STAGES = ["Stock", "Wave", "Pick", "Pack", "Gate"];
const PRODUCTS = [
  { k: "Add-in", x: 312, y: 48, c: "#f37521" },
  { k: "Prime", x: 312, y: 316, c: "#00a8a7" },
  { k: "Ultra", x: 512, y: 48, c: "#035897" },
  { k: "Hub", x: 512, y: 316, c: "#d99a00" },
];

const CORE_X = 308;
const CORE_W = 290;
const CORE_R = CORE_X + CORE_W; // 598
const MID_Y = 190;
const rowY = (i: number) => 40 + i * 50; // 6 rows: 40 … 290

function BrandGlyph({ b, x, y }: { b: Brand; x: number; y: number }) {
  if (b.icon) {
    const p = BRAND_PATHS[b.icon];
    return (
      <g transform={`translate(${x} ${y}) scale(0.62)`}>
        <path d={p.path} fill={b.color} />
      </g>
    );
  }
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cx="7.5" cy="7.5" r="7.5" fill={b.color} />
      <text x="7.5" y="10.6" textAnchor="middle" className="pm-letter">{b.letter}</text>
    </g>
  );
}

export default function PlatformMap() {
  return (
    <div className="platform-map" aria-hidden="true">
      <svg viewBox="0 0 920 372" preserveAspectRatio="xMidYMid meet" role="img">
        <defs>
          <filter id="pmShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#035897" floodOpacity="0.14" />
          </filter>
          <linearGradient id="pmCore" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#035897" />
            <stop offset="1" stopColor="#0a3d66" />
          </linearGradient>
        </defs>

        {/* ---- channels (left) → OMS ---- */}
        {CHANNELS.map((c, i) => {
          const y = rowY(i);
          return (
            <g key={c.k} transform={`translate(16 ${y})`}>
              <rect className="pm-chip" x="0" y="0" width="112" height="30" rx="15" />
              <BrandGlyph b={c} x={10} y={7.5} />
              <text x="32" y="19" className="pm-chip-text">{c.k}</text>
              <path id={`pmCh${i}`} d={`M112 15 C 140 15, 128 ${MID_Y - y}, 152 ${MID_Y - y}`} className="pm-path" />
              <circle r="3.5" className="pm-dot pm-dot--order">
                <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${i * 0.4}s`}>
                  <mpath href={`#pmCh${i}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}

        {/* ---- OMS node ---- */}
        <g transform={`translate(168 ${MID_Y - 34})`} filter="url(#pmShadow)">
          <rect className="pm-node" x="0" y="0" width="96" height="68" rx="14" />
        </g>
        <g transform={`translate(168 ${MID_Y - 34})`}>
          <text x="48" y="24" textAnchor="middle" className="pm-node-title">OMS</text>
          <text x="48" y="42" textAnchor="middle" className="pm-node-sub">orders · cancels</text>
          <text x="48" y="56" textAnchor="middle" className="pm-node-sub">status updates</text>
        </g>

        {/* ---- LISA bridge ---- */}
        <path id="pmLisa" d={`M264 ${MID_Y} H ${CORE_X}`} className="pm-path pm-path--strong" />
        {[0, 1, 2].map((i) => (
          <circle key={i} r="4" className="pm-dot pm-dot--order">
            <animateMotion dur="1.6s" repeatCount="indefinite" begin={`${i * 0.55}s`}>
              <mpath href="#pmLisa" />
            </animateMotion>
          </circle>
        ))}
        <path id="pmLisaBack" d={`M${CORE_X} ${MID_Y + 16} H 264`} className="pm-path" />
        <circle r="3" className="pm-dot pm-dot--sync">
          <animateMotion dur="2.4s" repeatCount="indefinite">
            <mpath href="#pmLisaBack" />
          </animateMotion>
        </circle>
        <g transform={`translate(286 ${MID_Y - 20})`}>
          <rect className="pm-tag" x="-24" y="-10" width="48" height="19" rx="9.5" />
          <text y="3.5" textAnchor="middle" className="pm-tag-text">LISA</text>
        </g>

        {/* ---- Packiko Core ---- */}
        <g transform={`translate(${CORE_X} 106)`} filter="url(#pmShadow)">
          <rect className="pm-core" x="0" y="0" width={CORE_W} height="168" rx="22" />
        </g>
        <g transform={`translate(${CORE_X} 106)`}>
          <text x="20" y="30" className="pm-core-title">Packiko Core API</text>
          <path id="pmStages" d="M20 71 H 270" className="pm-path-hidden" />
          {[0, 1].map((i) => (
            <circle key={i} r="9" className="pm-dot pm-dot--glow">
              <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 1.5}s`}>
                <mpath href="#pmStages" />
              </animateMotion>
            </circle>
          ))}
          {STAGES.map((s, i) => (
            <g key={s} transform={`translate(${20 + i * 51} 54)`}>
              <rect className="pm-stage" style={{ animationDelay: `${i * 0.5}s` }} x="0" y="0" width="44" height="34" rx="9" />
              <text x="22" y="21" textAnchor="middle" className="pm-stage-text">{s}</text>
              {s === "Pack" && <circle cx="38" cy="6" r="3" className="pm-rec" />}
              {i < STAGES.length - 1 && <path d="M44 17 H 51" className="pm-stage-link" />}
            </g>
          ))}
          <g transform="translate(20 108)">
            <rect className="pm-pill pm-pill--guard" x="0" y="0" width="122" height="24" rx="12" />
            <circle cx="12" cy="12" r="4" className="pm-guard-dot" />
            <text x="22" y="16" className="pm-pill-text">OMS Status Guard</text>
          </g>
          <g transform="translate(148 108)">
            <rect className="pm-pill" x="0" y="0" width="122" height="24" rx="12" />
            <text x="61" y="16" textAnchor="middle" className="pm-pill-text pm-pill-text--light">Worker identity · audit</text>
          </g>
          <text x="20" y="156" className="pm-core-sub">stock · wave · pick · pack · dispatch</text>
        </g>

        {/* ---- products around the core ---- */}
        {PRODUCTS.map((p, i) => (
          <g key={p.k} transform={`translate(${p.x} ${p.y})`}>
            <path d={p.y < MID_Y ? "M43 30 V 58" : "M43 0 V -42"} className="pm-path" />
            <g className="pm-product" style={{ animationDelay: `${i * 0.7}s` }}>
              <rect x="0" y="0" width="86" height="30" rx="15" fill={p.c} />
              <text x="43" y="19" textAnchor="middle" className="pm-product-text">{p.k}</text>
            </g>
          </g>
        ))}
        {/* Add-in embeds in the OMS pack screen: dashed link back to OMS */}
        <path d="M312 63 C 272 63, 250 100, 222 160" className="pm-path pm-path--addin" />

        {/* ---- Core → carriers (fan-out) → customer ---- */}
        {CARRIERS.map((c, i) => {
          const y = rowY(i);
          return (
            <g key={c.k}>
              <path id={`pmCar${i}`} d={`M${CORE_R} ${MID_Y} C ${CORE_R + 40} ${MID_Y}, ${CORE_R + 30} ${y + 15}, 690 ${y + 15}`} className="pm-path" />
              <circle r="3.5" className="pm-dot pm-dot--ship">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin={`${i * 0.4}s`}>
                  <mpath href={`#pmCar${i}`} />
                </animateMotion>
              </circle>
              <g transform={`translate(690 ${y})`}>
                <rect className="pm-chip" x="0" y="0" width="118" height="30" rx="15" />
                <BrandGlyph b={c} x={10} y={7.5} />
                <text x="32" y="19" className="pm-chip-text">{c.k}</text>
              </g>
              <path id={`pmCust${i}`} d={`M808 ${y + 15} C 836 ${y + 15}, 836 ${MID_Y}, 866 ${MID_Y}`} className="pm-path" />
              <circle r="3" className="pm-dot pm-dot--ship">
                <animateMotion dur="2s" repeatCount="indefinite" begin={`${1.2 + i * 0.4}s`}>
                  <mpath href={`#pmCust${i}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}
        <g transform={`translate(884 ${MID_Y})`}>
          <circle r="18" className="pm-customer" />
          <text y="5" textAnchor="middle" className="pm-customer-text">☺</text>
        </g>
      </svg>
    </div>
  );
}
