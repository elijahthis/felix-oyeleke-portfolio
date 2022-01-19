import NavBar from "./navBar";
import Link from "next/link";
import styles from "../styles/hero.module.scss";
import RubberBand from "react-reveal/RubberBand";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <section className={styles.big_section}>
      <NavBar gallery={false} />

      <div className={styles.big_center}>
        <RubberBand delay={500} duration={1500} wait={3000} count={2}>
          <h1>Hello, I'm Felix</h1>
        </RubberBand>
        <Fade bottom delay={1400} distance={"20px"} count={1} duration={1000}>
          <h6>Hydrographic Surveyor</h6>
          <Link href="#about" passHref>
            <a className={styles.btn} style={{ display: "block" }}>
              <span>Get Started</span>
            </a>
          </Link>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
