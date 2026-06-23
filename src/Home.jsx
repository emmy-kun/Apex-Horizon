import Navbar from "./ui/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Featured from "./sections/Featured";
import Stats from "./sections/Stats";
import Process from "./sections/Process";
import Agents from "./sections/Agents";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="bg-[#050505] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <Stats />
      <Process />
      <Agents />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}