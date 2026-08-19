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
  y = 18,
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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
