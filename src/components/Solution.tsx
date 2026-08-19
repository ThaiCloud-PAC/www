"use client";

import { Boxes, ClipboardCheck, Route, ShieldCheck, UserCheck, Video } from "lucide-react";
import { useT } from "@/i18n";
import PlatformMap from "./PlatformMap";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const ICONS = [Boxes, Route, ClipboardCheck, Video, ShieldCheck, UserCheck];
const TONE = ["text-teal-ink", "text-brand", "text-brand", "text-orange-ink", "text-orange-ink", "text-yellow-ink"];

export default function Solution() {
  const t = useT();
  return (
    <section id="solution" className="bg-surface-2 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow={t.solution.eyebrow} heading={t.solution.heading} lead={t.solution.lead} />

        <Reveal className="mt-12">
          <div className="platform-map-scroll">
            <PlatformMap />
          </div>
          <p className="mt-3 text-center text-xs text-muted md:hidden">{t.solution.mapHint}</p>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.solution.items.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.t} delay={(i % 3) * 0.08} className="flex gap-4">
                <Icon className={`mt-0.5 size-7 shrink-0 ${TONE[i]}`} aria-hidden="true" />
                <div>
                  <b className="block text-[17px] font-semibold text-ink">{s.t}</b>
                  <span className="mt-1.5 block text-[15px] leading-relaxed text-muted">{s.d}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
