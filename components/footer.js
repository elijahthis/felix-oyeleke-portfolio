import styles from "../styles/footer.module.scss";
import Image from "next/image";
import logo from "../images/logo.svg";
import twitter from "../images/twitter-icon.png";
import instagram from "../images/instagram-icon.png";
import github from "../images/github-icon.png";
import linkedin from "../images/linkedin-icon.png";
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <>
      <Fade clear distance={"50px"} delay={300} duration={1000} count={1}>
        <footer className={styles.big_footer}>
          <Image src={logo} alt="logo" width={173} height={55} />
          <section>
            <div className={styles.grid_item_1}>
              <p>All rights reserved</p>
              <p>&#169; Copyright Felix Oyeleke 2022</p>
              <p className={styles.elijah}>
                site by{" "}
                <a
                  href="https://elijahthis-portfolio.netlify.app/"
                  target="_blank"
                >
                  Elijah
                </a>
              </p>
            </div>
            <div className={styles.grid_item_2}>
              <div>
                <a href="/gallery">
                  <p>
                    <span>Gallery</span>
                  </p>
                </a>
                <a href="/#resume">
                  <p>
                    <span>Resume</span>
                  </p>
                </a>
              </div>
              <div>
                <a href="/#contact" style={{ display: "block" }}>
                  <p>Contact</p>
                </a>
                <p style={{ fontWeight: "400" }}>fsoyeleke@gmail.com</p>
                <p style={{ fontWeight: "400" }}>fsoyeleke@mun.ca</p>
                <div className={styles.socials}>
                  <a
                    href="https://www.linkedin.com/in/fsoyeleke/"
                    target="_blank"
                  >
                    <div>
                      <Image src={linkedin} layout="fill" alt="linkedin" />
                    </div>
                  </a>
                  <a href="https://www.twitter.com/fsoyeleke" target="_blank">
                    <div>
                      <Image src={twitter} layout="fill" alt="twitter" />
                    </div>
                  </a>
                  <a href="">
                    <div>
                      <Image src={github} layout="fill" alt="github" />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/fsoyeleke/"
                    target="_blank"
                  >
                    <div>
                      <Image src={instagram} layout="fill" alt="instagram" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </Fade>
      <Fade clear distance={"50px"} delay={300} duration={1000} count={1}>
        <footer className={styles.mobile_footer}>
          <div>
            <Image src={logo} alt="logo" width={173} height={55} />
          </div>
          <section>
            <div className={styles.grid_item_2}>
              <div>
                <a href="/gallery">
                  <p>
                    <span>Gallery</span>
                  </p>
                </a>
                <a href="/#resume">
                  <p>
                    <span>Resume</span>
                  </p>
                </a>
                <a
                  href="/#contact"
                  style={{ display: "block", marginTop: "20px" }}
                >
                  <p>
                    <span>Contact</span>
                  </p>
                </a>
                <p style={{ fontWeight: "400" }}>fsoyeleke@gmail.com</p>
                <p style={{ fontWeight: "400" }}>fsoyeleke@mun.ca</p>
                <div className={styles.socials}>
                  <a
                    href="https://www.linkedin.com/in/fsoyeleke/"
                    target="_blank"
                  >
                    <div>
                      <Image src={linkedin} layout="fill" alt="linkedin" />
                    </div>
                  </a>
                  <a href="https://www.twitter.com/fsoyeleke" target="_blank">
                    <div>
                      <Image src={twitter} layout="fill" alt="twitter" />
                    </div>
                  </a>
                  <a href="">
                    <div>
                      <Image src={github} layout="fill" alt="github" />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/fsoyeleke/"
                    target="_blank"
                  >
                    <div>
                      <Image src={instagram} layout="fill" alt="instagram" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.grid_item_1}>
              <p>All rights reserved</p>
              <p>&#169; Copyright Felix Oyeleke 2022</p>
              <p className={styles.elijah}>
                site by{" "}
                <a
                  href="https://elijahthis-portfolio.netlify.app/"
                  target="_blank"
                >
                  Elijah
                </a>
              </p>
            </div>
          </section>
        </footer>
      </Fade>
    </>
  );
};

export default Footer;
