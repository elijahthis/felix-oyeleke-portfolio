import styles from "../styles/education.module.scss";
import Link from "next/link";
import Image from "next/image";
import futa from "../images/futa.png";
import mun from "../images/MUN.jpg";
import { Fade } from "react-reveal";

const Education = () => {
  const eduData = [
    {
      certification:
        "Marine Science & Technology (Marine Geosciences) (B.Tech.)",
      year: "2018",
      school: "Federal University of Technology, Akure, Ondo State, Nigeria.",
      image: futa,
      link: "https://www.futa.edu.ng/",
    },
    {
      certification:
        "Ocean Mapping (Masters of Applied Ocean Technology) - (IHO, Cat. B.)",
      year: "2024 (In View)",
      school: "Memorial University of Newfoundland, Canada",
      image: mun,
      link: "https://www.mun.ca/",
    },
  ];
  return (
    <section className={styles.big_section}>
      <Fade clear distance={"50px"} delay={300} duration={1000} count={1}>
        <h3>Education</h3>
      </Fade>
      <div>
        {eduData.map((item, ind) => (
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
                  <h4>{item.school}</h4>
                  <div className={styles.img_wrapper}>
                    <Image src={item.image} alt="school logo" />
                  </div>
                  <h5>{item.certification}</h5>
                  <p>{item.year}</p>
                </div>
              </a>
            </Link>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Education;
