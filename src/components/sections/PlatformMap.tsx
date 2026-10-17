"use client";

import { useT } from "@/i18n";

/**
 * The platform map: sales channels → OMS → LISA → Packiko Core (stock · wave ·
 * pick · pack · gate, the four products on its corners) → carriers → the
 * customer. Rebuilt from the original site's diagram for the dark story page:
 * pure SVG, SMIL for the moving dots, CSS keyframes (globals.css `.pm-*`) for
 * the pulses. Brand marks live in /public/brand (sources in its README).
 */

const W = 900;
const H = 372;
const MID_Y = 190;
const ROW = (i: number) => 40 + i * 50; // 6 rows → 40 … 290
const TILE = 36;
const PILL_W = 84;
const STAGES = ["Stock", "Wave", "Pick", "Pack", "Gate"];

const CH_X = 24;
const OMS_X = 118;
const OMS_W = 104;
const OMS_H = 72;
const CORE_X = 270;
const CORE_W = 300;
const CORE_Y = 106;
const CORE_H = 168;
const CORE_R = CORE_X + CORE_W;
const CAR_X = 660;
const CUST_X = 846;
const PROD_W = 88;
const PROD_TOP_Y = CORE_Y - 74;
const PROD_BOT_Y = CORE_Y + CORE_H + 44;

const PRODUCTS = [
  { k: "Add-in", fill: "#f37521", text: "#ffffff", x: CORE_X + 14, y: PROD_TOP_Y },
  { k: "Ultra", fill: "#2f7fd0", text: "#ffffff", x: CORE_R - PROD_W - 14, y: PROD_TOP_Y },
  { k: "Prime", fill: "#48bfaa", text: "#04211b", x: CORE_X + 14, y: PROD_BOT_Y },
  { k: "Hub", fill: "#fab217", text: "#2a1d00", x: CORE_R - PROD_W - 14, y: PROD_BOT_Y },
];

type Mark = { key: string; label: string; bg: string; img?: string; pad?: number };

const CHANNELS: Mark[] = [
  { key: "shopee", label: "Shopee", bg: "#ffffff", img: "/brand/shopee-bag.svg", pad: 6 },
  { key: "lazada", label: "Lazada", bg: "#ffffff", img: "/brand/lazada-heart.svg", pad: 6 },
  { key: "tiktok", label: "TikTok Shop", bg: "#ffffff", img: "/brand/tiktok.svg", pad: 3 },
  { key: "line", label: "LINE", bg: "#ffffff", img: "/brand/line.svg", pad: 3 },
  { key: "shopscape", label: "ShopSCAPE", bg: "#ffffff", img: "/brand/shopscape-s.png", pad: 7 },
  { key: "storefront", label: "Storefront", bg: "#0d5f9f" },
];

const CARRIERS: Mark[] = [
  { key: "kerry", label: "Kerry Express", bg: "#ffffff", img: "/brand/kerry.svg", pad: 4 },
  { key: "flash", label: "Flash Express", bg: "#ffffff", img: "/brand/flash.svg", pad: 8 },
  { key: "jnt", label: "J&T Express", bg: "#ffffff", img: "/brand/jnt.svg", pad: 8 },
  { key: "thaipost", label: "Thailand Post", bg: "#ffffff", img: "/brand/thaipost.svg", pad: 4 },
  { key: "ninjavan", label: "Ninja Van", bg: "#ffffff", img: "/brand/ninjavan.svg", pad: 7 },
  { key: "dhl", label: "DHL", bg: "#ffcc00", img: "/brand/dhl.svg", pad: 8 },
];

const DESTS = [
  { k: "home", y: MID_Y - 62 },
  { k: "warehouse", y: MID_Y },
  { k: "person", y: MID_Y + 62 },
];

function Tile({ m, x, y, w = TILE }: { m: Mark; x: number; y: number; w?: number }) {
  const pad = m.pad ?? 4;
  return (
    <g transform={`translate(${x} ${y})`}>
      <title>{m.label}</title>
      <rect width={w} height={TILE} rx="10" fill={m.bg} filter="url(#pmTileShadow)" />
      {m.img ? (
        <image href={m.img} x={pad} y={pad} width={w - pad * 2} height={TILE - pad * 2} preserveAspectRatio="xMidYMid meet" />
      ) : (
        // our own storefront glyph
        <g fill="#ffffff">
          <path d="M7 12 L9.5 7 H26.5 L29 12 Z" />
          <path d="M7 12 H29 V15.5 a3.6 3.6 0 0 1 -7.2 0 a3.6 3.6 0 0 1 -7.6 0 a3.6 3.6 0 0 1 -7.2 0 Z" opacity="0.9" />
          <rect x="9" y="18" width="18" height="11" rx="1" />
          <rect x="12" y="21" width="5" height="8" fill="#0d5f9f" />
          <rect x="19.5" y="21" width="5" height="4" fill="#0d5f9f" />
        </g>
      )}
    </g>
  );
}

export default function PlatformMap() {
  const t = useT();
  const p = t.platform;

  return (
    <>
      <div className="pm-scroll">
        <div className="pm-frame">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" role="img" aria-label={t.a11y.diagram}>
          <defs>
            <filter id="pmTileShadow" x="-30%" y="-30%" width="160%" height="170%">
              <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.45" />
            </filter>
            <filter id="pmGlow" x="-20%" y="-30%" width="140%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#5ec9d3" floodOpacity="0.35" />
            </filter>
            <linearGradient id="pmCore" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#1467ad" />
              <stop offset="1" stopColor="#0a2d4f" />
            </linearGradient>
          </defs>

          {/* channels → OMS */}
          {CHANNELS.map((m, i) => {
            const cy = ROW(i) + TILE / 2;
            const x1 = CH_X + TILE;
            return (
              <g key={m.key}>
                <path id={`pmCh${i}`} d={`M${x1} ${cy} C ${x1 + 34} ${cy}, ${OMS_X - 34} ${MID_Y}, ${OMS_X} ${MID_Y}`} className="pm-path" />
                <circle r="3.5" className="pm-dot pm-dot--order">
                  <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${i * 0.37}s`}>
                    <mpath href={`#pmCh${i}`} />
                  </animateMotion>
                </circle>
                <Tile m={m} x={CH_X} y={ROW(i)} />
              </g>
            );
          })}

          {/* OMS */}
          <g transform={`translate(${OMS_X} ${MID_Y - OMS_H / 2})`}>
            <rect className="pm-node" width={OMS_W} height={OMS_H} rx="16" />
            <text x={OMS_W / 2} y="28" textAnchor="middle" className="pm-node-title">
              OMS
            </text>
            <text x={OMS_W / 2} y="46" textAnchor="middle" className="pm-node-sub">
              {p.oms[0]}
            </text>
            <text x={OMS_W / 2} y="60" textAnchor="middle" className="pm-node-sub">
              {p.oms[1]}
            </text>
          </g>

          {/* LISA: orders in, statuses back */}
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
            <rect className="pm-tag" x="-25" y="-10.5" width="50" height="20" rx="10" />
            <text y="3.5" textAnchor="middle" className="pm-tag-text">
              LISA
            </text>
          </g>

          {/* products on the four corners of the Core */}
          {PRODUCTS.map((prod, i) => {
            const top = prod.y < MID_Y;
            const cx = prod.x + PROD_W / 2;
            return (
              <g key={prod.k}>
                <path d={`M${cx} ${top ? prod.y + 30 : prod.y} V ${top ? CORE_Y : CORE_Y + CORE_H}`} className="pm-path" />
                {/* the float sets a CSS transform, which would drop an SVG
                    transform attribute on the same element — so position on
                    the outer group, animate the inner one */}
                <a href="#products" aria-label={`Packiko ${prod.k}`}>
                  <g transform={`translate(${prod.x} ${prod.y})`}>
                    <g className="pm-product" style={{ animationDelay: `${i * 0.7}s` }}>
                      <rect width={PROD_W} height="30" rx="15" fill={prod.fill} />
                      <text x={PROD_W / 2} y="19.5" textAnchor="middle" className="pm-product-text" fill={prod.text}>
                        {prod.k}
                      </text>
                    </g>
                  </g>
                </a>
              </g>
            );
          })}
          {/* Add-in lives inside the OMS's own pack screen */}
          <path
            d={`M${PRODUCTS[0].x} ${PRODUCTS[0].y + 15} C ${OMS_X + OMS_W / 2} ${PRODUCTS[0].y + 15}, ${OMS_X + OMS_W / 2} ${MID_Y - 70}, ${OMS_X + OMS_W / 2} ${MID_Y - OMS_H / 2}`}
            className="pm-path pm-path--addin"
          />

          {/* Packiko Core */}
          <g transform={`translate(${CORE_X} ${CORE_Y})`}>
            <rect className="pm-core" width={CORE_W} height={CORE_H} rx="24" filter="url(#pmGlow)" />
            <text x="20" y="32" className="pm-core-title">
              Packiko Core API
            </text>
            <path id="pmStages" d={`M20 71 H ${CORE_W - 20}`} fill="none" stroke="none" />
            {[0, 1].map((i) => (
              <circle key={i} r="9" className="pm-dot pm-dot--glow">
                <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 1.5}s`}>
                  <mpath href="#pmStages" />
                </animateMotion>
              </circle>
            ))}
            {STAGES.map((s, i) => {
              const sw = (CORE_W - 40 - 4 * 8) / 5;
              return (
                <g key={s} transform={`translate(${20 + i * (sw + 8)} 54)`}>
                  <rect className="pm-stage" style={{ animationDelay: `${i * 0.5}s` }} width={sw} height="34" rx="10" />
                  <text x={sw / 2} y="21.5" textAnchor="middle" className="pm-stage-text">
                    {s}
                  </text>
                  {s === "Pack" ? <circle cx={sw - 7} cy="7" r="3" className="pm-rec" /> : null}
                </g>
              );
            })}
            <g transform="translate(20 106)">
              <rect className="pm-pill pm-pill--guard" width="122" height="26" rx="13" />
              <circle cx="13" cy="13" r="4.2" className="pm-guard-dot" />
              <text x="23" y="17.5" className="pm-pill-text">
                OMS Status Guard
              </text>
            </g>
            <g transform={`translate(${CORE_W - 20 - 128} 106)`}>
              <rect className="pm-pill" width="128" height="26" rx="13" />
              <text x="64" y="17.5" textAnchor="middle" className="pm-pill-text pm-pill-text--light">
                {p.identity}
              </text>
            </g>
            <text x="20" y="152" className="pm-core-sub">
              {p.coreSub}
            </text>
          </g>

          {/* Core → carriers → the customer */}
          {CARRIERS.map((m, i) => {
            const cy = ROW(i) + TILE / 2;
            return (
              <g key={m.key}>
                <path id={`pmCar${i}`} d={`M${CORE_R} ${MID_Y} C ${CORE_R + 50} ${MID_Y}, ${CAR_X - 40} ${cy}, ${CAR_X} ${cy}`} className="pm-path" />
                <circle r="3.5" className="pm-dot pm-dot--ship">
                  <animateMotion dur="2.2s" repeatCount="indefinite" begin={`${i * 0.37}s`}>
                    <mpath href={`#pmCar${i}`} />
                  </animateMotion>
                </circle>
                <Tile m={m} x={CAR_X} y={ROW(i)} w={PILL_W} />
                <path
                  id={`pmCust${i}`}
                  d={`M${CAR_X + PILL_W} ${cy} C ${CAR_X + PILL_W + 24} ${cy}, ${CUST_X - 60} ${MID_Y}, ${CUST_X - 40} ${MID_Y}`}
                  className="pm-path"
                />
                <circle r="3" className="pm-dot pm-dot--ship">
                  <animateMotion dur="2s" repeatCount="indefinite" begin={`${1.1 + i * 0.37}s`}>
                    <mpath href={`#pmCust${i}`} />
                  </animateMotion>
                </circle>
              </g>
            );
          })}

          {/* destinations: home · warehouse · person */}
          {DESTS.map((d, i) => (
            <g key={d.k}>
              <path
                id={`pmDest${i}`}
                d={`M${CUST_X - 40} ${MID_Y} C ${CUST_X - 26} ${MID_Y}, ${CUST_X - 26} ${d.y}, ${CUST_X - 18} ${d.y}`}
                className="pm-path"
              />
              {[0, 1].map((j) => (
                <circle key={j} r="3" className="pm-dot pm-dot--ship">
                  <animateMotion dur="1.2s" repeatCount="indefinite" begin={`${i * 0.4 + j * 0.6}s`}>
                    <mpath href={`#pmDest${i}`} />
                  </animateMotion>
                </circle>
              ))}
              <g transform={`translate(${CUST_X} ${d.y})`}>
                <g className="pm-dest" style={{ animationDelay: `${i * 0.5}s` }}>
                  <circle r="18" className="pm-customer" />
                  {d.k === "home" ? (
                    <g fill="#f37521">
                      <path d="M-10 0 L0 -9 L10 0 H7 V8 H-7 V0 Z" />
                      <rect x="-2" y="2" width="4" height="6" fill="#0b121c" />
                    </g>
                  ) : null}
                  {d.k === "warehouse" ? (
                    <g fill="#f37521">
                      <path d="M-11 -1 L0 -9 L11 -1 V8 H-11 Z" />
                      <rect x="-6" y="1" width="12" height="7" fill="#0b121c" />
                      <rect x="-6" y="3.5" width="12" height="1.2" fill="#f37521" />
                      <rect x="-6" y="6" width="12" height="1.2" fill="#f37521" />
                    </g>
                  ) : null}
                  {d.k === "person" ? (
                    <g fill="#f37521">
                      <circle cx="0" cy="-4" r="4" />
                      <path d="M-8 9 C -8 2, 8 2, 8 9 Z" />
                    </g>
                  ) : null}
                </g>
              </g>
            </g>
          ))}
        </svg>
        </div>
      </div>
      <p className="mt-3 text-center font-mono text-[11px] tracking-wider text-white/40 md:hidden">{p.hint}</p>
    </>
  );
}
