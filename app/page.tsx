import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Calendar from "@/components/Calendar";
import Deliverables from "@/components/Deliverables";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Calendar />
        <Deliverables />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
