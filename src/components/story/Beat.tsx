"use client";

import { motion, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useBeat } from "./StoryContext";

/**
 * One screen of the story. The panel scrolls normally over the pinned scene and
 * fades with its distance from the current beat, so it is fully readable while
 * centred and gone before the next one arrives.
 *
 * Desktop: text on the left over a dark scrim, scene to the right.
 * Mobile: text in a glass card at the bottom, scene above it.
 */
export default function Beat({
  index,
  id,
  children,
  className,
  tall = false,
}: {
  index: number;
  id?: string;
  children: ReactNode;
  className?: string;
  /** Gives the beat more scroll distance on desktop (the counter beats need time to count). */
  tall?: boolean;
}) {
  const beat = useBeat();
  const opacity = useTransform(beat, [index - 0.72, index - 0.28, index + 0.28, index + 0.72], [0, 1, 1, 0]);
  const y = useTransform(beat, [index - 0.72, index, index + 0.72], [28, 0, -28]);

  return (
    <div
      id={id}
      data-beat={index}
      className={cn(
        "relative flex scroll-mt-0 items-end pb-6 sm:pb-10 lg:items-center lg:pb-0",
        // Extra scroll distance only on desktop: on phones the card sits at the
        // bottom of the beat, and a taller beat would push it below the fold.
        tall ? "min-h-[100svh] lg:min-h-[150svh]" : "min-h-[100svh]",
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <motion.div
          style={{ opacity, y }}
          className={cn(
            // no backdrop blur: over a scene that redraws every frame, the blur is
            // recomputed every frame too, and phones can't afford it
            "max-w-[34rem] rounded-3xl border border-white/10 bg-night/88 p-5 shadow-2xl shadow-black/40 sm:p-7",
            "lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none",
            className,
          )}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

/** "01 — SPEED" style chapter tag. */
export function ChapterTag({ num, name, color }: { num: string; name: string; color: string }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-muted">
      <span className="size-2 rounded-full" style={{ background: color, boxShadow: `0 0 14px ${color}` }} />
      <span style={{ color }}>{num}</span>
      <span className="h-px w-8 bg-white/20" />
      <span>{name}</span>
    </p>
  );
}
