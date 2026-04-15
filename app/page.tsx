import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Deliverables from "@/components/Deliverables";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import SplitIntro from "@/components/SplitIntro";

export default function Home() {
  return (
    <>
      <SplitIntro />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Deliverables />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
