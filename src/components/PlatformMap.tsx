import { BrandTile, CHANNEL_MARKS, CARRIER_MARKS } from "./brandMarks";

/**
 * PlatformMap — horizontal animated ecosystem diagram:
 * sales channels → OMS → LISA → Packiko Core (stock · wave · pick · pack+VDO ·
 * gate, products on its four corners) → carriers → customer.
 * Pure SVG + CSS keyframes (globals.css `.pm-*`), no deps. Real brand marks
 * come from /public/brand (see brandMarks.tsx).
 */
const W = 900;
const H = 372;
const MID_Y = 190;
const ROW = (i: number) => 40 + i * 50; // 6 rows → 40 … 290 (tile h 36)
const TILE = 36;
const PILL_W = 84;
const STAGES = ["Stock", "Wave", "Pick", "Pack", "Gate"];

const CH_X = 24; // channel tiles
const OMS_X = 118;
const OMS_W = 100;
const OMS_H = 70;
const CORE_X = 268;
const CORE_W = 300;
const CORE_Y = 106;
const CORE_H = 168;
const CORE_R = CORE_X + CORE_W; // 568
const CAR_X = 700; // carrier pills
const CUST_X = 846;
const PROD_W = 88;
const CORNERS = [
  { k: "Add-in", c: "#f37521", x: CORE_X - PROD_W - 10, y: CORE_Y - 6 },
  { k: "Ultra", c: "#035897", x: CORE_R + 10, y: CORE_Y - 6 },
  { k: "Prime", c: "#00a8a7", x: CORE_X - PROD_W - 10, y: CORE_Y + CORE_H - 24 },
  { k: "Hub", c: "#d99a00", x: CORE_R + 10, y: CORE_Y + CORE_H - 24 },
];

export default function PlatformMap() {
  return (
    <div className="platform-map">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" role="img" aria-label="Packiko platform map">
        <defs>
          <filter id="pmShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#035897" floodOpacity="0.14" />
          </filter>
          <linearGradient id="pmCore" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#035897" />
            <stop offset="1" stopColor="#0a3d66" />
          </linearGradient>
        </defs>

        {/* ---- channels → OMS ---- */}
        {CHANNEL_MARKS.map((m, i) => {
          const y = ROW(i);
          const cy = y + TILE / 2;
          const x1 = CH_X + TILE;
          return (
            <g key={m.key}>
              <path id={`pmCh${i}`} d={`M${x1} ${cy} C ${x1 + 34} ${cy}, ${OMS_X - 34} ${MID_Y}, ${OMS_X} ${MID_Y}`} className="pm-path" />
              <circle r="3.5" className="pm-dot pm-dot--order">
                <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${i * 0.37}s`}>
                  <mpath href={`#pmCh${i}`} />
                </animateMotion>
              </circle>
              <BrandTile m={m} x={CH_X} y={y} />
            </g>
          );
        })}

        {/* ---- OMS ---- */}
        <g transform={`translate(${OMS_X} ${MID_Y - OMS_H / 2})`} filter="url(#pmShadow)">
          <rect className="pm-node" x="0" y="0" width={OMS_W} height={OMS_H} rx="14" />
        </g>
        <g transform={`translate(${OMS_X} ${MID_Y - OMS_H / 2})`}>
          <text x={OMS_W / 2} y="26" textAnchor="middle" className="pm-node-title">OMS</text>
          <text x={OMS_W / 2} y="44" textAnchor="middle" className="pm-node-sub">orders · cancels</text>
          <text x={OMS_W / 2} y="58" textAnchor="middle" className="pm-node-sub">status updates</text>
        </g>

        {/* ---- LISA bridge ---- */}
        <path id="pmLisa" d={`M${OMS_X + OMS_W} ${MID_Y - 6} H ${CORE_X}`} className="pm-path pm-path--strong" />
        {[0, 1, 2].map((i) => (
          <circle key={i} r="4" className="pm-dot pm-dot--order">
            <animateMotion dur="1.6s" repeatCount="indefinite" begin={`${i * 0.55}s`}>
              <mpath href="#pmLisa" />
            </animateMotion>
          </circle>
        ))}
        <path id="pmLisaBack" d={`M${CORE_X} ${MID_Y + 10} H ${OMS_X + OMS_W}`} className="pm-path" />
        <circle r="3" className="pm-dot pm-dot--sync">
          <animateMotion dur="2.4s" repeatCount="indefinite">
            <mpath href="#pmLisaBack" />
          </animateMotion>
        </circle>
        <g transform={`translate(${(OMS_X + OMS_W + CORE_X) / 2} ${MID_Y - 28})`}>
          <rect className="pm-tag" x="-24" y="-10" width="48" height="19" rx="9.5" />
          <text y="3.5" textAnchor="middle" className="pm-tag-text">LISA</text>
        </g>

        {/* ---- Packiko Core ---- */}
        <g transform={`translate(${CORE_X} ${CORE_Y})`} filter="url(#pmShadow)">
          <rect className="pm-core" x="0" y="0" width={CORE_W} height={CORE_H} rx="22" />
        </g>
        <g transform={`translate(${CORE_X} ${CORE_Y})`}>
          <text x="20" y="30" className="pm-core-title">Packiko Core API</text>
          <path id="pmStages" d={`M20 71 H ${CORE_W - 20}`} className="pm-path-hidden" />
          {[0, 1].map((i) => (
            <circle key={i} r="9" className="pm-dot pm-dot--glow">
              <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 1.5}s`}>
                <mpath href="#pmStages" />
              </animateMotion>
            </circle>
          ))}
          {STAGES.map((s, i) => {
            const sw = (CORE_W - 40 - 4 * 8) / 5;
            const x = 20 + i * (sw + 8);
            return (
              <g key={s} transform={`translate(${x} 54)`}>
                <rect className="pm-stage" style={{ animationDelay: `${i * 0.5}s` }} x="0" y="0" width={sw} height="34" rx="9" />
                <text x={sw / 2} y="21" textAnchor="middle" className="pm-stage-text">{s}</text>
                {s === "Pack" && <circle cx={sw - 7} cy="7" r="3" className="pm-rec" />}
              </g>
            );
          })}
          <g transform="translate(20 108)">
            <rect className="pm-pill pm-pill--guard" x="0" y="0" width="126" height="24" rx="12" />
            <circle cx="12" cy="12" r="4" className="pm-guard-dot" />
            <text x="22" y="16" className="pm-pill-text">OMS Status Guard</text>
          </g>
          <g transform={`translate(${CORE_W - 20 - 130} 108)`}>
            <rect className="pm-pill" x="0" y="0" width="130" height="24" rx="12" />
            <text x="65" y="16" textAnchor="middle" className="pm-pill-text pm-pill-text--light">Worker identity · audit</text>
          </g>
          <text x="20" y="154" className="pm-core-sub">stock · wave · pick · pack · dispatch · VDO proof</text>
        </g>

        {/* ---- products on the four corners of the core ---- */}
        {CORNERS.map((p, i) => {
          const left = p.x < CORE_X;
          const px = left ? p.x + PROD_W : p.x;
          const cx = left ? CORE_X : CORE_R;
          const py = p.y + 15;
          return (
            <g key={p.k}>
              <path d={`M${px} ${py} H ${cx}`} className="pm-path" />
              <g transform={`translate(${p.x} ${p.y})`}>
                <g className="pm-product" style={{ animationDelay: `${i * 0.7}s` }}>
                  <rect x="0" y="0" width={PROD_W} height="30" rx="15" fill={p.c} />
                  <text x={PROD_W / 2} y="19" textAnchor="middle" className="pm-product-text">{p.k}</text>
                </g>
              </g>
            </g>
          );
        })}
        {/* Add-in embeds in the OMS pack screen: dashed link back to OMS */}
        <path
          d={`M${CORNERS[0].x + 30} ${CORNERS[0].y + 30} C ${CORNERS[0].x + 30} ${MID_Y - 40}, ${OMS_X + OMS_W / 2} ${MID_Y - 70}, ${OMS_X + OMS_W / 2} ${MID_Y - OMS_H / 2}`}
          className="pm-path pm-path--addin"
        />

        {/* ---- Core → carriers → customer ---- */}
        {CARRIER_MARKS.map((m, i) => {
          const y = ROW(i);
          const cy = y + TILE / 2;
          return (
            <g key={m.key}>
              <path id={`pmCar${i}`} d={`M${CORE_R} ${MID_Y} C ${CORE_R + 50} ${MID_Y}, ${CAR_X - 40} ${cy}, ${CAR_X} ${cy}`} className="pm-path" />
              <circle r="3.5" className="pm-dot pm-dot--ship">
                <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${i * 0.37}s`}>
                  <mpath href={`#pmCar${i}`} />
                </animateMotion>
              </circle>
              <BrandTile m={m} x={CAR_X} y={y} w={PILL_W} h={TILE} />
              <path id={`pmCust${i}`} d={`M${CAR_X + PILL_W} ${cy} C ${CAR_X + PILL_W + 24} ${cy}, ${CUST_X - 40} ${MID_Y}, ${CUST_X - 20} ${MID_Y}`} className="pm-path" />
              <circle r="3" className="pm-dot pm-dot--ship">
                <animateMotion dur="2s" repeatCount="indefinite" begin={`${1.1 + i * 0.37}s`}>
                  <mpath href={`#pmCust${i}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}
        <g transform={`translate(${CUST_X} ${MID_Y})`}>
          <circle r="18" className="pm-customer" />
          <text y="5" textAnchor="middle" className="pm-customer-text">☺</text>
        </g>
      </svg>
    </div>
  );
}
