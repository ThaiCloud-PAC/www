/**
 * FlowVisual — a self-contained, CSS-animated "order flow" illustration:
 * OMS (ZORT) → Packiko (wave · pick · pack · VDO proof · dispatch gate) → Carrier.
 *
 * Pure SVG + CSS keyframes (see globals.css `.flow-*`), no runtime deps.
 * Placeholder for the externally-produced hero animation — swap the whole
 * component when that asset lands; keep the wrapper size (100% × 216px).
 */
export default function FlowVisual() {
  const stations = ["Wave", "Pick", "Pack", "Gate"];
  return (
    <div className="flow-visual" aria-hidden="true">
      <svg viewBox="0 0 320 216" preserveAspectRatio="xMidYMid meet" role="img">
        <defs>
          <linearGradient id="flowLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#035897" />
            <stop offset="1" stopColor="#00a8a7" />
          </linearGradient>
        </defs>

        {/* rails */}
        <path className="flow-rail" d="M40 108 H112" />
        <path className="flow-rail" d="M208 108 H280" />
        <path className="flow-rail flow-rail--core" d="M112 108 H208" />

        {/* travelling packets on the two outer rails */}
        <circle className="flow-packet flow-packet--in" r="4" cy="108" />
        <circle className="flow-packet flow-packet--out" r="4" cy="108" />

        {/* OMS node */}
        <g className="flow-node flow-node--oms" transform="translate(40 108)">
          <circle r="26" />
          <text y="-2" textAnchor="middle">OMS</text>
          <text y="12" textAnchor="middle" className="flow-sub">ZORT</text>
        </g>

        {/* Packiko core */}
        <g className="flow-node flow-node--core" transform="translate(160 108)">
          <rect x="-48" y="-40" width="96" height="80" rx="16" />
          <text y="-18" textAnchor="middle" className="flow-brand">Packiko</text>
          {stations.map((s, i) => (
            <g key={s} className="flow-station" style={{ animationDelay: `${i * 0.6}s` }} transform={`translate(${-33 + i * 22} 6)`}>
              <rect x="-8" y="-8" width="16" height="16" rx="4" />
              <text y="22" textAnchor="middle" className="flow-sub">{s}</text>
            </g>
          ))}
        </g>

        {/* Carrier node */}
        <g className="flow-node flow-node--carrier" transform="translate(280 108)">
          <circle r="26" />
          <text y="-2" textAnchor="middle">Ship</text>
          <text y="12" textAnchor="middle" className="flow-sub">Carrier</text>
        </g>

        {/* VDO proof badge */}
        <g className="flow-badge" transform="translate(212 60)">
          <rect x="-26" y="-11" width="52" height="22" rx="11" />
          <circle cx="-14" cy="0" r="3" className="flow-rec" />
          <text x="4" y="4" textAnchor="middle" className="flow-sub">VDO</text>
        </g>

        {/* Guard badge */}
        <g className="flow-badge flow-badge--guard" transform="translate(108 160)">
          <rect x="-30" y="-11" width="60" height="22" rx="11" />
          <text y="4" textAnchor="middle" className="flow-sub">OMS Guard</text>
        </g>
      </svg>
    </div>
  );
}
