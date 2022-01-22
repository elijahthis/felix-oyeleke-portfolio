import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { Fade } from "react-reveal";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Modal from "../components/modal";
import styles from "../styles/gallery.module.scss";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
import pic7 from "../images/pic7.jpg";
import pic8 from "../images/pic8.jpg";
import pic9 from "../images/pic9.jpg";
import pic10 from "../images/pic10.jpg";

const Gallery = () => {
  const images = [pic1, pic6, pic9, pic4, pic5, pic2, pic7, pic8, pic3, pic10];
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const subSlide = () => {
    current > 0 ? setCurrent((current - 1) % images.length) : setCurrent(9);
  };
  const addSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <>
      <Head>
        <title>Felix Oyeleke - Gallery</title>
        <link rel="icon" type="image/png" href="icon.png" />
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
      <div
        style={{
          height: `${open ? "calc(100vh - 22px)" : ""}`,
          overflow: `${open ? "hidden" : ""}`,
        }}
      >
        <Modal
          image={images[current]}
          isOpen={open}
          closeModal={(val) => {
            setOpen(val);
          }}
          slide={current}
          subSlide={subSlide}
          addSlide={addSlide}
        />

        <NavBar gallery={true} />
        <section className={styles.big_section}>
          <Fade clear distance={"50px"} delay={300} duration={1000} count={1}>
            <h3>Gallery</h3>
          </Fade>
          <div>
            {images.map((image, ind) => (
              <Fade
                bottom
                distance={"50px"}
                delay={900}
                duration={1000}
                count={1}
                key={ind}
              >
                <div>
                  <Image
                    src={image}
                    onClick={() => {
                      setCurrent(ind);
                      setOpen(true);
                    }}
                    alt="my picture"
                  />
                </div>
              </Fade>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
