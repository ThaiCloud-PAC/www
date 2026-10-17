"use client";

import { createContext, useContext } from "react";
import type { MotionValue } from "framer-motion";

/** The continuous beat (see `timeline.ts`), driven by scroll inside <Story>. */
export const StoryContext = createContext<MotionValue<number> | null>(null);

export function useBeat() {
  const beat = useContext(StoryContext);
  if (!beat) throw new Error("useBeat must be used inside <Story>");
  return beat;
}
