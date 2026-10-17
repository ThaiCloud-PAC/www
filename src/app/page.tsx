import Header from "@/components/Header";
import Story from "@/components/story/Story";
import Ticker from "@/components/sections/Ticker";
import Platform from "@/components/sections/Platform";
import Products from "@/components/sections/Products";
import Faq from "@/components/sections/Faq";
import Closing from "@/components/sections/Closing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

/**
 * Hero → Speed → Intelligence → Network (the 3D story), then how the
 * platform connects, products, FAQ, and the closing call to action.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Story />
        <Ticker />
        <Platform />
        <Products />
        <Faq />
        <Closing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
