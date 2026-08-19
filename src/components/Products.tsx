"use client";

import { Boxes, Store, Video, Warehouse } from "lucide-react";
import { useT } from "@/i18n";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/** Visual config + the fit matrix scores. 2 = core strength, 1 = supported, 0 = not the target. */
const CARDS = [
  { tag: "Add-in", icon: Video, tone: "text-orange-ink", bar: "bg-orange", tint: "bg-orange/10" },
  { tag: "Prime", icon: Boxes, tone: "text-teal-ink", bar: "bg-teal", tint: "bg-teal/10" },
  { tag: "Ultra", icon: Warehouse, tone: "text-brand", bar: "bg-navy", tint: "bg-navy/10" },
  { tag: "Hub", icon: Store, tone: "text-yellow-ink", bar: "bg-yellow", tint: "bg-yellow/10" },
];

const SCORES = [
  [2, 1, 1, 0],
  [0, 2, 2, 1],
  [0, 0, 2, 0],
  [0, 1, 2, 0],
  [0, 0, 0, 2],
];

export default function Products() {
  const t = useT();
  return (
    <section id="products" className="bg-surface py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow={t.products.eyebrow} heading={t.products.heading} lead={t.products.lead} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.products.cards.map((p, i) => {
            const c = CARDS[i];
            const Icon = c.icon;
            return (
              <Reveal key={c.tag} delay={i * 0.08} className="h-full">
                <a
                  href="#contact-sec"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-raised p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <span className={`absolute inset-x-0 top-0 h-1.5 ${c.bar}`} aria-hidden="true" />
                  <span className={`grid size-14 place-items-center rounded-2xl ${c.tint} ${c.tone}`}>
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <span className={`mt-5 text-[11px] font-semibold uppercase tracking-[0.15em] ${c.tone}`}>{c.tag}</span>
                  <h3 className="mt-1 text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.fit}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.detail}</p>
                  <span className={`mt-auto pt-5 text-[13px] font-semibold ${c.tone}`}>
                    {t.products.more}
                    <span aria-hidden="true"> →</span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 hidden lg:block">
          <div className="overflow-hidden rounded-2xl border border-line">
            <table className="w-full border-collapse text-[15px]">
              <thead>
                <tr className="bg-surface-2">
                  <th scope="col" className="p-4 text-left font-bold text-ink">
                    {t.products.matrix.caption}
                  </th>
                  {CARDS.map((c) => (
                    <th key={c.tag} scope="col" className={`p-4 font-bold ${c.tone}`}>
                      {c.tag}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.products.matrix.rows.map((need, r) => (
                  <tr key={need} className="border-t border-line">
                    <td className="p-4 text-ink">{need}</td>
                    {SCORES[r].map((v, c) => (
                      <td
                        key={c}
                        className={`p-4 text-center ${v === 2 ? "text-lg text-brand" : v === 1 ? "text-teal-ink" : "text-muted/50"}`}
                      >
                        {v === 2 ? "●" : v === 1 ? "○" : "–"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-center text-[13px] text-muted">{t.products.matrix.legend}</p>
        </Reveal>
      </div>
    </section>
  );
}
