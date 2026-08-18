/**
 * FlowVisual — a self-contained, CSS-animated "live warehouse" scene:
 * OMS (ZORT) feeds orders → Packiko plans a wave, a picker walks the rack
 * grid, the pack station records VDO proof, the dispatch gate releases to
 * the carrier. Pure SVG + CSS keyframes (see globals.css `.flow-*`), no deps.
 *
 * Placeholder for the externally-produced hero animation — swap the whole
 * component when that asset lands; the wrapper is 100% wide, aspect 4:3.
 */
const RACKS = [0, 1, 2, 3, 4];
const BINS = [0, 1, 2, 3, 4, 5];
const PICKS = [
  { r: 0, b: 1 },
  { r: 2, b: 4 },
  { r: 3, b: 0 },
  { r: 4, b: 3 },
];

export default function FlowVisual() {
  return (
    <div className="flow-visual" aria-hidden="true">
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" role="img">
        <defs>
          <linearGradient id="fvBrand" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#035897" />
            <stop offset="1" stopColor="#00a8a7" />
          </linearGradient>
          <linearGradient id="fvOrange" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#f37521" />
            <stop offset="1" stopColor="#fab217" />
          </linearGradient>
          <filter id="fvShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#035897" floodOpacity="0.16" />
          </filter>
        </defs>

        {/* backdrop grid */}
        <g className="flow-grid">
          {[...Array(9)].map((_, i) => (
            <line key={`v${i}`} x1={40 * (i + 1)} y1="0" x2={40 * (i + 1)} y2="300" />
          ))}
          {[...Array(7)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={40 * (i + 1)} x2="400" y2={40 * (i + 1)} />
          ))}
        </g>

        {/* ---- warehouse card ---- */}
        <g transform="translate(70 70)" filter="url(#fvShadow)">
          <rect className="flow-card" x="0" y="0" width="260" height="170" rx="18" />
        </g>
        <g transform="translate(70 70)">
          <text x="18" y="24" className="flow-card-title">Wave #0418 · Same-SKU</text>
          <text x="242" y="24" textAnchor="end" className="flow-card-meta">
            <tspan className="flow-live-dot">●</tspan> LIVE
          </text>

          {/* racks & bins */}
          <g transform="translate(18 40)">
            {RACKS.map((r) => (
              <g key={r} transform={`translate(0 ${r * 22})`}>
                <rect className="flow-rack" x="0" y="0" width="150" height="16" rx="4" />
                {BINS.map((b) => (
                  <rect key={b} className="flow-bin" x={4 + b * 24.5} y="3" width="20" height="10" rx="2" />
                ))}
              </g>
            ))}
            {/* pick targets light up in sequence */}
            {PICKS.map((p, i) => (
              <rect
                key={i}
                className="flow-bin flow-bin--pick"
                style={{ animationDelay: `${i * 1.5}s` }}
                x={4 + p.b * 24.5}
                y={3 + p.r * 22}
                width="20"
                height="10"
                rx="2"
              />
            ))}
            {/* picker walking the route */}
            <g className="flow-picker">
              <circle r="6" />
              <circle r="2.2" className="flow-picker-core" />
            </g>
          </g>

          {/* right rail: stations */}
          <g transform="translate(186 40)">
            {[
              { k: "Pick", d: 0 },
              { k: "Pack", d: 0.8 },
              { k: "Gate", d: 1.6 },
            ].map((s, i) => (
              <g key={s.k} transform={`translate(0 ${i * 38})`}>
                <rect className="flow-station" style={{ animationDelay: `${s.d}s` }} x="0" y="0" width="56" height="28" rx="8" />
                <text x="28" y="18" textAnchor="middle" className="flow-station-label">{s.k}</text>
              </g>
            ))}
            {/* VDO badge on Pack */}
            <g transform="translate(46 32)">
              <circle r="7" className="flow-vdo" />
              <circle r="2.4" className="flow-rec" />
            </g>
          </g>

          {/* footer counter */}
          <text x="18" y="160" className="flow-card-meta">orders today</text>
          <text x="242" y="160" textAnchor="end" className="flow-counter">
            <tspan className="flow-digit flow-digit--a">4</tspan>
            <tspan className="flow-digit flow-digit--b">,9</tspan>
            <tspan className="flow-digit flow-digit--c">82</tspan>
          </text>
        </g>

        {/* ---- OMS pill (top-left) ---- */}
        <g transform="translate(18 26)" filter="url(#fvShadow)">
          <rect className="flow-pill flow-pill--oms" x="0" y="0" width="92" height="30" rx="15" />
        </g>
        <g transform="translate(18 26)">
          <text x="14" y="19" className="flow-pill-text">OMS · ZORT</text>
        </g>
        {/* order packets travelling OMS → warehouse */}
        <path id="fvIn" d="M110 41 C 140 41, 150 70, 170 70" className="flow-path" />
        {[0, 1, 2].map((i) => (
          <circle key={i} r="4" className="flow-packet" style={{ animationDelay: `${i * 1.1}s` }}>
            <animateMotion dur="3.3s" repeatCount="indefinite" begin={`${i * 1.1}s`}>
              <mpath href="#fvIn" />
            </animateMotion>
          </circle>
        ))}

        <path id="fvOut" d="M330 240 C 330 262, 300 269, 290 269" className="flow-path" />
        {[0, 1].map((i) => (
          <circle key={i} r="4" className="flow-packet flow-packet--out" style={{ animationDelay: `${i * 1.6}s` }}>
            <animateMotion dur="3.2s" repeatCount="indefinite" begin={`${i * 1.6}s`}>
              <mpath href="#fvOut" />
            </animateMotion>
          </circle>
        ))}

        {/* ---- Carrier pill (bottom-right) ---- */}
        <g transform="translate(290 254)" filter="url(#fvShadow)">
          <rect className="flow-pill flow-pill--carrier" x="0" y="0" width="92" height="30" rx="15" />
        </g>
        <g transform="translate(290 254)">
          <text x="14" y="19" className="flow-pill-text">Carrier ➜</text>
        </g>
        {/* ---- Guard chip (bottom-left) ---- */}
        <g transform="translate(24 236)" filter="url(#fvShadow)">
          <rect className="flow-pill flow-pill--guard" x="0" y="0" width="134" height="30" rx="15" />
        </g>
        <g transform="translate(24 236)">
          <circle cx="16" cy="15" r="5" className="flow-guard-dot" />
          <text x="28" y="19" className="flow-pill-text flow-pill-text--dark">OMS Status Guard</text>
        </g>
      </svg>
    </div>
  );
}
