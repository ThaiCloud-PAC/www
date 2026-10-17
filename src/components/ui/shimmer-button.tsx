/**
 * Shimmer Button — Magic UI (MIT), as listed on 21st.dev
 * (https://21st.dev/@dillionverma/components/shimmer-button). Adapted to render
 * an anchor (every CTA on this site is a link) with the palette as defaults.
 * Keyframes live in globals.css.
 */
import { type ComponentPropsWithoutRef, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

export interface ShimmerLinkProps extends ComponentPropsWithoutRef<"a"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
}

export function ShimmerLink({
  shimmerColor = "#ffffff",
  shimmerSize = "0.06em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "linear-gradient(135deg, #0d5f9f 0%, #1b7fc4 100%)",
  className,
  children,
  ...props
}: ShimmerLinkProps) {
  return (
    <a
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as CSSProperties
      }
      className={cn(
        "group relative z-0 inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden [border-radius:var(--radius)] border border-white/15 px-6 py-3 whitespace-nowrap text-white [background:var(--bg)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className,
      )}
      {...props}
    >
      {/* spark container. The clip-path keeps the spark inside the pill: the
          link's overflow + radius doesn't clip this animated, GPU-composited
          layer, so a square corner of white poked out past the left edge. */}
      <div className="@container-[size] absolute inset-0 -z-30 overflow-visible blur-[2px] [clip-path:inset(0_round_var(--radius))]">
        <div className="animate-shimmer-slide absolute inset-0 aspect-[1] h-[100cqh] rounded-none [mask:none]">
          <div className="animate-spin-around absolute -inset-full w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
        </div>
      </div>
      {children}
      {/* highlight */}
      <div className="absolute inset-0 size-full rounded-[inherit] shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]" />
      {/* backdrop */}
      <div className="absolute inset-(--cut) -z-20 [border-radius:var(--radius)] [background:var(--bg)]" />
    </a>
  );
}
