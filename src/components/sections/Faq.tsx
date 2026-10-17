"use client";

import { Plus } from "lucide-react";
import { useT } from "@/i18n";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";

export default function Faq() {
  const t = useT();
  return (
    <section id="faq" className="bg-night py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <SectionHeading eyebrow={t.faq.eyebrow} heading={t.faq.heading} />

        <div className="mx-auto mt-12 grid max-w-3xl gap-3">
          {t.faq.items.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group rounded-3xl border border-white/10 bg-panel/60 transition-colors open:border-cyan/30 open:bg-panel">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-[16px] font-medium text-white sm:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex-1">{f.q}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/15 transition-colors group-open:border-cyan/50">
                    <Plus className="size-4 text-white/80 transition-transform duration-300 group-open:rotate-45 group-open:text-cyan" aria-hidden="true" />
                  </span>
                </summary>
                <div className="px-5 pb-6 text-[15px] leading-[1.75] text-muted sm:px-6">{f.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
