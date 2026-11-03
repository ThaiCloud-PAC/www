import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Customers.meta" });
  return { title: t("title"), description: t("description") };
}

function CustomersContent() {
  const t = useTranslations("Customers");
  const stats = t.raw("stats") as { value: string; label: string }[];
  const sections = t.raw("sections") as { title: string; body: string }[];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        tag={t("hero.tag")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-5 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-card border border-slate-100 bg-bone p-7 text-center"
              >
                <p className="font-mono-num text-[34px] font-bold leading-none text-ink-900">
                  {s.value}
                </p>
                <p className="mt-2.5 text-[13.5px] text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-[12.5px] text-slate-500">
            {t("statsNote")}
          </p>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-3xl space-y-12 px-6">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-[24px] text-slate-900">
                {s.title}
              </h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-slate-600">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title={t("cta.title")} subtitle={t("cta.subtitle")} />
    </>
  );
}

export default async function CustomersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Nav />
      <CustomersContent />
      <Footer />
    </main>
  );
}
