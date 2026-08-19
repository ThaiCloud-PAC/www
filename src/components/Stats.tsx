"use client";

import { useT } from "@/i18n";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

/** Language-neutral figures — see the memory note: orders/day was raised to 20,000. */
const VALUES = [80, 30, 80, 20000];
const TONE = ["text-white", "text-yellow", "text-[#5fd3d2]", "text-white"];

export default function Stats() {
  const t = useT();
  return (
    <section
      id="how-it-works"
      className="bg-[linear-gradient(135deg,var(--brand-surface)_0%,var(--color-deep)_100%)] py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {t.stats.items.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="text-center">
              <h3 className={`text-[38px] font-bold tabular-nums leading-none md:text-[56px] ${TONE[i]}`}>
                <CountUp value={VALUES[i]} />
              </h3>
              <p className="mt-2 text-sm text-white/80">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-white/85">{t.stats.line}</p>
          <a
            href="#contact-sec"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white/90"
          >
            {t.stats.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
