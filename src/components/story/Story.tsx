"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useT } from "@/i18n";
import { cn } from "@/lib/utils";
import { StoryContext, useBeat } from "./StoryContext";
import StoryBeats, { ACCENT } from "./StoryBeats";
import SceneLabels from "./SceneLabels";

// three.js is ~600 KB; it loads after the page is interactive and only in the browser.
const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

/**
 * The scroll story: a pinned full-screen 3D warehouse with the script's beats
 * scrolling over it. Scroll position → continuous beat (see `timeline.ts`).
 */
export default function Story() {
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);
  const beat = useMotionValue(0);
  const reduced = useReducedMotion() ?? false;
  const [active, setActive] = useState(true);
  const [ready, setReady] = useState(false);
  const webgl = useWebGL();

  // Scroll → beat. Beat n is reached when panel n is centred in the viewport.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let stops: number[] = [];
    let raf = 0;

    const update = () => {
      raf = 0;
      if (stops.length < 2) return;
      const y = window.scrollY;
      const last = stops.length - 1;
      let b = 0;
      if (y >= stops[last]) b = last;
      else if (y > stops[0]) {
        let i = 0;
        while (i < last - 1 && y >= stops[i + 1]) i++;
        b = i + (y - stops[i]) / (stops[i + 1] - stops[i]);
      }
      beat.set(b);
    };
    const measure = () => {
      const vh = window.innerHeight;
      const els = section.querySelectorAll<HTMLElement>("[data-beat]");
      stops = Array.from(els, (el) => {
        const r = el.getBoundingClientRect();
        return r.top + window.scrollY + r.height / 2 - vh / 2;
      });
      // The hero is already "centred" at the very top of the page.
      if (stops.length) stops[0] = Math.min(stops[0], section.getBoundingClientRect().top + window.scrollY);
      update();
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(section);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
    };
  }, [beat]);

  // Stop rendering the scene once the story is off screen.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { rootMargin: "100px 0px" });
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <StoryContext.Provider value={beat}>
      <section ref={sectionRef} id="story" className="relative bg-night">
        {/* pinned stage */}
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
          <Poster />
          {webgl ? (
            <motion.div
              className="absolute inset-0"
              role="img"
              aria-label={t.a11y.scene}
              initial={false}
              animate={{ opacity: ready ? 1 : 0 }}
              transition={{ duration: 1.2 }}
            >
              <SceneBoundary>
                <Scene beat={beat} active={active} reduced={reduced} onReady={() => setReady(true)} />
              </SceneBoundary>
            </motion.div>
          ) : null}

          {/* scrims keep the text readable over the scene */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-night/80 to-transparent" />
          {/* the floor is light now, so the scrim behind the copy is near-opaque at the edge */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden w-[62%] bg-linear-to-r from-night via-night/85 to-transparent lg:block" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-night via-night/60 to-transparent lg:h-40 lg:from-night/90 lg:via-transparent" />
          <EdgeFade />

          {webgl && ready ? <SceneLabels /> : null}
          <MapLegend />
          <ScrollCue />
        </div>

        {/* beats scroll over the stage */}
        <div className="relative -mt-[100svh]">
          <StoryBeats />
        </div>
      </section>
    </StoryContext.Provider>
  );
}

/* ------------------------------------------------------------------------ */

function useWebGL() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot capability probe
      setOk(Boolean(c.getContext("webgl2") || c.getContext("webgl")));
    } catch {
      setOk(false);
    }
  }, []);
  return ok;
}

/** If WebGL throws mid-story, keep the poster and the text; never blank the page. */
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/** What shows before the scene loads (and instead of it without WebGL). */
function Poster() {
  return (
    <div aria-hidden="true" className="absolute inset-0 bg-night">
      <div className="bg-blueprint absolute inset-0 [mask-image:radial-gradient(ellipse_at_65%_55%,black,transparent_70%)]" />
      <div className="absolute top-1/2 left-[62%] size-[46rem] -translate-1/2 rounded-full bg-blue/25 blur-[120px]" />
      <div className="absolute top-[60%] left-[70%] size-[22rem] -translate-1/2 rounded-full bg-cyan/10 blur-[90px]" />
    </div>
  );
}

/** Lets the building's cropped near corner dissolve into the page instead of
    being cut off by the viewport. Gone by the time the map takes the stage. */
function EdgeFade() {
  const beat = useBeat();
  const opacity = useTransform(beat, [8.4, 9], [1, 0]);
  return (
    <motion.div
      aria-hidden="true"
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(65%_90%_at_55%_45%,transparent_50%,var(--color-night)_100%)] lg:block"
    />
  );
}

function MapLegend() {
  const t = useT();
  const beat = useBeat();
  const opacity = useTransform(beat, [9.6, 10.1, 11.4, 11.9], [0, 1, 1, 0.9]);
  const items = [
    { label: t.network.legend.hub, color: ACCENT.intelligence, shape: "rounded-sm" },
    { label: t.network.legend.shop, color: ACCENT.network, shape: "rounded-full" },
    { label: t.network.legend.mfc, color: ACCENT.speed, shape: "rounded-full" },
  ];
  return (
    <motion.ul
      aria-hidden="true"
      style={{ opacity }}
      className="pointer-events-none absolute right-4 bottom-[57%] z-10 hidden gap-2 rounded-2xl border border-white/10 bg-night/85 p-3 text-xs text-white/75 sm:right-8 sm:grid lg:bottom-8"
    >
      {items.map((i) => (
        <li key={i.label} className="flex items-center gap-2.5">
          <span className={cn("size-2.5", i.shape)} style={{ background: i.color, boxShadow: `0 0 10px ${i.color}` }} />
          {i.label}
        </li>
      ))}
    </motion.ul>
  );
}

function ScrollCue() {
  const t = useT();
  const beat = useBeat();
  const opacity = useTransform(beat, [0, 0.25], [1, 0]);
  return (
    <motion.div
      aria-hidden="true"
      style={{ opacity }}
      className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
    >
      <span className="font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase">{t.hero.scroll}</span>
      <span className="relative h-9 w-5 rounded-full border border-white/25">
        <span className="animate-scroll-cue absolute top-1.5 left-1/2 h-2 w-0.5 -translate-x-1/2 rounded-full bg-white/70" />
      </span>
    </motion.div>
  );
}
