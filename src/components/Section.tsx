/** Light-section heading block + shared card primitives for content pages. */

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-700">
          {eyebrow}
        </p>
      )}
      <h2
        className="font-display mt-3 leading-[1.15] tracking-[-0.02em] text-slate-900"
        style={{ fontSize: "clamp(26px, 3.6vw, 40px)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[16px] leading-[1.65] text-slate-600 ${centered ? "mx-auto" : ""} max-w-[640px]`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Card({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <div className="rounded-card border border-slate-100 bg-white p-7 shadow-[0_2px_16px_-8px_rgba(2,40,63,0.12)]">
      {index !== undefined && (
        <span className="font-mono-num mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink-100 text-[13px] font-semibold text-ink-900">
          {index + 1}
        </span>
      )}
      <h3 className="text-[17px] font-semibold text-slate-900">{title}</h3>
      <p className="mt-2.5 text-[14.5px] leading-[1.65] text-slate-600">
        {description}
      </p>
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[3px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-[11px] font-bold text-teal-700">
            ✓
          </span>
          <span className="text-[15.5px] leading-[1.6] text-slate-700">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
