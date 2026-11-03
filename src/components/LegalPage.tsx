import { useTranslations } from "next-intl";
import { Nav } from "./Nav";
import { PageHero } from "./PageHero";
import { Footer } from "./Footer";

/** Shared layout for the privacy and terms pages. */
export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const t = useTranslations(`Legal.${kind}`);
  const sections = t.raw("sections") as { title: string; body: string }[];

  return (
    <main>
      <Nav />
      <PageHero eyebrow={t("updated")} title={t("title")} />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-6">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-[20px] text-slate-900">
                {s.title}
              </h2>
              <p className="mt-3 text-[15px] leading-[1.8] text-slate-600">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
