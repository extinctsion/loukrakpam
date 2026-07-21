import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Partner from "@/components/Partner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FixedContactBar from "@/components/FixedContactBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Partner />
      <Contact />
      <Footer />
      <FixedContactBar />
    </main>
  );
}
