type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tag?: string;
};

/** Dark header band for subpages — keeps the Nav (white text) legible. */
export function PageHero({ eyebrow, title, subtitle, tag }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, var(--color-ink-900) 0%, var(--color-ink-950) 65%)",
        padding: "150px 0 70px",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          WebkitMaskImage:
            "radial-gradient(120% 60% at 50% 30%, black 30%, transparent 80%)",
          maskImage:
            "radial-gradient(120% 60% at 50% 30%, black 30%, transparent 80%)",
        }}
        aria-hidden
      />
      <div className="relative z-[2] mx-auto max-w-7xl px-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
          {eyebrow}
        </p>
        {tag && (
          <span className="mt-4 inline-flex items-center rounded-full border border-white/[0.14] bg-white/[0.06] px-3.5 py-1.5 text-[12px] text-white/75">
            {tag}
          </span>
        )}
        <h1
          className="font-display mt-4 max-w-[900px] leading-[1.08] tracking-[-0.02em]"
          style={{ fontSize: "clamp(34px, 5vw, 60px)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-[720px] text-[17px] leading-[1.65] text-white/72">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
