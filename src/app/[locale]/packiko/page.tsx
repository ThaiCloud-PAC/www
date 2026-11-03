import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { HowItWorks } from "@/components/HowItWorks";
import { Capabilities } from "@/components/Capabilities";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Card, CheckList, SectionHeading } from "@/components/Section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Product.meta" });
  return { title: t("title"), description: t("description") };
}

function ProductContent() {
  const t = useTranslations("Product");
  const fitItems = t.raw("fit.items") as string[];
  const problems = t.raw("problems.items") as { title: string; description: string }[];
  const faqs = t.raw("faq.items") as { q: string; a: string }[];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading title={t("fit.title")} align="left" />
            <div className="mt-7">
              <CheckList items={fitItems} />
            </div>
          </div>
          <div>
            <SectionHeading title={t("problems.title")} align="left" />
            <div className="mt-7 space-y-4">
              {problems.map((p) => (
                <Card key={p.title} title={p.title} description={p.description} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Capabilities />

      <section className="bg-bone py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading title={t("faq.title")} />
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-card border border-slate-100 bg-white px-6 py-5"
              >
                <summary className="cursor-pointer list-none text-[15.5px] font-semibold text-slate-900 marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span className="text-[18px] text-ink-400 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-[14.5px] leading-[1.7] text-slate-600">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={t("cta.title")} subtitle={t("cta.subtitle")} />
    </>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Nav />
      <ProductContent />
      <Footer />
    </main>
  );
}
