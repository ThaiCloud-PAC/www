"use client";

import { ArrowUpRight, Boxes, Store, Video, Warehouse, type LucideIcon } from "lucide-react";
import { useT } from "@/i18n";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";

/** Visual config per card, in dictionary order: Add-in, Prime, Ultra, Hub. */
const CARDS: { icon: LucideIcon; tone: string; area: string; feature?: boolean }[] = [
  { icon: Video, tone: "#f37521", area: "lg:col-start-1 lg:row-start-2" },
  { icon: Boxes, tone: "#4aa8f0", area: "lg:col-start-2 lg:row-start-2" },
  { icon: Warehouse, tone: "#5ec9d3", area: "lg:col-span-2 lg:col-start-1 lg:row-start-1", feature: true },
  { icon: Store, tone: "#48bfaa", area: "lg:col-start-3 lg:row-span-2 lg:row-start-1" },
];

export default function Products() {
  const t = useT();
  const p = t.products;

  return (
    <section id="products" className="relative bg-night py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <SectionHeading eyebrow={p.eyebrow} heading={p.heading} lead={p.lead} />

        <div className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-2 lg:auto-rows-[minmax(260px,auto)] lg:grid-cols-3">
          {p.cards.map((card, i) => {
            const c = CARDS[i];
            const Icon = c.icon;
            return (
              <Reveal key={card.title} delay={i * 0.06} className={cn("h-full", c.area)}>
                <a
                  href="#contact"
                  className="group relative flex h-full flex-col rounded-[28px] border border-white/10 bg-panel/70 p-2 transition-colors hover:border-white/20"
                >
                  <GlowingEffect spread={36} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] bg-night-2/80 p-6 sm:p-7">
                    {c.feature ? <BorderBeam size={120} duration={10} /> : null}
                    {/* Corner glow as a gradient on a layer with the card's own radius: a
                        blurred circle poking out of the corner gets clipped square by the
                        browser instead of following the rounded corner. */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: `radial-gradient(70% 60% at 100% 0%, ${c.tone}38, transparent 70%)` }}
                    />
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className="grid size-12 place-items-center rounded-2xl border"
                        style={{ color: c.tone, borderColor: `${c.tone}55`, background: `${c.tone}14` }}
                      >
                        <Icon className="size-6" aria-hidden="true" />
                      </span>
                      <span className="rounded-full border border-white/12 px-3 py-1 font-mono text-[11px] tracking-wider text-white/70">
                        {card.tag}
                      </span>
                    </div>
                    <h3 className={cn("mt-6 font-semibold tracking-tight text-white", c.feature ? "text-3xl sm:text-4xl" : "text-2xl")}>
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-snug" style={{ color: c.tone }}>
                      {card.fit}
                    </p>
                    <p className={cn("mt-4 text-[15px] leading-relaxed text-muted", c.feature && "max-w-2xl")}>{card.detail}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm text-white/80 transition-colors group-hover:text-white">
                      {p.more}
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
