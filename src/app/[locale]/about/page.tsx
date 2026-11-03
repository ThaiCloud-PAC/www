import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Nav } from "@/components/Nav";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Card, SectionHeading } from "@/components/Section";
import { COMPANY } from "@/lib/company";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About.meta" });
  return { title: t("title"), description: t("description") };
}

function AboutContent() {
  const t = useTranslations("About");
  const tCta = useTranslations("FooterCTA");
  const values = t.raw("values.items") as { title: string; description: string }[];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-[26px] text-slate-900">
            {t("story.title")}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.8] text-slate-600">
            {t("story.body")}
          </p>
        </div>
      </section>

      <section className="bg-ink-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title={t("values.title")} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} title={v.title} description={v.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-[22px] text-slate-900">
            {t("company.title")}
          </h2>
          <dl className="mt-6 space-y-3 text-[15px] leading-[1.7] text-slate-600">
            <div>
              <dt className="font-semibold text-slate-900">{COMPANY.legalName}</dt>
              <dd>
                {t("company.registrationLabel")} {COMPANY.registration}
              </dd>
              <dd>{COMPANY.address}</dd>
            </div>
            <div>
              <dd>
                <a href={COMPANY.phoneHref} className="font-mono-num text-ink-800 hover:text-ink-900">
                  {COMPANY.phoneDisplay}
                </a>
                {" · "}
                <a href={`mailto:${COMPANY.email}`} className="text-ink-800 hover:text-ink-900">
                  {COMPANY.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <CtaBand title={tCta("title")} subtitle={tCta("subtitle")} />
    </>
  );
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Nav />
      <AboutContent />
      <Footer />
    </main>
  );
}
