"use client";

import { motion, useTransform } from "framer-motion";
import { Ban, Bot, Check, CircleHelp, Gauge, ListChecks, ScanLine, ShieldCheck, Truck, UserCheck, Video } from "lucide-react";
import type { ReactNode } from "react";
import { useT } from "@/i18n";
import { cn } from "@/lib/utils";
import { HERO_STATION, PICKS, RESERVE_SLOT, STATION_IDS, pickPath } from "@/components/three/world";
import { useBeat } from "./StoryContext";
import { registerLabel, useBeatValue } from "./labels";
import { dispatchProgress, packProgress, pickProgress, win } from "./timeline";

type Tone = "neutral" | "cyan" | "green" | "red" | "orange" | "amber";

const TONES: Record<Tone, string> = {
  neutral: "border-white/15 bg-night/85 text-white/90",
  cyan: "border-cyan/40 bg-[#062027]/90 text-cyan",
  green: "border-green-400/50 bg-[#062014]/90 text-green-300",
  red: "border-red-400/60 bg-[#2a0808]/90 text-red-300",
  orange: "border-orange/50 bg-[#2a1405]/90 text-orange",
  amber: "border-amber/50 bg-[#2a2005]/90 text-amber",
};
const STEM: Record<Tone, string> = {
  neutral: "bg-white/40",
  cyan: "bg-cyan/60",
  green: "bg-green-400/70",
  red: "bg-red-400/70",
  orange: "bg-orange/70",
  amber: "bg-amber/70",
};

/**
 * A label pinned to a point in the scene. The projector in the canvas moves
 * the outer element every frame; the beat window fades it in and out.
 */
function Label({
  id,
  show,
  tone = "neutral",
  children,
  className,
  stem = 14,
  secondary = false,
}: {
  id: string;
  show: (beat: number) => number;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  stem?: number;
  /** hidden on phones, where the scene is small */
  secondary?: boolean;
}) {
  const beat = useBeat();
  const opacity = useTransform(beat, show);
  const display = useTransform(opacity, (o) => (o < 0.01 ? "none" : "block"));
  return (
    <div ref={registerLabel(id)} className={cn("pointer-events-none absolute top-0 left-0 will-change-transform", secondary && "hidden sm:block")}>
      <motion.div style={{ opacity, display, paddingBottom: stem }} className="absolute bottom-0 left-0 -translate-x-1/2">
        <div
          className={cn(
            "rounded-full border px-2.5 py-1 text-[11px] leading-tight whitespace-nowrap shadow-lg shadow-black/40 backdrop-blur sm:text-xs",
            TONES[tone],
            className,
          )}
        >
          {children}
        </div>
        <span className={cn("absolute bottom-0 left-1/2 w-px -translate-x-1/2", STEM[tone])} style={{ height: stem }} />
        <span className={cn("absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rounded-full", STEM[tone])} />
      </motion.div>
    </div>
  );
}

const atHero = (b: number) => win(b, -1, -0.5, 0.35, 0.6);
const atGhosts = (b: number) => win(b, 0.55, 0.9, 1.4, 1.7);
const atWave = (b: number) => win(b, 1.35, 1.7, 2.5, 2.75);
const atPack = (b: number) => win(b, 2.55, 2.8, 3.5, 3.75);
const atGate = (b: number) => win(b, 3.5, 3.7, 4.5, 4.7);
const atSame = (b: number) => win(b, 4.55, 4.85, 5.45, 5.8);
const atQuestions = (b: number) => win(b, 5.55, 5.85, 6.4, 6.65);
const atTasks = (b: number) => win(b, 6.65, 7.0, 7.55, 7.85);
const atNeck = (b: number) => win(b, 6.8, 7.1, 7.6, 7.9);
const atControl = (b: number) => win(b, 7.55, 7.85, 8.3, 8.5);
const atMap = (b: number) => win(b, 8.75, 9.1, 11.6, 12);
const atShop = (b: number) => win(b, 10.5, 10.85, 11.6, 12);

/** Who asks / gets a task in the Intelligence chapter: picker, P-02, P-05, picker 2, supervisor. */
const PEOPLE_LABELS = ["head.6", "head.1", "head.4", "head.7", "head.8"];

export default function SceneLabels() {
  const t = useT();
  const s = t.scene;
  const picked = useBeatValue((b) => pickPath(pickProgress(b)).picked);
  // 0 order loads · 1 wrong size caught · 2–4 items scanned · 5 box closed · 6 next order
  const packStep = useBeatValue((b) => {
    const v = packProgress(b);
    return v < 0.1 ? 0 : v < 0.3 ? 1 : v < 0.45 ? 2 : v < 0.58 ? 3 : v < 0.7 ? 4 : v < 0.85 ? 5 : 6;
  });
  const recSeconds = useBeatValue((b) => Math.floor(packProgress(b) * 38));
  // one number so it only re-renders when a step changes: tens = our box, units = PK-10477
  const gate = useBeatValue((b) => {
    const d = dispatchProgress(b);
    return (d < 0.56 ? 0 : d < 0.9 ? 1 : 2) * 10 + (d < 0.24 ? 0 : d < 0.45 ? 1 : 2);
  });
  const gateStep = { hero: Math.floor(gate / 10), blocked: gate % 10 };

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* ---------------- the floor, at a glance */}
      <Label id="zone.storage" show={atHero} secondary>
        {s.zones.storage}
      </Label>
      <Label id="zone.pack" show={atHero} tone="orange" secondary>
        {s.zones.pack}
      </Label>
      <Label id="zone.gate" show={(b) => Math.max(atHero(b), atGate(b) * 0.9)} tone="cyan" secondary>
        {s.zones.gate}
      </Label>
      <Label id="zone.carrier" show={atHero} secondary>
        {s.zones.carrier}
      </Label>
      <Label id="zone.inbound" show={atHero} secondary>
        {s.zones.inbound}
      </Label>
      <Label id="zone.returns" show={atHero} secondary>
        {s.zones.returns}
      </Label>
      <Label id="zone.office" show={atHero} tone="cyan" secondary>
        {s.zones.office}
      </Label>
      <Label id="zone.staging" show={atHero} secondary>
        {s.zones.staging}
      </Label>

      {/* ---------------- before: one order per trip. Pickers 0 and 1 set off
          from the same corner, so 1's caption rides higher to stay clear of 0's. */}
      {[0, 1, 2].map((i) => (
        <Label key={i} id={`ghost.${i}`} show={atGhosts} tone="red" stem={i === 1 ? 44 : 14}>
          {s.oneOrder}
        </Label>
      ))}

      {/* ---------------- the wave: allocated slots in walk order */}
      {PICKS.map((p, i) => {
        const done = i < picked;
        return (
          <Label key={p.code} id={`pick.${i}`} show={atWave} tone={done ? "green" : "cyan"} stem={10}>
            <span className="flex items-center gap-1.5 font-mono">
              <span className="grid size-4 place-items-center rounded-full bg-current/15 text-[10px]">{done ? <Check className="size-3" /> : i + 1}</span>
              {p.code}
              {i === 2 ? <span className="hidden font-sans text-amber sm:inline">· {s.fefo}</span> : null}
            </span>
          </Label>
        );
      })}
      <Label id="reserve" show={atWave} stem={10} secondary>
        <span className="font-mono text-white/60">{RESERVE_SLOT.code}</span> <span className="text-white/60">· {s.reserve}</span>
      </Label>
      {/* bigger than the rest: this is the beat's point, the answer to "Ineffective" */}
      <Label id="head.6" show={atWave} tone="cyan" stem={10} className="px-3 py-1 text-xs font-medium sm:px-3.5 sm:py-1.5 sm:text-sm">
        <span className="flex items-center gap-1.5">
          <ListChecks className="size-3.5 sm:size-4" />
          {/* the wave's answer to the red "1 order per trip" above */}
          {s.picker} · {s.waveTrip} · {picked}/{PICKS.length}
        </span>
      </Label>

      {/* ---------------- P-05: scan-verified, on VDO Proof */}
      <Label id="station.hero" show={atPack} className="rounded-2xl px-0 py-0 whitespace-normal" stem={18}>
        <div className="w-[15.5rem] text-left sm:w-[17.5rem]">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-red-300">
              <span className="size-2 animate-pulse rounded-full bg-red-500" />
              REC 00:{String(recSeconds).padStart(2, "0")}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-white/60">
              <Video className="size-3.5" />
              VDO Proof
            </span>
          </div>
          <div className="px-3 pt-2 font-mono text-[11px] text-white/70">
            PK-10482 · W-0193 · {STATION_IDS[HERO_STATION]}
            <span className="block font-sans text-white/50">{s.vdo.packer}</span>
          </div>
          <ul className="grid gap-1 px-3 py-2 text-[12px]">
            {s.vdo.items.map((item, i) => {
              const done = packStep >= [2, 3, 4][i];
              const wrong = i === 0 && packStep === 1;
              return (
                <li key={item} className={cn("flex items-start gap-2", done ? "text-white" : wrong ? "text-red-300" : "text-white/45")}>
                  <span
                    className={cn(
                      "mt-px grid size-4 shrink-0 place-items-center rounded-full border",
                      done ? "border-green-400/70 bg-green-400/20 text-green-300" : wrong ? "border-red-400/70 bg-red-500/20" : "border-white/20",
                    )}
                  >
                    {done ? <Check className="size-2.5" /> : wrong ? <Ban className="size-2.5" /> : <ScanLine className="size-2.5 text-white/30" />}
                  </span>
                  <span>
                    {item}
                    {wrong ? <span className="block text-[11px] leading-snug text-red-300/90">{s.vdo.wrong}</span> : null}
                  </span>
                </li>
              );
            })}
          </ul>
          <div
            className={cn(
              "border-t border-white/10 px-3 py-2 text-[11px] transition-colors",
              packStep >= 6 ? "text-cyan" : packStep >= 5 ? "text-green-300" : "text-white/35",
            )}
          >
            {packStep >= 6 ? `→ ${s.vdo.next}: PK-10483` : s.vdo.closed}
          </div>
        </div>
      </Label>

      {/* ---------------- the gate */}
      <Label id="box.hero" show={atGate} tone={gateStep.hero === 0 ? "neutral" : gateStep.hero === 1 ? "green" : "cyan"}>
        <span className="flex items-center gap-1.5">
          {gateStep.hero === 0 ? <ScanLine className="size-3.5" /> : gateStep.hero === 1 ? <ShieldCheck className="size-3.5" /> : <Truck className="size-3.5" />}
          <span className="font-mono">PK-10482</span>
          {gateStep.hero === 1 ? <span>· {s.gate.ok}</span> : gateStep.hero === 2 ? <span>· {s.gate.handover}</span> : null}
        </span>
      </Label>
      <Label id="box.blocked" show={atGate} tone={gateStep.blocked === 0 ? "neutral" : gateStep.blocked === 1 ? "red" : "orange"}>
        <span className="flex items-center gap-1.5">
          {gateStep.blocked === 0 ? <ScanLine className="size-3.5" /> : <Ban className="size-3.5" />}
          <span className="font-mono">PK-10477</span>
          {gateStep.blocked === 1 ? <span>· {s.gate.blocked}</span> : gateStep.blocked === 2 ? <span>→ {s.gate.exception}</span> : null}
        </span>
      </Label>

      {/* ---------------- same space, same team */}
      <Label id="same.space" show={atSame} tone="orange">
        {s.same.space}
      </Label>
      <Label id="zone.pack" show={atSame} tone="orange">
        {s.same.team}
      </Label>

      {/* ---------------- people carry the decisions … */}
      {PEOPLE_LABELS.map((id, i) => (
        <Label key={`q${id}`} id={id} show={atQuestions} tone="amber" secondary={i > 2}>
          <span className="flex items-center gap-1.5">
            <CircleHelp className="size-3.5" />
            {s.questions[i]}
          </span>
        </Label>
      ))}

      {/* ---------------- … until the brain hands out the work */}
      {PEOPLE_LABELS.map((id, i) => (
        <Label key={`t${id}`} id={id} show={atTasks} tone="cyan" secondary={i > 2}>
          <span className="flex items-center gap-1.5">
            <Check className="size-3.5" />
            {s.tasks[i]}
          </span>
        </Label>
      ))}
      <Label id="station.busy" show={atNeck} tone="amber" stem={22}>
        <span className="flex items-center gap-1.5">
          <Gauge className="size-3.5" />
          {s.bottleneck}
        </span>
      </Label>
      <Label id="amr.0" show={atNeck} tone="cyan" className="border-dashed" secondary>
        <span className="flex items-center gap-1.5">
          <Bot className="size-3.5" />
          {s.amr}
        </span>
      </Label>

      {/* ---------------- people stay in control */}
      <Label id="head.8" show={atControl} className="rounded-2xl px-3 py-2 whitespace-normal" stem={16}>
        <div className="w-[13.5rem] text-left">
          <p className="flex items-center gap-1.5 text-[12px] font-medium text-cyan">
            <UserCheck className="size-3.5" />
            {s.override.title}
          </p>
          <p className="mt-1 font-mono text-[11px] text-white/80">{s.override.body}</p>
          <p className="mt-0.5 text-[11px] text-white/55">{s.override.by}</p>
        </div>
      </Label>

      {/* ---------------- the map */}
      <Label id="city.bangkok" show={atMap} tone="cyan">
        {s.map.bangkok}
      </Label>
      <Label id="city.chiangMai" show={atMap}>
        {s.map.customer}
      </Label>
      <Label id="mfc.chiangMai" show={atShop} tone="orange">
        {s.map.shop}
      </Label>
    </div>
  );
}
