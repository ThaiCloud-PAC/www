import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProductPreview } from "@/components/ProductPreview";
import { LogoCloud } from "@/components/LogoCloud";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { OnePlatform } from "@/components/OnePlatform";
import { Testimonials } from "@/components/Testimonials";
import { Stories } from "@/components/Stories";
import { Security } from "@/components/Security";
import { Pricing } from "@/components/Pricing";
import { FooterCTA } from "@/components/FooterCTA";
import { Footer } from "@/components/Footer";

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
      <LogoCloud />
      <Features />
      <Stats />
      <OnePlatform />
      <Testimonials />
      <Stories />
      <Security />
      <Pricing />
      <FooterCTA />
      <Footer />
    </main>
  );
}
