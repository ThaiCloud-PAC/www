import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "./Section";

const HREFS = ["/solutions/online-sellers", "/solutions/3pl"];

export function Segments() {
  const t = useTranslations("Segments");
  const cards = t.raw("cards") as {
    tag: string;
    title: string;
    description: string;
    cta: string;
  }[];

  return (
    <section className="bg-ink-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <Link
              key={card.tag}
              href={HREFS[i]}
              className="group rounded-card border border-ink-100 bg-white p-8 transition hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-[0_12px_40px_-16px_rgba(2,40,63,0.25)]"
            >
              <span className="inline-flex items-center rounded-full bg-ink-100 px-3.5 py-1.5 text-[12px] font-semibold text-ink-900">
                {card.tag}
              </span>
              <h3 className="font-display mt-5 text-[22px] leading-[1.25] text-slate-900">
                {card.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-slate-600">
                {card.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-ink-800 transition group-hover:text-ink-900">
                {card.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
