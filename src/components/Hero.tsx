"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useT } from "@/i18n";
import FlowVisual from "./FlowVisual";

const ROTATE_MS = 2600;

export default function Hero() {
  const t = useT();
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI((v) => (v + 1) % t.hero.rotating.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [reduced, t.hero.rotating.length]);

  // Clamped rather than reset, so switching dictionaries can never index past the array.
  const phrase = t.hero.rotating[i % t.hero.rotating.length];
  const longest = t.hero.rotating.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <section id="home" className="relative overflow-hidden bg-surface">
      {/* soft brand wash, decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-teal/10 blur-3xl dark:bg-teal/5"
      />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-ink">{t.hero.eyebrow}</p>

          <h1 className="mt-4 text-[34px] font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
            {t.hero.heading}
            <span className="mt-1 grid">
              {/* reserve the widest phrase so the line never jumps */}
              <span className="invisible col-start-1 row-start-1" aria-hidden="true">
                {longest}
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={phrase}
                  data-reveal
                  className="col-start-1 row-start-1 text-orange-ink"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {phrase}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted md:text-base lg:mx-0">{t.hero.sub}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#contact-sec"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand/10"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="lg:pl-6">
          <FlowVisual />
          <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
            {t.hero.chips.map((c, idx) => (
              <div
                key={c.label}
                className="rounded-2xl border border-line bg-raised px-3 py-3 text-center shadow-card sm:text-left"
              >
                <b
                  className={`block text-lg font-bold leading-tight ${
                    idx === 1 ? "text-orange-ink" : idx === 2 ? "text-teal-ink" : "text-brand"
                  }`}
                >
                  {c.value}
                </b>
                <small className="mt-0.5 block text-xs leading-snug text-muted">{c.label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
