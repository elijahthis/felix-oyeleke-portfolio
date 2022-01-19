import styles from "../styles/resume.module.scss";
import Image from "next/image";
import Link from "next/link";
import ResumeIcon from "../images/resume-icon.svg";
import { Fade } from "react-reveal";

const Resume = () => {
  return (
    <section className={styles.big_section} id="resume">
      <Fade clear distance={"50px"} delay={300} duration={1000} count={1}>
        <h3>Resume</h3>
      </Fade>
      <Fade bottom delay={600} distance={"20px"} count={1} duration={1000}>
        <div className={styles.grid_wrap}>
          <div>
            <div className={styles.shaft1}></div>
            <Link href="docs/Felix Oyeleke Resume.pdf">
              <a target="_blank" rel="noreferrer">
                <Image src={ResumeIcon} width={100} alt="resume" />
              </a>
            </Link>
            <div className={styles.arrow_rest}>
              <div></div>
              <div></div>
            </div>
            <h6>ACADEMIC CV</h6>
          </div>
          <div>
            <div className={styles.shaft1}></div>
            <Link href="docs/Felix Oyeleke Resume.pdf">
              <a target="_blank" rel="noreferrer">
                <Image src={ResumeIcon} width={100} alt="resume" />
              </a>
            </Link>
            <div className={styles.arrow_rest}>
              <div></div>
              <div></div>
            </div>
            <h6>PROFESSIONAL CV</h6>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Resume;
