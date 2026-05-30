type LogoProps = {
  variant?: "light" | "dark" | "warm";
  className?: string;
};

const SOURCES: Record<NonNullable<LogoProps["variant"]>, string> = {
  light: "/logos/thaicloud-logo-color.svg",
  dark: "/logos/thaicloud-logo-color-knockout.svg",
  warm: "/logos/thaicloud-logo-mono-navy.svg",
};

export function Logo({ variant = "light", className = "" }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={SOURCES[variant]}
      alt="ThaiCloud"
      className={`h-9 w-auto select-none ${className}`}
      draggable={false}
    />
  );
}
