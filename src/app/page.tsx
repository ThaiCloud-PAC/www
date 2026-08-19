import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Problems />
        <Solution />
        <Stats />
        <Products />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
