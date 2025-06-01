import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <Hero />
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Education/>
      <Blog/>
      <Contact/>
      <Footer/>
    </main>
  );
}