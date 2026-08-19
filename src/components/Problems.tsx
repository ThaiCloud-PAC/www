"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeftRight,
  Ban,
  BarChart3,
  Footprints,
  Forklift,
  Gavel,
  GraduationCap,
  Hourglass,
  MessageCircle,
  PackageOpen,
  Store,
  UserCog,
  UserSearch,
  Users,
  VideoOff,
} from "lucide-react";
import { useT } from "@/i18n";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/** Visual config only — the copy lives in the dictionaries. */
const GROUPS = [
  { icon: Store, tone: "text-orange-ink", items: [PackageOpen, ArrowLeftRight, MessageCircle, Gavel] },
  { icon: Forklift, tone: "text-brand", items: [Footprints, VideoOff, Ban, Hourglass] },
  { icon: Users, tone: "text-teal-ink", items: [UserSearch, BarChart3, GraduationCap, UserCog] },
];

export default function Problems() {
  const t = useT();
  const [active, setActive] = useState(0);

  const group = t.problems.groups[active];
  const cfg = GROUPS[active];

  return (
    <section id="problems" className="bg-surface py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow={t.problems.eyebrow} heading={t.problems.heading} lead={t.problems.lead} />

        <Reveal className="mt-10">
          <div
            role="tablist"
            aria-label={t.a11y.problemGroups}
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:justify-center sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {t.problems.groups.map((g, i) => {
              const Icon = GROUPS[i].icon;
              const on = i === active;
              return (
                <button
                  key={g.title}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                    on
                      ? "border-transparent bg-cta text-white"
                      : "border-line bg-raised text-muted hover:border-brand hover:text-brand"
                  }`}
                >
                  <Icon className="size-4" aria-hidden="true" />
                  <span className="whitespace-nowrap">{g.title}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${active}-${group.title}`}
              role="tabpanel"
              data-reveal
              className="mt-6 rounded-3xl border border-line bg-surface-2 p-6 md:p-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid gap-8 lg:grid-cols-3">
                <div>
                  <h3 className={`text-2xl font-bold leading-snug ${cfg.tone}`}>{group.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{group.lead}</p>
                </div>
                <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-2">
                  {group.items.map((it, i) => {
                    const Icon = cfg.items[i];
                    return (
                      <div key={it.t} className="flex gap-3">
                        <Icon className={`mt-0.5 size-5 shrink-0 ${cfg.tone}`} aria-hidden="true" />
                        <div>
                          <b className="block text-[15px] font-semibold text-ink">{it.t}</b>
                          <span className="mt-1 block text-[15px] leading-relaxed text-muted">{it.d}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
