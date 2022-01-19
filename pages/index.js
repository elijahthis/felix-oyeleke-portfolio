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
        <meta property="og:title" content="Felix Oyeleke - Portfolio" />
        <meta property="og:url" content="https://felix-oyeleke.netlify.app/" />
        <meta
          property="og:image"
          content="https://felix-oyeleke.netlify.app/icon.png"
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:description"
          content="My name is Felix Oyeleke. I am a Hydrographic Surveyor. I can also be a Marine Geophysicist, Data Scientist and Computer Vision Enthusiast as the situation demands. Welcome to my portfolio website. Enjoy..."
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@fsoyeleke" />
        <meta name="twitter:creator" content="@elijahthis" />
        <meta name="description" content="Felix Oyeleke's portfolio website" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/icon.png" />
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
