import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

/** Eyebrow + heading + optional lead, shared by every section after the story. */
export default function SectionHeading({
  eyebrow,
  heading,
  lead,
  align = "center",
  accent = "text-cyan",
  className,
}: {
  eyebrow?: string;
  heading: ReactNode;
  lead?: string;
  align?: "center" | "left";
  accent?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}>
      {eyebrow ? <p className={cn("eyebrow mb-4", accent)}>{eyebrow}</p> : null}
      <h2 className="text-pretty text-[32px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[44px] lg:text-[52px]">
        {heading}
      </h2>
      {lead ? <p className="mt-5 text-[16px] leading-relaxed text-muted sm:text-lg">{lead}</p> : null}
    </Reveal>
  );
}
