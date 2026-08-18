import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Faq from "@/components/Faq";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Pillars />
      <Problems />
      <Solution />
      <Portfolio />
      <About />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
