import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProductPreview } from "@/components/ProductPreview";
import { Proof } from "@/components/Proof";
import { Problems } from "@/components/Problems";
import { HowItWorks } from "@/components/HowItWorks";
import { Capabilities } from "@/components/Capabilities";
import { Segments } from "@/components/Segments";
import { StoryTeaser } from "@/components/StoryTeaser";
import { Integrations } from "@/components/Integrations";
import { Onboarding } from "@/components/Onboarding";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

function HomeCta() {
  const t = useTranslations("FooterCTA");
  return <CtaBand title={t("title")} subtitle={t("subtitle")} />;
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Nav />
      <Hero />
      <ProductPreview />
      <Proof />
      <Problems />
      <HowItWorks />
      <Capabilities />
      <Segments />
      <StoryTeaser />
      <Integrations />
      <Onboarding />
      <HomeCta />
      <Footer />
    </main>
  );
}
