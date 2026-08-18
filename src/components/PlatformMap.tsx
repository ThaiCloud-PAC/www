/**
 * PlatformMap — animated ecosystem diagram:
 * sales channels → OMS → LISA → Packiko Core (stock · wave · pick · pack+VDO ·
 * gate) with the four products around it → carriers → customer.
 * Pure SVG + CSS keyframes (globals.css `.pm-*`), no deps.
 */
const CHANNELS = ["Shopee", "Lazada", "TikTok", "LINE", "Web"];
const STAGES = ["Stock", "Wave", "Pick", "Pack", "Gate"];
const PRODUCTS = [
  { k: "Add-in", x: 300, y: 48, c: "#f37521" },
  { k: "Prime", x: 300, y: 312, c: "#00a8a7" },
  { k: "Ultra", x: 500, y: 48, c: "#035897" },
  { k: "Hub", x: 500, y: 312, c: "#d99a00" },
];

export default function PlatformMap() {
  return (
    <div className="platform-map" aria-hidden="true">
      <svg viewBox="0 0 800 360" preserveAspectRatio="xMidYMid meet" role="img">
        <defs>
          <filter id="pmShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#035897" floodOpacity="0.14" />
          </filter>
          <linearGradient id="pmCore" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#035897" />
            <stop offset="1" stopColor="#0a3d66" />
          </linearGradient>
        </defs>

        {/* ---- channels (left) ---- */}
        {CHANNELS.map((c, i) => (
          <g key={c} transform={`translate(20 ${60 + i * 52})`}>
            <rect className="pm-chip" x="0" y="0" width="74" height="30" rx="15" />
            <text x="37" y="19" textAnchor="middle" className="pm-chip-text">{c}</text>
            <path id={`pmCh${i}`} d={`M74 15 C 100 15, 100 ${180 - (60 + i * 52)}, 128 ${180 - (60 + i * 52)}`} className="pm-path" />
            <circle r="3.5" className="pm-dot pm-dot--order">
              <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${i * 0.45}s`}>
                <mpath href={`#pmCh${i}`} />
              </animateMotion>
            </circle>
          </g>
        ))}

        {/* ---- OMS node ---- */}
        <g transform="translate(148 150)" filter="url(#pmShadow)">
          <rect className="pm-node" x="0" y="0" width="86" height="60" rx="14" />
        </g>
        <g transform="translate(148 150)">
          <text x="43" y="27" textAnchor="middle" className="pm-node-title">OMS</text>
          <text x="43" y="44" textAnchor="middle" className="pm-node-sub">orders · cancels</text>
        </g>

        {/* ---- LISA bridge ---- */}
        <path id="pmLisa" d="M234 180 H 296" className="pm-path pm-path--strong" />
        {[0, 1, 2].map((i) => (
          <circle key={i} r="4" className="pm-dot pm-dot--order">
            <animateMotion dur="1.6s" repeatCount="indefinite" begin={`${i * 0.55}s`}>
              <mpath href="#pmLisa" />
            </animateMotion>
          </circle>
        ))}
        {/* status sync back */}
        <path id="pmLisaBack" d="M296 196 H 234" className="pm-path" />
        <circle r="3" className="pm-dot pm-dot--sync">
          <animateMotion dur="2.4s" repeatCount="indefinite">
            <mpath href="#pmLisaBack" />
          </animateMotion>
        </circle>
        <g transform="translate(265 160)">
          <rect className="pm-tag" x="-22" y="-10" width="44" height="18" rx="9" />
          <text y="3" textAnchor="middle" className="pm-tag-text">LISA</text>
        </g>

        {/* ---- Packiko Core ---- */}
        <g transform="translate(296 96)" filter="url(#pmShadow)">
          <rect className="pm-core" x="0" y="0" width="290" height="168" rx="22" />
        </g>
        <g transform="translate(296 96)">
          <text x="20" y="30" className="pm-core-title">Packiko Core API</text>
          <text x="270" y="30" textAnchor="end" className="pm-core-sub">multi-tenant</text>
          {/* order dots travel under the stage row */}
          <path id="pmStages" d="M20 71 H 270" className="pm-path-hidden" />
          {[0, 1].map((i) => (
            <circle key={i} r="9" className="pm-dot pm-dot--glow">
              <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 1.5}s`}>
                <mpath href="#pmStages" />
              </animateMotion>
            </circle>
          ))}
          {/* stages */}
          {STAGES.map((s, i) => (
            <g key={s} transform={`translate(${20 + i * 51} 54)`}>
              <rect className="pm-stage" style={{ animationDelay: `${i * 0.5}s` }} x="0" y="0" width="44" height="34" rx="9" />
              <text x="22" y="21" textAnchor="middle" className="pm-stage-text">{s}</text>
              {s === "Pack" && <circle cx="38" cy="6" r="3" className="pm-rec" />}
              {i < STAGES.length - 1 && <path d={`M44 17 H 51`} className="pm-stage-link" />}
            </g>
          ))}
          {/* guard + identity row */}
          <g transform="translate(20 108)">
            <rect className="pm-pill pm-pill--guard" x="0" y="0" width="112" height="24" rx="12" />
            <circle cx="12" cy="12" r="4" className="pm-guard-dot" />
            <text x="22" y="16" className="pm-pill-text">OMS Status Guard</text>
          </g>
          <g transform="translate(140 108)">
            <rect className="pm-pill" x="0" y="0" width="130" height="24" rx="12" />
            <text x="65" y="16" textAnchor="middle" className="pm-pill-text pm-pill-text--light">Worker identity · audit</text>
          </g>
          <text x="20" y="156" className="pm-core-sub">stock · documents · shipping · AI wave &amp; route</text>
        </g>

        {/* ---- products around the core ---- */}
        {PRODUCTS.map((p, i) => (
          <g key={p.k} transform={`translate(${p.x} ${p.y})`}>
            <path d={p.y < 180 ? "M43 30 V 48" : "M43 0 V -18"} className="pm-path" />
            <g className="pm-product" style={{ animationDelay: `${i * 0.7}s` }}>
              <rect x="0" y="0" width="86" height="30" rx="15" fill={p.c} />
              <text x="43" y="19" textAnchor="middle" className="pm-product-text">{p.k}</text>
            </g>
          </g>
        ))}
        {/* Add-in embeds in the OMS pack screen: dashed link back to OMS */}
        <path d="M300 63 C 260 63, 240 90, 191 150" className="pm-path pm-path--addin" />

        {/* ---- carriers ---- */}
        <path id="pmOut" d="M586 180 H 640" className="pm-path pm-path--strong" />
        {[0, 1].map((i) => (
          <circle key={i} r="4" className="pm-dot pm-dot--ship">
            <animateMotion dur="1.8s" repeatCount="indefinite" begin={`${i * 0.9}s`}>
              <mpath href="#pmOut" />
            </animateMotion>
          </circle>
        ))}
        <g transform="translate(640 150)" filter="url(#pmShadow)">
          <rect className="pm-node pm-node--carrier" x="0" y="0" width="86" height="60" rx="14" />
        </g>
        <g transform="translate(640 150)">
          <text x="43" y="27" textAnchor="middle" className="pm-node-title pm-node-title--light">Carriers</text>
          <text x="43" y="44" textAnchor="middle" className="pm-node-sub pm-node-sub--light">label · track</text>
        </g>
        <path id="pmCust" d="M726 180 H 760" className="pm-path" />
        <circle r="3.5" className="pm-dot pm-dot--ship">
          <animateMotion dur="1.4s" repeatCount="indefinite">
            <mpath href="#pmCust" />
          </animateMotion>
        </circle>
        <g transform="translate(760 180)">
          <circle r="16" className="pm-customer" />
          <text y="4" textAnchor="middle" className="pm-customer-text">☺</text>
        </g>
      </svg>
    </div>
  );
}
