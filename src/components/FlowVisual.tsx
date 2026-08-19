"use client";

import { useEffect, useState } from "react";
import { Truck } from "lucide-react";

/**
 * FlowVisual — a self-contained animated "orders pouring in" scene:
 * OMS feeds a stream of orders → Packiko's live order feed → Pick / Pack (VDO
 * proof) / Dispatch stations → Carrier. SVG + CSS keyframes (globals.css
 * `.flow-*`) plus a tiny JS count-up for the orders counter. No runtime deps.
 *
 * Placeholder for the externally-produced hero animation — swap the whole
 * component when that asset lands; the wrapper is 100% wide, aspect 4:3.
 */
const TARGET = 20000;
const CHANNELS = ["#f37521", "#035897", "#00a8a7", "#fab217", "#035897", "#f37521", "#00a8a7", "#035897"];
const ROWS = CHANNELS.map((c, i) => ({ c, w: 46 + ((i * 37) % 40), s: i % 3 }));
const STATIONS = [
  { k: "Pick", d: 0 },
  { k: "Pack", d: 0.8, video: true },
  { k: "Dispatch", d: 1.6 },
];

function useCountUp(target: number) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const t0 = performance.now();
    const dur = reduced ? 1 : 4200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    // after the ramp, keep ticking up like a live feed
    const live = setInterval(() => setN((v) => (v >= target ? v + 1 + Math.floor(Math.random() * 3) : v)), 1400);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(live);
    };
  }, [target]);
  return n;
}

export default function FlowVisual() {
  const orders = useCountUp(TARGET);
  return (
    <div className="flow-visual" aria-hidden="true">
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" role="img">
        <defs>
          <filter id="fvShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#035897" floodOpacity="0.16" />
          </filter>
          <clipPath id="fvFeedClip">
            <rect x="0" y="0" width="150" height="112" rx="6" />
          </clipPath>
        </defs>

        {/* soft backdrop blobs */}
        <circle cx="330" cy="40" r="90" className="flow-blob flow-blob--teal" />
        <circle cx="50" cy="270" r="80" className="flow-blob flow-blob--orange" />

        {/* ---- inbound stream: OMS → Packiko (many packets) ---- */}
        <path id="fvIn" d="M104 41 C 150 41, 150 70, 172 70" className="flow-path" />
        {[...Array(8)].map((_, i) => (
          <circle key={i} r={3 + (i % 3)} className="flow-packet" style={{ fill: CHANNELS[i] }}>
            <animateMotion dur="2.4s" repeatCount="indefinite" begin={`${i * 0.3}s`}>
              <mpath href="#fvIn" />
            </animateMotion>
          </circle>
        ))}

        {/* ---- warehouse card ---- */}
        <g transform="translate(64 70)" filter="url(#fvShadow)">
          <rect className="flow-card" x="0" y="0" width="272" height="170" rx="18" />
        </g>
        <g transform="translate(64 70)">
          <text x="18" y="24" className="flow-card-title">Incoming orders</text>
          <text x="254" y="24" textAnchor="end" className="flow-card-meta">
            <tspan className="flow-live-dot">●</tspan> LIVE
          </text>

          {/* order feed: rows slide in from the top continuously */}
          <g transform="translate(18 36)" clipPath="url(#fvFeedClip)">
            <g className="flow-feed">
              {[...ROWS, ...ROWS].map((r, i) => (
                <g key={i} transform={`translate(0 ${i * 16})`}>
                  <rect className="flow-row" x="0" y="0" width="150" height="12" rx="4" />
                  <circle cx="8" cy="6" r="3" fill={r.c} />
                  <rect className="flow-row-id" x="16" y="4" width={r.w} height="4" rx="2" />
                  <rect className={`flow-row-status flow-row-status--${r.s}`} x="118" y="3" width="26" height="6" rx="3" />
                </g>
              ))}
            </g>
            {/* fade at the bottom of the feed */}
            <rect x="0" y="92" width="150" height="20" className="flow-feed-fade" />
          </g>

          {/* right rail: stations */}
          <g transform="translate(184 40)">
            {STATIONS.map((s, i) => (
              <g key={s.k} transform={`translate(0 ${i * 38})`}>
                <rect className="flow-station" style={{ animationDelay: `${s.d}s` }} x="0" y="0" width="70" height="28" rx="8" />
                {s.video ? (
                  <>
                    {/* camera glyph */}
                    <g transform="translate(9 8)" className="flow-cam">
                      <rect x="0" y="1" width="10" height="9" rx="2" />
                      <path d="M10 4.5 L14.5 2 V10 L10 7.5 Z" />
                    </g>
                    <circle cx="61" cy="8" r="2.4" className="flow-rec" />
                    <text x="41" y="18" textAnchor="middle" className="flow-station-label">{s.k}</text>
                  </>
                ) : (
                  <text x="35" y="18" textAnchor="middle" className="flow-station-label">{s.k}</text>
                )}
              </g>
            ))}
          </g>

          {/* footer counter */}
          <text x="18" y="160" className="flow-card-meta">orders today</text>
          <text x="254" y="161" textAnchor="end" className="flow-counter">
            {orders.toLocaleString("en-US")}
          </text>
        </g>

        {/* ---- OMS pill (top-left) ---- */}
        <g transform="translate(18 26)" filter="url(#fvShadow)">
          <rect className="flow-pill flow-pill--oms" x="0" y="0" width="86" height="30" rx="15" />
        </g>
        <g transform="translate(18 26)">
          <text x="43" y="19" textAnchor="middle" className="flow-pill-text">OMS orders</text>
        </g>

        {/* ---- outbound: Dispatch → Carrier ---- */}
        <path id="fvOut" d="M330 240 C 330 262, 300 269, 290 269" className="flow-path" />
        {[0, 1, 2].map((i) => (
          <circle key={i} r="4" className="flow-packet flow-packet--out">
            <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${i * 0.9}s`}>
              <mpath href="#fvOut" />
            </animateMotion>
          </circle>
        ))}
        <g transform="translate(290 254)" filter="url(#fvShadow)">
          <rect className="flow-pill flow-pill--carrier" x="0" y="0" width="56" height="30" rx="15" />
        </g>
        <g transform="translate(290 254)">
          {/* delivery van, in place of the word "Carrier" — nested <svg> is positioned by x/y */}
          <Truck className="flow-van" x={20} y={6} width={22} height={22} strokeWidth={2} aria-hidden="true" />
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
