import { useTranslations } from "next-intl";
import { SectionHeading } from "./Section";

export function Integrations() {
  const t = useTranslations("Integrations");
  const groups = t.raw("groups") as { title: string; description: string }[];

  return (
    <section className="bg-bone py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("description")}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-card border border-slate-100 bg-white p-7 text-center"
            >
              <h3 className="text-[16px] font-semibold text-slate-900">
                {group.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-slate-600">
                {group.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
