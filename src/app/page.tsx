import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Bio from "@/components/sections/Bio";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Bio />
        <Services />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
