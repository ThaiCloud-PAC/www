"use client";

import { MotionConfig } from "framer-motion";

/**
 * `reducedMotion="user"` drops transform/layout animation for visitors who ask
 * for reduced motion while still running the opacity pass — without it, the
 * server-rendered `initial` styles would stay on screen and hide the content.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
