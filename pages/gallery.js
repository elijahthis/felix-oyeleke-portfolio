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
              >
                <div key={ind}>
                  <Image
                    src={image}
                    onClick={() => {
                      setCurrent(ind);
                      setOpen(true);
                    }}
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
