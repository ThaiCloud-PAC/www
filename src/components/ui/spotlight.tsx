"use client";

/**
 * Spotlight — Aceternity UI ("spotlight-new"), as listed on 21st.dev
 * (https://21st.dev/@manuarora700). Adapted: framer-motion import and a cyan
 * tint from the Packiko mark instead of the default blue-white.
 */
import { motion } from "framer-motion";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export function Spotlight({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(186, 70%, 80%, .09) 0, hsla(186, 70%, 55%, .025) 50%, hsla(186, 70%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(186, 70%, 80%, .07) 0, hsla(186, 70%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(186, 70%, 80%, .05) 0, hsla(186, 70%, 45%, .02) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps) {
  const beams = (side: "left" | "right") => {
    const sign = side === "left" ? -1 : 1;
    // Literal class names — Tailwind cannot see `${side}-0`.
    const edge = side === "left" ? "left-0" : "right-0";
    const origin = side === "left" ? "origin-top-left" : "origin-top-right";
    return (
      <motion.div
        animate={{ x: [0, -sign * xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className={`pointer-events-none absolute top-0 ${edge} h-full w-full`}
      >
        <div
          style={{ transform: `translateY(${translateY}px) rotate(${sign * 45}deg)`, background: gradientFirst, width, height }}
          className={`absolute top-0 ${edge}`}
        />
        <div
          style={{ transform: `rotate(${sign * 45}deg) translate(${-sign * 5}%, -50%)`, background: gradientSecond, width: smallWidth, height }}
          className={`absolute top-0 ${edge} ${origin}`}
        />
        <div
          style={{ transform: `rotate(${sign * 45}deg) translate(${sign * 180}%, -70%)`, background: gradientThird, width: smallWidth, height }}
          className={`absolute top-0 ${edge} ${origin}`}
        />
      </motion.div>
    );
  };

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
    >
      {beams("left")}
      {beams("right")}
    </motion.div>
  );
}
