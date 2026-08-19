"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Reveal-on-scroll wrapper, fires once. Reduced motion is handled globally by
 * <MotionProvider> plus the `[data-reveal]` rule in globals.css, so this never
 * branches on the preference — branching would leave the server-rendered
 * `initial` styles behind on the client and hide the content.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      // The bottom margin pulls the trigger line ~18% up the viewport: without
      // it the reveal fires the moment a block clips the bottom edge and is over
      // before you have scrolled it into view.
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -18% 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
