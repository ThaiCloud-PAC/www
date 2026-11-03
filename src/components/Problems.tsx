import { useTranslations } from "next-intl";
import { Card, SectionHeading } from "./Section";

export function Problems() {
  const t = useTranslations("Problems");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
