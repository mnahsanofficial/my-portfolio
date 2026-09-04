import About from "@/components/About";
import Availability from "@/components/Availability";
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

// Canonical origin used for Open Graph / Twitter absolute URLs.
// Change this one constant if the primary deployment moves.
const SITE_URL = "https://my-portfolio-mnahsanofficials-projects.vercel.app";

const PAGE_TITLE =
  "Nazmul Ahsan | Full Stack Engineer, QA Automation & Technical Recruiter";
const PAGE_DESCRIPTION =
  "Full Stack Engineer with 5+ years across Angular, React, Vue.js, Next.js, Python-Django and NestJS. I build features, write my own test cases with TDD and QA Automation, and have placed 30+ engineers as a technical recruiter. Based in Dhaka, open to relocation and remote roles worldwide.";
// 1200x630 landscape card — a portrait photo crops badly in LinkedIn/Slack previews.
const OG_IMAGE = `${SITE_URL}/assets/images/og-card.png`;

export default function Home() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta
          name="keywords"
          content="Nazmul Ahsan, Full Stack Engineer, QA Automation, Angular, React, Vue.js, Next.js, Python, Django, NestJS, TypeScript, TDD, Cypress, Playwright, Selenium, Technical Recruiter, Portfolio, open to relocation, remote, visa sponsorship"
        />
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Nazmul Ahsan — Portfolio" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Nazmul Ahsan — Full Stack Engineer, QA Automation and Technical Recruiter"
        />
        <meta property="profile:first_name" content="Nazmul" />
        <meta property="profile:last_name" content="Ahsan" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="Nazmul Ahsan — Full Stack Engineer, QA Automation and Technical Recruiter"
        />
      </Head>
      <main className="min-h-screen">
        <Navbar/>
        <Hero />
      <Availability/>
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