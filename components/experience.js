import styles from "../styles/education.module.scss";
import Link from "next/link";
import Image from "next/image";
import pisces from "../images/pisces.webp";
import acoplans from "../images/acoplans.jpg";
import brone from "../images/brone.png";
import federal from "../images/federal.png";
import { Fade } from "react-reveal";

const Experience = () => {
  const expData = [
    {
      position: "Marine Geophysicist/Data Processor/Surveyor",
      company: "Pisces Offshore Nigeria Limited",
      period: "Jan. 2021 - Present",
      image: pisces,
      link: "https://www.piscesoffshore.com/",
    },
    {
      position:
        "Consulting Marine Geophysicist/Hydrographic Surveyor (Freelance)",
      company: "Acoplans Surveys Limited",
      period: "Nov. 2020 - Present",
      image: acoplans,
      link: "https://www.linkedin.com/company/acoplans-surveys-limited/?originalSubdomain=ng",
    },
    {
      position: "QC Geophysicist/Projects Officer",
      company: "Brone Positioning & Offshore Survey Limited, Nigeria.",
      period: "Jun. 2017 - Jan. 2021",
      image: brone,
      link: "http://www.bronegroup.com/",
    },
    {
      position: "Undergraduate Intern (Field Assistant & Student Trainee)",
      company: "Department of Petroleum Resources, Lagos State, Nigeria",
      period: "Jul. - Dec. 2017",
      image: federal,
      link: "https://www.nuprc.gov.ng",
    },
  ];
  return (
    <section className={styles.big_section} id="experience">
      <Fade clear distance={"50px"} delay={300} duration={1000} count={1}>
        <h3>Experience</h3>
      </Fade>
      <div>
        {expData.map((item, ind) => (
          <Fade
            bottom
            delay={600 + (ind - 0) * 400}
            distance={"20px"}
            count={1}
            duration={1000}
            key={ind}
          >
            <Link href={item.link} passHref>
              <a target="_blank" rel="noreferrer">
                <div className={styles.item}>
                  <h4>{item.company}</h4>
                  <div className={styles.img_wrapper}>
                    <Image src={item.image} alt="company logo" />
                  </div>
                  <h5>{item.position}</h5>
                  <p>{item.period}</p>
                </div>
              </a>
            </Link>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Experience;
