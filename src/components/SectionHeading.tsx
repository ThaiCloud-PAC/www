import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Eyebrow + heading + optional lead, centred — shared by every section. */
export default function SectionHeading({
  eyebrow,
  heading,
  lead,
  onDark = false,
}: {
  eyebrow?: string;
  heading: ReactNode;
  lead?: string;
  onDark?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${onDark ? "text-white/70" : "text-orange-ink"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-pretty text-[28px] font-bold leading-[1.25] tracking-tight md:text-[40px] ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        {heading}
      </h2>
      {lead ? (
        <p className={`mt-4 text-[15px] leading-relaxed md:text-base ${onDark ? "text-white/80" : "text-muted"}`}>{lead}</p>
      ) : null}
    </Reveal>
  );
}
