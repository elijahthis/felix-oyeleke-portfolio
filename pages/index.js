import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero";
import About from "../components/about";
import Education from "../components/education";
import Experience from "../components/experience";
import Resume from "../components/resume";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Felix Oyeleke - Portfolio</title>
      </Head>
      <div id="container">
        <Hero />
        <About />
        <Resume />
        <Education />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
