"use client";

import { Boxes, Coins, IdCard, Store, Truck, Video } from "lucide-react";
import { useT } from "@/i18n";

/** The positioning pillars. The first five are the canonical line from
    PACKIKO-ECOSYSTEM.md; "Worker Identity" is a deliberate sixth (Charli,
    2026-08-19) — it is a real differentiator and it makes the row divide evenly
    at every breakpoint (2×3 on phones, 3×2 on tablets, 6 across on desktop). */
const ICONS = [Video, Boxes, Truck, Store, Coins, IdCard];
const TONE = ["text-orange-ink", "text-teal-ink", "text-brand", "text-yellow-ink", "text-teal-ink", "text-orange-ink"];

export default function Pillars() {
  const t = useT();
  return (
    <div className="border-y border-line bg-surface-2">
      <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {t.pillars.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <li key={p.label} className="flex items-center gap-3">
                <Icon className={`size-6 shrink-0 ${TONE[i]}`} aria-hidden="true" />
                <div className="min-w-0">
                  <b className="block truncate text-sm font-semibold text-ink">{p.label}</b>
                  <small className="block text-xs text-muted">{p.sub}</small>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
