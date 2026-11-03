import { useTranslations } from "next-intl";
import { Card, SectionHeading } from "./Section";

export function Onboarding() {
  const t = useTranslations("Onboarding");
  const steps = t.raw("steps") as { title: string; description: string }[];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Card
              key={step.title}
              index={i}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
