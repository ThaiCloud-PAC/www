import { BrandTile, CHANNEL_MARKS, CARRIER_MARKS } from "./brandMarks";

/**
 * PlatformMap — vertical animated ecosystem diagram (fits phones):
 * sales channels → OMS → LISA → products (Add-in · Prime · Ultra · Hub)
 * → Packiko Core (stock · wave · pick · pack+VDO · gate) → carriers → customer.
 * Pure SVG + CSS keyframes (globals.css `.pm-*`), no deps.
 */
const W = 440;
const CX = W / 2;
const TILE = 36;
const GAP = 22;
const STAGES = ["Stock", "Wave", "Pick", "Pack", "Gate"];
const PRODUCTS = [
  { k: "Add-in", c: "#f37521" },
  { k: "Prime", c: "#00a8a7" },
  { k: "Ultra", c: "#035897" },
  { k: "Hub", c: "#d99a00" },
];

// vertical layout (y positions)
const CH_Y = 34; // channel tiles top
const OMS_Y = 128; // OMS node top (h 62)
const OMS_H = 62;
const PROD_Y = 262; // product pills top (h 30)
const CORE_Y = 322; // core top
const CORE_H = 190;
const CAR_Y = 578; // carrier tiles top
const CUST_Y = 690; // customer centre
const H = 730;

const rowX = (i: number, n: number) => CX - (n * TILE + (n - 1) * GAP) / 2 + i * (TILE + GAP);

export default function PlatformMap() {
  const coreX = 30;
  const coreW = W - 60;
  return (
    <div className="platform-map" aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" role="img">
        <defs>
          <filter id="pmShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#035897" floodOpacity="0.14" />
          </filter>
          <linearGradient id="pmCore" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#035897" />
            <stop offset="1" stopColor="#0a3d66" />
          </linearGradient>
        </defs>

        {/* ---- row captions ---- */}
        <text x={CX} y={CH_Y - 12} textAnchor="middle" className="pm-caption">SALES CHANNELS</text>
        <g transform={`translate(${CX} ${CAR_Y - 16})`}>
          <rect x="-40" y="-9" width="80" height="16" rx="8" className="pm-caption-bg" />
          <text textAnchor="middle" y="3.5" className="pm-caption">CARRIERS</text>
        </g>

        {/* ---- channels → OMS ---- */}
        {CHANNEL_MARKS.map((m, i) => {
          const x = rowX(i, CHANNEL_MARKS.length);
          const cx = x + TILE / 2;
          const y0 = CH_Y + TILE;
          return (
            <g key={m.key}>
              <path id={`pmCh${i}`} d={`M${cx} ${y0} C ${cx} ${y0 + 30}, ${CX} ${OMS_Y - 34}, ${CX} ${OMS_Y}`} className="pm-path" />
              <circle r="3.5" className="pm-dot pm-dot--order">
                <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${i * 0.37}s`}>
                  <mpath href={`#pmCh${i}`} />
                </animateMotion>
              </circle>
              <BrandTile m={m} x={x} y={CH_Y} />
            </g>
          );
        })}

        {/* ---- OMS ---- */}
        <g transform={`translate(${CX - 70} ${OMS_Y})`} filter="url(#pmShadow)">
          <rect className="pm-node" x="0" y="0" width="140" height={OMS_H} rx="14" />
        </g>
        <g transform={`translate(${CX - 70} ${OMS_Y})`}>
          <text x="70" y="26" textAnchor="middle" className="pm-node-title">OMS</text>
          <text x="70" y="45" textAnchor="middle" className="pm-node-sub">orders · cancels · status updates</text>
        </g>

        {/* ---- LISA bridge (down: orders, up: status sync) ---- */}
        <path id="pmLisa" d={`M${CX - 8} ${OMS_Y + OMS_H} V ${PROD_Y}`} className="pm-path pm-path--strong" />
        {[0, 1, 2].map((i) => (
          <circle key={i} r="4" className="pm-dot pm-dot--order">
            <animateMotion dur="1.6s" repeatCount="indefinite" begin={`${i * 0.55}s`}>
              <mpath href="#pmLisa" />
            </animateMotion>
          </circle>
        ))}
        <path id="pmLisaBack" d={`M${CX + 8} ${PROD_Y} V ${OMS_Y + OMS_H}`} className="pm-path" />
        <circle r="3" className="pm-dot pm-dot--sync">
          <animateMotion dur="2.4s" repeatCount="indefinite">
            <mpath href="#pmLisaBack" />
          </animateMotion>
        </circle>
        <g transform={`translate(${CX + 44} ${OMS_Y + OMS_H + 22})`}>
          <rect className="pm-tag" x="-24" y="-10" width="48" height="19" rx="9.5" />
          <text y="3.5" textAnchor="middle" className="pm-tag-text">LISA</text>
        </g>

        {/* ---- products (front-ends on top of the Core) ---- */}
        {PRODUCTS.map((p, i) => {
          const pw = 88;
          const gap = 10;
          const x = CX - (PRODUCTS.length * pw + (PRODUCTS.length - 1) * gap) / 2 + i * (pw + gap);
          return (
            <g key={p.k} transform={`translate(${x} ${PROD_Y})`}>
              <path d={`M${pw / 2} 30 V ${CORE_Y - PROD_Y}`} className="pm-path" />
              <g className="pm-product" style={{ animationDelay: `${i * 0.7}s` }}>
                <rect x="0" y="0" width={pw} height="30" rx="15" fill={p.c} />
                <text x={pw / 2} y="19" textAnchor="middle" className="pm-product-text">{p.k}</text>
              </g>
            </g>
          );
        })}
        {/* Add-in embeds in the OMS pack screen: dashed link back to OMS */}
        <path d={`M${CX - 148} ${PROD_Y + 15} C ${CX - 190} ${PROD_Y + 15}, ${CX - 190} ${OMS_Y + 31}, ${CX - 70} ${OMS_Y + 31}`} className="pm-path pm-path--addin" />

        {/* ---- Packiko Core ---- */}
        <g transform={`translate(${coreX} ${CORE_Y})`} filter="url(#pmShadow)">
          <rect className="pm-core" x="0" y="0" width={coreW} height={CORE_H} rx="22" />
        </g>
        <g transform={`translate(${coreX} ${CORE_Y})`}>
          <text x="22" y="32" className="pm-core-title">Packiko Core API</text>
          <text x={coreW - 22} y="32" textAnchor="end" className="pm-core-sub">one platform</text>
          <path id="pmStages" d={`M22 78 H ${coreW - 22}`} className="pm-path-hidden" />
          {[0, 1].map((i) => (
            <circle key={i} r="10" className="pm-dot pm-dot--glow">
              <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 1.5}s`}>
                <mpath href="#pmStages" />
              </animateMotion>
            </circle>
          ))}
          {STAGES.map((s, i) => {
            const sw = (coreW - 44 - 4 * 8) / 5;
            const x = 22 + i * (sw + 8);
            return (
              <g key={s} transform={`translate(${x} 60)`}>
                <rect className="pm-stage" style={{ animationDelay: `${i * 0.5}s` }} x="0" y="0" width={sw} height="36" rx="10" />
                <text x={sw / 2} y="22.5" textAnchor="middle" className="pm-stage-text">{s}</text>
                {s === "Pack" && <circle cx={sw - 7} cy="7" r="3" className="pm-rec" />}
              </g>
            );
          })}
          <g transform="translate(22 116)">
            <rect className="pm-pill pm-pill--guard" x="0" y="0" width="140" height="26" rx="13" />
            <circle cx="13" cy="13" r="4" className="pm-guard-dot" />
            <text x="24" y="17" className="pm-pill-text">OMS Status Guard</text>
          </g>
          <g transform={`translate(${coreW - 22 - 150} 116)`}>
            <rect className="pm-pill" x="0" y="0" width="150" height="26" rx="13" />
            <text x="75" y="17" textAnchor="middle" className="pm-pill-text pm-pill-text--light">Worker identity · audit</text>
          </g>
          <text x="22" y="170" className="pm-core-sub">stock · wave · pick · pack · dispatch · VDO proof</text>
        </g>

        {/* ---- Core → carriers → customer ---- */}
        {CARRIER_MARKS.map((m, i) => {
          const x = rowX(i, CARRIER_MARKS.length);
          const cx = x + TILE / 2;
          const y0 = CORE_Y + CORE_H;
          return (
            <g key={m.key}>
              <path id={`pmCar${i}`} d={`M${CX} ${y0} C ${CX} ${y0 + 30}, ${cx} ${CAR_Y - 30}, ${cx} ${CAR_Y}`} className="pm-path" />
              <circle r="3.5" className="pm-dot pm-dot--ship">
                <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${i * 0.37}s`}>
                  <mpath href={`#pmCar${i}`} />
                </animateMotion>
              </circle>
              <BrandTile m={m} x={x} y={CAR_Y} />
              <path id={`pmCust${i}`} d={`M${cx} ${CAR_Y + TILE} C ${cx} ${CAR_Y + TILE + 30}, ${CX} ${CUST_Y - 50}, ${CX} ${CUST_Y - 20}`} className="pm-path" />
              <circle r="3" className="pm-dot pm-dot--ship">
                <animateMotion dur="2s" repeatCount="indefinite" begin={`${1.1 + i * 0.37}s`}>
                  <mpath href={`#pmCust${i}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}
        <g transform={`translate(${CX} ${CUST_Y})`}>
          <circle r="20" className="pm-customer" />
          <text y="6" textAnchor="middle" className="pm-customer-text">☺</text>
        </g>
      </svg>
    </div>
  );
}
