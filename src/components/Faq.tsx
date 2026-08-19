"use client";

import { Plus } from "lucide-react";
import { useT } from "@/i18n";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Faq() {
  const t = useT();
  return (
    <section id="faq" className="bg-surface-2 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow={t.faq.eyebrow} heading={t.faq.heading} />

        <div className="mx-auto mt-10 grid max-w-3xl gap-2.5">
          {t.faq.items.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group overflow-hidden rounded-2xl border border-line bg-raised transition-colors open:border-brand/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-[16px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  <span className="flex-1">{f.q}</span>
                  <Plus
                    className="size-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-45 group-open:text-orange-ink"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-5 pb-5 text-[15px] leading-[1.7] text-muted">{f.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
