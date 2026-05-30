type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "light", className = "" }: LogoProps) {
  // "light" = light background (use ink text)
  // "dark"  = dark background (use bone text)
  const textColor = variant === "light" ? "text-ink-900" : "text-bone";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="2"
          y="2"
          width="24"
          height="24"
          rx="6"
          fill="currentColor"
          className={variant === "light" ? "text-ink-900" : "text-bone"}
        />
        <path
          d="M8 14 L13 9 L13 12 L20 12 L20 16 L13 16 L13 19 Z"
          fill="var(--color-cyan-500)"
        />
        <circle cx="22" cy="6" r="2.5" fill="var(--color-cyan-500)" />
      </svg>
      <span
        className={`font-display text-[19px] font-semibold tracking-tight ${textColor}`}
      >
        Thai<span className="text-cyan-500">Cloud</span>
      </span>
    </div>
  );
}
