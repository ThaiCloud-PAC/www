import { useTranslations } from "next-intl";
import { SectionHeading } from "./Section";

export function HowItWorks() {
  const t = useTranslations("How");
  const steps = t.raw("steps") as { title: string; description: string }[];

  return (
    <section className="bg-ink-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="h-full rounded-card border border-ink-100 bg-white p-6">
                <span className="font-mono-num inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-[14px] font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-[16px] font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-slate-600">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <span
                  className="absolute -right-[14px] top-1/2 hidden -translate-y-1/2 text-[18px] text-ink-300 md:block"
                  aria-hidden
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
