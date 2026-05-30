import { useTranslations } from "next-intl";

type Testimonial = { quote: string; name: string; role: string };

export function Testimonials() {
  const t = useTranslations("Testimonials");
  const items = t.raw("items") as Testimonial[];

  // Per-card accent rotation: cyan / orange / navy
  const accents = [
    { mark: "var(--color-cyan-500)", avatarBg: "var(--color-cyan-500)" },
    { mark: "var(--color-orange-400)", avatarBg: "var(--color-orange-500)" },
    { mark: "var(--color-ink-900)", avatarBg: "var(--color-ink-900)" },
  ];

  return (
    <section id="customers" className="bg-bone py-[100px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-[700px]">
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-500">
            {t("eyebrow")}
          </span>
          <h2 className="font-display mt-3.5 text-[clamp(30px,4vw,46px)] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {items.map((q, i) => {
            const a = accents[i % accents.length];
            return (
              <figure
                key={q.name}
                className="flex flex-col rounded-[18px] bg-white p-[30px] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_18px_36px_-20px_rgba(2,40,63,0.16)]"
              >
                <div
                  className="font-display mb-2 text-[64px] font-extrabold leading-[0.6]"
                  style={{ color: a.mark }}
                  aria-hidden
                >
                  &ldquo;
                </div>
                <blockquote className="grow text-[16px] leading-[1.65] text-slate-700">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-[18px]">
                  <div
                    className="font-display flex h-[38px] w-[38px] items-center justify-center rounded-full text-[14px] font-bold text-white"
                    style={{ background: a.avatarBg }}
                    aria-hidden
                  >
                    {q.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-slate-900">
                      {q.name}
                    </div>
                    <div className="text-[12px] text-slate-500">{q.role}</div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
