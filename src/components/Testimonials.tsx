import { useTranslations } from "next-intl";

type Testimonial = { quote: string; name: string; role: string };

export function Testimonials() {
  const t = useTranslations("Testimonials");
  const items = t.raw("items") as Testimonial[];

  // Solid color avatars (no fake photos) — brand palette rotation
  const accents = ["#60C7D3", "#F58A1F", "#035897"];

  return (
    <section id="customers" className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-[12px] uppercase tracking-[0.16em] text-cyan-700">
              {t("eyebrow")}
            </span>
            <h2 className="font-display mt-4 max-w-2xl text-[36px] leading-[1.1] tracking-tight text-ink-900 md:text-[48px]">
              {t("title")}
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((q, i) => (
            <figure
              key={q.name}
              className="flex flex-col justify-between rounded-2xl border border-ink-100 bg-white p-7 transition hover:border-cyan-500/40"
            >
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                aria-hidden
              >
                <path
                  d="M0 22V13c0-7.2 4-12 11-13l1 4c-4 1-6 4-6 9h6v9H0zm16 0V13c0-7.2 4-12 11-13l1 4c-4 1-6 4-6 9h6v9H16z"
                  fill={accents[i % accents.length]}
                  opacity="0.5"
                />
              </svg>
              <blockquote className="mt-5 grow text-[16px] leading-relaxed text-ink-800">
                {q.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-ink-100 pt-5">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full font-display text-[14px] font-semibold text-white"
                  style={{ background: accents[i % accents.length] }}
                  aria-hidden
                >
                  {q.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-[13.5px] font-semibold text-ink-900">
                    {q.name}
                  </span>
                  <span className="text-[12px] text-ink-500">{q.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
