"use client";

import { ArrowRight, LineChart, ShoppingBag } from "lucide-react";
import { useT } from "@/i18n";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Reveal from "@/components/Reveal";
import { ROLE_EVENT } from "./Contact";

/** "So, that's Packiko." — the script's last beat and the two calls to action. */
export default function Closing() {
  const t = useT();
  const c = t.closing;
  const audiences = [
    { ...c.merchants, icon: ShoppingBag, role: 0, tone: "#5ec9d3" },
    { ...c.investors, icon: LineChart, role: 1, tone: "#f37521" },
  ];

  return (
    <section id="closing" className="relative overflow-hidden bg-night pt-20 pb-12 sm:pt-28">
      <Spotlight />
      <div aria-hidden="true" className="bg-blueprint absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow text-cyan">{c.kicker}</p>
        </Reveal>
        <h2 className="mt-5 text-[40px] leading-[1.04] font-semibold tracking-tight sm:text-6xl lg:text-[68px]">
          <TextGenerateEffect
            lines={c.lines}
            lineClassName={(i) => (i === 2 ? "bg-linear-to-r from-cyan to-teal bg-clip-text text-transparent" : i === 1 ? "text-white/80" : "text-white")}
          />
        </h2>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{c.lead}</p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-left md:grid-cols-2">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={0.1 + i * 0.1} className="h-full">
                <a
                  href="#contact"
                  onClick={() => window.dispatchEvent(new CustomEvent(ROLE_EVENT, { detail: a.role }))}
                  className="group relative flex h-full flex-col rounded-[28px] border border-white/10 bg-panel/70 p-2"
                >
                  <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                  <div className="relative flex h-full flex-col rounded-[22px] bg-night-2/80 p-6 sm:p-7">
                    <span
                      className="grid size-11 place-items-center rounded-2xl border"
                      style={{ color: a.tone, borderColor: `${a.tone}55`, background: `${a.tone}14` }}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-2xl font-semibold text-white">{a.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{a.body}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 font-medium" style={{ color: a.tone }}>
                      {a.cta}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
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
