"use client";

import { useState } from "react";
import { useMotionValueEvent } from "framer-motion";
import { useBeat } from "./StoryContext";

/**
 * Labels that point at things in the 3D scene are ordinary DOM (so they can be
 * translated and styled like the rest of the page). The scene writes each
 * label's world anchor here; the projector inside the canvas turns anchors into
 * screen positions every frame and moves the registered elements.
 *
 * Nothing here imports three.js — the DOM side stays light.
 */
export const anchors = new Map<string, Float32Array>();
/** Label element → the anchor it follows (several labels may share one). */
export const labelEls = new Map<HTMLElement, string>();

export function setAnchor(id: string, x: number, y: number, z: number) {
  let a = anchors.get(id);
  if (!a) anchors.set(id, (a = new Float32Array(3)));
  a[0] = x;
  a[1] = y;
  a[2] = z;
}

export function registerLabel(anchor: string) {
  return (el: HTMLElement | null) => {
    if (!el) return;
    labelEls.set(el, anchor);
    return () => {
      labelEls.delete(el);
    };
  };
}

/** A discrete value derived from the beat, re-rendering only when it changes
    (which pick stops are done, which pack step we are on …). */
export function useBeatValue<T>(fn: (beat: number) => T): T {
  const beat = useBeat();
  const [value, setValue] = useState(() => fn(beat.get()));
  useMotionValueEvent(beat, "change", (b) => {
    const next = fn(b);
    setValue((prev) => (Object.is(prev, next) ? prev : next));
  });
  return value;
}
