"use client";

/**
 * Text Generate Effect — Aceternity UI, as listed on 21st.dev
 * (https://21st.dev/@manuarora700). Adapted: plays when scrolled into view
 * rather than on mount, takes pre-split lines (Thai has no spaces between
 * words, so splitting on " " would treat a whole sentence as one word), and
 * marks every span `data-reveal` so reduced-motion visitors see the text at rest.
 * Each line watches its own visibility: lines that re-mount (a language switch)
 * would otherwise miss the parent's one-off variant change and stay hidden.
 */
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function TextGenerateEffect({
  lines,
  className,
  lineClassName,
  duration = 0.7,
  stagger = 0.22,
}: {
  lines: readonly string[];
  className?: string;
  lineClassName?: (index: number) => string;
  duration?: number;
  stagger?: number;
}) {
  return (
    <span className={cn("block", className)}>
      {lines.map((line, i) => (
        <motion.span
          key={line + i}
          data-reveal
          className={cn("block", lineClassName?.(i))}
          initial={{ opacity: 0, filter: "blur(10px)", y: 8 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration, delay: i * stagger, ease: [0.22, 1, 0.36, 1] }}
        >
          {line}
        </motion.span>
      ))}
    </span>
  );
}
