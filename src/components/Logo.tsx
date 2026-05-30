import { useId } from "react";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

/**
 * ThaiCloud placeholder logo — two infinity loops + cloud crown.
 * NOT the final brand SVG; matches docs/redesign-mockup.html `.logo-glyph`.
 *
 * Wordmark renders solid (no color split):
 *   - variant="dark"  (over dark bg) → text-white
 *   - variant="light" (over light bg) → text-ink-900 (royal blue brand navy)
 */
export function Logo({ variant = "light", className = "" }: LogoProps) {
  const uid = useId();
  const loopLId = `loopL-${uid}`;
  const loopRId = `loopR-${uid}`;

  const wordmarkClass =
    variant === "dark" ? "text-white" : "text-ink-900";
  const crownStroke = variant === "dark" ? "#FFFFFF" : "var(--color-ink-900)";
  const crownOpacity = variant === "dark" ? 0.95 : 1;

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id={loopLId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F37521" />
            <stop offset="100%" stopColor="#FAB217" />
          </linearGradient>
          <linearGradient id={loopRId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60C7D3" />
            <stop offset="100%" stopColor="#035897" />
          </linearGradient>
        </defs>
        <path
          d="M11 14 C 4 14, 4 26, 11 26 C 17 26, 17 14, 24 14"
          stroke={`url(#${loopLId})`}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M16 26 C 22 26, 22 14, 29 14 C 36 14, 36 26, 29 26 C 22 26, 22 14, 16 14"
          stroke={`url(#${loopRId})`}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M14 10 Q 20 6, 26 10"
          stroke={crownStroke}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity={crownOpacity}
        />
      </svg>
      <span
        className={`font-display text-[21px] font-bold tracking-[-0.01em] ${wordmarkClass}`}
      >
        ThaiCloud
      </span>
    </div>
  );
}
