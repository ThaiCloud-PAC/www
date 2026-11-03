import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Nav } from "./Nav";
import { PageHero } from "./PageHero";
import { CtaBand } from "./CtaBand";
import { Footer } from "./Footer";
import { Card, SectionHeading } from "./Section";

/** Shared layout for the two solution pages: situation → pains → new way → (proof) → CTA. */
export function SolutionPage({
  namespace,
}: {
  namespace: "SolutionsSellers" | "Solutions3pl";
}) {
  const t = useTranslations(namespace);
  const pains = t.raw("pains.items") as { title: string; description: string }[];
  const newWay = t.raw("newWay.items") as { title: string; description: string }[];
  const hasProof = t.has("proof.title");

  return (
    <main>
      <Nav />
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading title={t("situation.title")} />
          <p className="mx-auto mt-5 max-w-[680px] text-[16px] leading-[1.75] text-slate-600">
            {t("situation.description")}
          </p>
        </div>
      </section>

      <section className="bg-ink-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title={t("pains.title")} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pains.map((p) => (
              <Card key={p.title} title={p.title} description={p.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title={t("newWay.title")} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {newWay.map((p, i) => (
              <Card key={p.title} index={i} title={p.title} description={p.description} />
            ))}
          </div>
        </div>
      </section>

      {hasProof && (
        <section className="bg-bone py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <SectionHeading title={t("proof.title")} subtitle={t("proof.description")} />
            <Link
              href="/customers"
              className="mt-7 inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink-800 transition hover:text-ink-900"
            >
              {t("proof.cta")} →
            </Link>
          </div>
        </section>
      )}

      <CtaBand title={t("cta.title")} subtitle={t("cta.subtitle")} />
      <Footer />
    </main>
  );
}
