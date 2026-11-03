import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { CheckList } from "@/components/Section";
import { DemoForm } from "@/components/DemoForm";
import { COMPANY } from "@/lib/company";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Demo.meta" });
  return { title: t("title"), description: t("description") };
}

function DemoContent() {
  const t = useTranslations("Demo");
  const whoItems = t.raw("who.items") as string[];
  const whatItems = t.raw("what.items") as string[];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-[22px] text-slate-900">
                {t("who.title")}
              </h2>
              <div className="mt-5">
                <CheckList items={whoItems} />
              </div>
            </div>
            <div>
              <h2 className="font-display text-[22px] text-slate-900">
                {t("what.title")}
              </h2>
              <div className="mt-5">
                <CheckList items={whatItems} />
              </div>
            </div>
            <div className="rounded-card bg-ink-50 p-7">
              <h2 className="font-display text-[20px] text-slate-900">
                {t("direct.title")}
              </h2>
              <p className="mt-2 text-[14px] text-slate-600">
                {t("direct.subtitle")}
              </p>
              <div className="mt-5 space-y-3">
                <a
                  href={COMPANY.lineHref}
                  className="block text-[20px] font-bold text-ink-900 transition hover:text-ink-700"
                >
                  {t("direct.lineLabel")} {COMPANY.line}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="block text-[17px] font-semibold text-ink-900 transition hover:text-ink-700"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-card border border-slate-100 bg-white p-7 shadow-[0_4px_30px_-12px_rgba(2,40,63,0.14)] md:p-9">
            <h2 className="font-display mb-6 text-[22px] text-slate-900">
              {t("form.title")}
            </h2>
            <DemoForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Nav />
      <DemoContent />
      <Footer />
    </main>
  );
}
