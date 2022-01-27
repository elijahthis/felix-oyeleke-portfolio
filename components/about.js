import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../styles/about.module.scss";
import Image from "next/image";
import me from "../images/me.png";
import { Fade } from "react-reveal";

const About = () => {
  const sectionRef = useRef(null);
  const [intersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        setIntersecting(entry[0].isIntersecting);
      },
      { threshold: 0.5 }
    );
    observer.observe(sectionRef.current);
  }, []);
  // observer.observe(sectionRef);
  return (
    <section className={styles.big_section} id="about" ref={sectionRef}>
      <Fade clear distance={"50px"} delay={300} duration={1000} count={1}>
        <h3>About Me</h3>
      </Fade>
      <div>
        <Fade right delay={600} distance={"20px"} count={1} duration={1000}>
          <div>
            <Image src={me} layout="fill" objectFit="cover" alt="me" />
          </div>
        </Fade>
        <Fade left delay={1000} distance={"20px"} duration={1000} count={1}>
          <div>
            <div className={styles.about_text}>
              <p>
                Hi, I am Felix Oyeleke, a Marine Geophysicist/Hydrographic
                Surveyor at Pisces Offshore Limited. I hold a Bachelor of
                Technology degree in Marine Science and Technology. I have a
                deep knowledge of the geology and petroleum systems of the Gulf
                of Guinea.
              </p>
            </div>
            <Link href="https://www.linkedin.com/in/fsoyeleke/" passHref>
              <a target="_blank" rel="noreferrer">
                <span className={styles.btn}>
                  <div>Read more...</div>
                  <svg
                    x="0px"
                    y="0px"
                    viewBox="0 0 1000 1000"
                    enableBackground="new 0 0 1000 1000"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g transform="matrix(1 0 0 -1 0 1008)">
                        <path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z" />
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
