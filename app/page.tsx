import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <main className="relative">
      <TopBar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Footer />
      <RevealOnScroll />
    </main>
  );
}
