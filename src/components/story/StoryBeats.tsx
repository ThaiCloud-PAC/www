"use client";

import { motion, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Check, Sparkles } from "lucide-react";
import { useT } from "@/i18n";
import { cn } from "@/lib/utils";
import { ShimmerLink } from "@/components/ui/shimmer-button";
import { PICKS, pickPath } from "@/components/three/world";
import Beat, { ChapterTag } from "./Beat";
import { useBeat } from "./StoryContext";
import { useBeatValue } from "./labels";
import { mapWave, ordersPerDay, pickProgress, throughput } from "./timeline";

export const ACCENT = { speed: "#f37521", intelligence: "#5ec9d3", network: "#48bfaa" } as const;

const TITLE = "text-pretty text-[32px] font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[54px]";
const BODY = "mt-4 text-[15px] leading-relaxed text-muted sm:text-lg";

export default function StoryBeats() {
  return (
    <>
      <HeroBeat />
      <SpeedIntro />
      <WaveBeat />
      <PackBeat />
      <DispatchBeat />
      <ResultBeat />
      <IntelIntro />
      <IntelBrain />
      <IntelVision />
      <NetworkIntro />
      <NetworkPartner />
      <NetworkCloser />
    </>
  );
}

/* ------------------------------------------------------------------ hero */

function HeroBeat() {
  const t = useT();
  const enter = (i: number) => ({
    initial: { opacity: 0, y: 18, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <Beat index={0} id="home" className="lg:max-w-[40rem]">
      <motion.p {...enter(1)} data-reveal className="text-lg text-muted sm:text-xl">
        {t.hero.hello}
      </motion.p>

      <h1 className="mt-3 text-[42px] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[76px]">
        {t.hero.title.map((line, i) => (
          <motion.span
            key={line}
            {...enter(2 + i)}
            data-reveal
            className={i === 0 ? "block text-white" : i === 1 ? "block text-white/80" : "block bg-linear-to-r from-cyan to-teal bg-clip-text text-transparent"}
          >
            {line}
          </motion.span>
        ))}
      </h1>

      <motion.div {...enter(5)} data-reveal className="mt-6">
        <p className="text-[15px] text-muted sm:text-base">{t.hero.lead}</p>
        <ol className="mt-3 flex flex-wrap gap-2">
          {t.hero.stories.map((s, i) => (
            <li key={s}>
              <a
                href={["#speed", "#intelligence", "#network"][i]}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-sm text-white/85 transition-colors hover:border-white/30 hover:text-white"
              >
                <span className="font-mono text-xs" style={{ color: Object.values(ACCENT)[i] }}>
                  0{i + 1}
                </span>
                {s}
              </a>
            </li>
          ))}
        </ol>
      </motion.div>

      <motion.div {...enter(6)} data-reveal className="mt-8 flex flex-wrap items-center gap-3">
        <ShimmerLink href="#contact" className="text-sm font-medium">
          {t.hero.ctaPrimary}
          <ArrowRight className="size-4" aria-hidden="true" />
        </ShimmerLink>
        <a
          href="#speed"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/85 transition-colors hover:border-white/35 hover:text-white"
        >
          {t.hero.ctaSecondary}
          <ArrowDown className="size-4" aria-hidden="true" />
        </a>
      </motion.div>
    </Beat>
  );
}

/* ----------------------------------------------------------------- speed */

function SpeedIntro() {
  const t = useT();
  return (
    <Beat index={1} id="speed">
      <ChapterTag num={t.chapters[0].num} name={t.chapters[0].name} color={ACCENT.speed} />
      <h2 className={`mt-5 ${TITLE}`}>{t.speed.intro.title}</h2>
      <p className={BODY}>{t.speed.intro.body}</p>
    </Beat>
  );
}

/** The pick sheet, ticked off as the picker reaches each slot in the scene. */
function WaveBeat() {
  const t = useT();
  const w = t.speed.wave;
  const picked = useBeatValue((b) => pickPath(pickProgress(b)).picked);

  return (
    <Beat index={2}>
      <p className="eyebrow text-cyan">{w.kicker}</p>
      <h2 className={`mt-4 ${TITLE} lg:text-[46px]`}>{w.title}</h2>
      {/* on phones the live pick sheet says it; the paragraph would cover the walk */}
      <p className={`${BODY} hidden sm:block`}>{w.body}</p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-night/70 backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 font-mono text-[11px] tracking-wider text-white/55 uppercase">
          <span>{w.sheet} · W-0193</span>
          <span className="text-cyan">
            {picked}/{PICKS.length}
          </span>
        </div>
        <ol className="divide-y divide-white/5">
          {PICKS.map((p, i) => {
            const done = i < picked;
            return (
              <li key={p.code} className={cn("flex items-center gap-3 px-4 py-2 text-[13px] transition-colors duration-300", done ? "text-white" : "text-white/60")}>
                <span className="w-4 font-mono text-[11px] text-white/40">{i + 1}</span>
                <span className="w-[4.6rem] shrink-0 font-mono text-[12px]" style={{ color: p.color }}>
                  {p.code}
                </span>
                <span className="flex-1">
                  {w.lines[i]}
                  {i === 2 ? <span className="block font-mono text-[11px] text-amber/90">{w.lot}</span> : null}
                </span>
                <span
                  className={cn(
                    "grid size-5 place-items-center rounded-full border transition-all duration-300",
                    done ? "border-green-400/70 bg-green-400/20 text-green-300" : "border-white/15 text-transparent",
                  )}
                >
                  <Check className="size-3" aria-hidden="true" />
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </Beat>
  );
}

function PackBeat() {
  const t = useT();
  const p = t.speed.pack;
  return (
    <Beat index={3} tall>
      <p className="eyebrow text-orange">{p.kicker}</p>
      <h2 className={`mt-4 ${TITLE}`}>{p.title}</h2>
      <p className={BODY}>{p.body}</p>
    </Beat>
  );
}

function DispatchBeat() {
  const t = useT();
  const d = t.speed.dispatch;
  return (
    <Beat index={4} tall>
      <p className="eyebrow text-teal">{d.kicker}</p>
      <h2 className={`mt-4 ${TITLE}`}>{d.title}</h2>
      <p className={BODY}>{d.body}</p>
    </Beat>
  );
}

function ResultBeat() {
  const t = useT();
  const beat = useBeat();
  const orders = useTransform(beat, (b) => (Math.round(ordersPerDay(b) / 50) * 50).toLocaleString("en-US"));
  const fill = useTransform(beat, throughput);
  const { proof, punch } = t.speed;

  return (
    <Beat index={5} tall>
      <p className="eyebrow text-orange">{proof.kicker}</p>
      <motion.p className="mt-3 bg-linear-to-b from-white to-orange bg-clip-text text-[60px] font-semibold leading-none tracking-tight text-transparent tabular-nums sm:text-[88px]">
        {orders}
      </motion.p>
      <p className="mt-2 text-lg text-white/85">{proof.unit}</p>
      <div className="mt-4 h-1.5 w-full max-w-sm overflow-hidden rounded-full bg-white/10">
        <motion.div style={{ scaleX: fill }} className="h-full origin-left rounded-full bg-linear-to-r from-orange/60 to-orange" />
      </div>
      <p className="mt-2 flex max-w-sm justify-between font-mono text-xs text-faint">
        <span>{proof.from}</span>
        <span>20,000</span>
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">{proof.body}</p>

      <p className="mt-6 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
        {punch.lines.map((l, i) => (
          <span key={l} className={i === 0 ? "text-white" : "text-orange"}>
            {l}{" "}
          </span>
        ))}
      </p>
      <dl className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {punch.chips.map((c) => (
          <div key={c.label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5 backdrop-blur">
            <dt className="sr-only">{c.label}</dt>
            <dd className="text-lg font-semibold text-white sm:text-xl">{c.value}</dd>
            <dd className="mt-0.5 text-xs leading-snug text-muted">{c.label}</dd>
          </div>
        ))}
      </dl>
    </Beat>
  );
}

/* ---------------------------------------------------------- intelligence */

function IntelIntro() {
  const t = useT();
  return (
    <Beat index={6} id="intelligence">
      <ChapterTag num={t.chapters[1].num} name={t.chapters[1].name} color={ACCENT.intelligence} />
      <h2 className={`mt-5 ${TITLE}`}>{t.intelligence.intro.title}</h2>
      <p className={BODY}>{t.intelligence.intro.body}</p>
      <p className="mt-6 border-l-2 border-cyan pl-4 text-lg text-white sm:text-xl">{t.intelligence.intro.goal}</p>
    </Beat>
  );
}

function IntelBrain() {
  const t = useT();
  const b = t.intelligence.brain;
  return (
    <Beat index={7} tall>
      <p className="eyebrow flex items-center gap-2 text-cyan">
        <Sparkles className="size-3.5" aria-hidden="true" />
        Packiko Core
      </p>
      <h2 className={`mt-4 ${TITLE}`}>{b.title}</h2>
      <p className={BODY}>{b.body}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow text-[11px] text-white/60">{b.todayLabel}</p>
          <ul className="mt-3 grid gap-2">
            {b.today.map((item) => (
              <li key={item} className="flex gap-2.5 text-[14px] leading-snug text-white/85">
                <Check className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-[11px] text-white/60">{b.nextLabel}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {b.next.map((item) => (
              <li key={item} className="rounded-full border border-dashed border-cyan/40 px-3 py-1 text-[13px] text-cyan/90">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Beat>
  );
}

function IntelVision() {
  const t = useT();
  const v = t.intelligence.vision;
  return (
    <Beat index={8} className="lg:max-w-[40rem]">
      <p className="eyebrow text-cyan">{v.kicker}</p>
      <h2 className="mt-5 text-pretty text-[34px] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[60px]">
        <span className="block text-white">{v.lines[0]}</span>
        <span className="block bg-linear-to-r from-cyan to-sky bg-clip-text text-transparent">{v.lines[1]}</span>
      </h2>
      <p className={BODY}>{v.note}</p>
    </Beat>
  );
}

/* --------------------------------------------------------------- network */

function NetworkIntro() {
  const t = useT();
  return (
    <Beat index={9} id="network">
      <ChapterTag num={t.chapters[2].num} name={t.chapters[2].name} color={ACCENT.network} />
      <h2 className={`mt-5 ${TITLE}`}>{t.network.intro.title}</h2>
      <p className={BODY}>{t.network.intro.body}</p>
    </Beat>
  );
}

function NetworkPartner() {
  const t = useT();
  const beat = useBeat();
  const shops = useTransform(beat, (b) => {
    const w = mapWave(b);
    return w >= 0.999 ? "25,000+" : (Math.round((w * 25000) / 100) * 100).toLocaleString("en-US");
  });
  return (
    <Beat index={10} tall>
      <p className="eyebrow text-teal">{t.network.partner.kicker}</p>
      <motion.p className="mt-4 bg-linear-to-b from-white to-teal bg-clip-text text-[60px] font-semibold leading-none tracking-tight text-transparent tabular-nums sm:text-[96px]">
        {shops}
      </motion.p>
      <p className="mt-2 text-lg text-white/85">{t.network.partner.unit}</p>
      <p className={BODY}>{t.network.partner.body}</p>
    </Beat>
  );
}

function NetworkCloser() {
  const t = useT();
  return (
    <Beat index={11} tall>
      <p className={`${BODY} mt-0 text-white/80`}>{t.network.closer.body}</p>
      <h2 className={`mt-6 ${TITLE}`}>
        {t.network.closer.lines.map((l, i) => (
          <span key={l} className={i === 2 ? "block bg-linear-to-r from-teal to-cyan bg-clip-text text-transparent" : "block"}>
            {l}
          </span>
        ))}
      </h2>
    </Beat>
  );
}
