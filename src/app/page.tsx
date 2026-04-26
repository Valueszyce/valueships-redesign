import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoWall from "@/components/LogoWall";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <LogoWall />
        <Services />
        <Testimonials />
        <Resources />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
