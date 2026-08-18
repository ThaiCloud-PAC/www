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

// vertical layout (y positions)
const CH_Y = 34; // channel tiles top
const OMS_Y = 128; // OMS node top
const OMS_H = 70;
const OMS_W = 168;
const CORE_Y = 262; // core top
const CORE_X = 130;
const CORE_W = 180;
const STAGE_H = 30;
const STAGE_GAP = 8;
const CORE_H = 44 + STAGES.length * (STAGE_H + STAGE_GAP) + 96; // ≈ 330
const CORE_B = CORE_Y + CORE_H;
const CAR_Y = CORE_B + 70; // carrier tiles top
const CUST_Y = CAR_Y + TILE + 84; // customer centre
const H = CUST_Y + 40;
const PILL_W = 88;
// products on the four corners of the core
const CORNERS = [
  { k: "Add-in", c: "#f37521", x: CORE_X - PILL_W - 12, y: CORE_Y - 12 },
  { k: "Ultra", c: "#035897", x: CORE_X + CORE_W + 12, y: CORE_Y - 12 },
  { k: "Prime", c: "#00a8a7", x: CORE_X - PILL_W - 12, y: CORE_B - 18 },
  { k: "Hub", c: "#d99a00", x: CORE_X + CORE_W + 12, y: CORE_B - 18 },
];

const rowX = (i: number, n: number) => CX - (n * TILE + (n - 1) * GAP) / 2 + i * (TILE + GAP);

export default function PlatformMap() {
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

        {/* ---- row caption ---- */}
        <text x={CX} y={CH_Y - 12} textAnchor="middle" className="pm-caption">SALES CHANNELS</text>

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
        <g transform={`translate(${CX - OMS_W / 2} ${OMS_Y})`} filter="url(#pmShadow)">
          <rect className="pm-node" x="0" y="0" width={OMS_W} height={OMS_H} rx="14" />
        </g>
        <g transform={`translate(${CX - OMS_W / 2} ${OMS_Y})`}>
          <text x={OMS_W / 2} y="26" textAnchor="middle" className="pm-node-title">OMS</text>
          <text x={OMS_W / 2} y="44" textAnchor="middle" className="pm-node-sub">orders · cancels</text>
          <text x={OMS_W / 2} y="58" textAnchor="middle" className="pm-node-sub">status updates</text>
        </g>

        {/* ---- LISA bridge (down: orders, up: status sync) ---- */}
        <path id="pmLisa" d={`M${CX - 8} ${OMS_Y + OMS_H} V ${CORE_Y}`} className="pm-path pm-path--strong" />
        {[0, 1, 2].map((i) => (
          <circle key={i} r="4" className="pm-dot pm-dot--order">
            <animateMotion dur="1.6s" repeatCount="indefinite" begin={`${i * 0.55}s`}>
              <mpath href="#pmLisa" />
            </animateMotion>
          </circle>
        ))}
        <path id="pmLisaBack" d={`M${CX + 8} ${CORE_Y} V ${OMS_Y + OMS_H}`} className="pm-path" />
        <circle r="3" className="pm-dot pm-dot--sync">
          <animateMotion dur="2.4s" repeatCount="indefinite">
            <mpath href="#pmLisaBack" />
          </animateMotion>
        </circle>
        <g transform={`translate(${CX + 46} ${OMS_Y + OMS_H + 30})`}>
          <rect className="pm-tag" x="-24" y="-10" width="48" height="19" rx="9.5" />
          <text y="3.5" textAnchor="middle" className="pm-tag-text">LISA</text>
        </g>

        {/* ---- Packiko Core (vertical pipeline) ---- */}
        <g transform={`translate(${CORE_X} ${CORE_Y})`} filter="url(#pmShadow)">
          <rect className="pm-core" x="0" y="0" width={CORE_W} height={CORE_H} rx="22" />
        </g>
        <g transform={`translate(${CORE_X} ${CORE_Y})`}>
          <text x={CORE_W / 2} y="28" textAnchor="middle" className="pm-core-title">Packiko Core API</text>
          <path id="pmStages" d={`M${CORE_W / 2} 44 V ${44 + STAGES.length * (STAGE_H + STAGE_GAP) - STAGE_GAP}`} className="pm-path-hidden" />
          {[0, 1].map((i) => (
            <circle key={i} r="10" className="pm-dot pm-dot--glow">
              <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 1.5}s`}>
                <mpath href="#pmStages" />
              </animateMotion>
            </circle>
          ))}
          {STAGES.map((s, i) => {
            const y = 44 + i * (STAGE_H + STAGE_GAP);
            const sw = CORE_W - 44;
            return (
              <g key={s} transform={`translate(22 ${y})`}>
                <rect className="pm-stage" style={{ animationDelay: `${i * 0.5}s` }} x="0" y="0" width={sw} height={STAGE_H} rx="9" />
                <text x={sw / 2} y="20" textAnchor="middle" className="pm-stage-text">{s}</text>
                {s === "Pack" && <circle cx={sw - 9} cy="8" r="3" className="pm-rec" />}
                {i < STAGES.length - 1 && <path d={`M${sw / 2} ${STAGE_H} V ${STAGE_H + STAGE_GAP}`} className="pm-stage-link" />}
              </g>
            );
          })}
          {(() => {
            const y0 = 44 + STAGES.length * (STAGE_H + STAGE_GAP) + 4;
            const pw = CORE_W - 44;
            return (
              <>
                <g transform={`translate(22 ${y0})`}>
                  <rect className="pm-pill pm-pill--guard" x="0" y="0" width={pw} height="26" rx="13" />
                  <circle cx="13" cy="13" r="4" className="pm-guard-dot" />
                  <text x="24" y="17" className="pm-pill-text">OMS Status Guard</text>
                </g>
                <g transform={`translate(22 ${y0 + 32})`}>
                  <rect className="pm-pill" x="0" y="0" width={pw} height="26" rx="13" />
                  <text x={pw / 2} y="17" textAnchor="middle" className="pm-pill-text pm-pill-text--light">Worker identity · audit</text>
                </g>
                <text x={CORE_W / 2} y={y0 + 82} textAnchor="middle" className="pm-core-sub">stock · VDO proof · dispatch</text>
              </>
            );
          })()}
        </g>

        {/* ---- products on the four corners of the core ---- */}
        {CORNERS.map((p, i) => {
          const left = p.x < CORE_X;
          const px = left ? p.x + PILL_W : p.x; // pill edge nearest the core
          const cxCore = left ? CORE_X : CORE_X + CORE_W;
          const py = p.y + 15;
          return (
            <g key={p.k}>
              <path d={`M${px} ${py} H ${cxCore}`} className="pm-path" />
              <g transform={`translate(${p.x} ${p.y})`}>
                <g className="pm-product" style={{ animationDelay: `${i * 0.7}s` }}>
                  <rect x="0" y="0" width={PILL_W} height="30" rx="15" fill={p.c} />
                  <text x={PILL_W / 2} y="19" textAnchor="middle" className="pm-product-text">{p.k}</text>
                </g>
              </g>
            </g>
          );
        })}
        {/* Add-in embeds in the OMS pack screen: dashed link up to OMS */}
        <path d={`M${CORNERS[0].x + 20} ${CORNERS[0].y} C ${CORNERS[0].x + 20} ${OMS_Y + 60}, ${CX - OMS_W / 2 - 30} ${OMS_Y + 35}, ${CX - OMS_W / 2} ${OMS_Y + 35}`} className="pm-path pm-path--addin" />

        {/* ---- Core → carriers → customer ---- */}
        {CARRIER_MARKS.map((m, i) => {
          const x = rowX(i, CARRIER_MARKS.length);
          const cx = x + TILE / 2;
          return (
            <g key={m.key}>
              <path id={`pmCar${i}`} d={`M${CX} ${CORE_B} C ${CX} ${CORE_B + 30}, ${cx} ${CAR_Y - 30}, ${cx} ${CAR_Y}`} className="pm-path" />
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
