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
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nazmul Ahsan - Full Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Nazmul Ahsan, a skilled Full Stack Developer specializing in Next.js, Angular, Python-Django, and more. Explore projects and experience." />
        <meta name="keywords" content="Nazmul Ahsan, Full Stack Developer, Portfolio, Next.js, Angular, Python, Django, Web Developer, Software Engineer" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Nazmul Ahsan - Full Stack Developer Portfolio" />
        <meta property="og:description" content="Portfolio of Nazmul Ahsan, a skilled Full Stack Developer specializing in Next.js, Angular, Python-Django, and more. Explore projects and experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mnahsanofficial.github.io/portfolio/" />
        <meta property="og:image" content="https://mnahsanofficial.github.io/portfolio/assets/images/ahsan.jpg" />
        <meta property="og:image:alt" content="Nazmul Ahsan Portfolio" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nazmul Ahsan - Full Stack Developer Portfolio" />
        <meta name="twitter:description" content="Portfolio of Nazmul Ahsan, a skilled Full Stack Developer specializing in Next.js, Angular, Python-Django, and more. Explore projects and experience." />
        <meta name="twitter:image" content="https://mnahsanofficial.github.io/portfolio/assets/images/ahsan.jpg" />
      </Head>
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
    </>
  );
}