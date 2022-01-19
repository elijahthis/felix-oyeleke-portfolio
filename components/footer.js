import styles from "../styles/footer.module.scss";
import Image from "next/image";
import Link from "next/link";
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
          <Link href="/" passHref>
            <Image src={logo} alt="logo" width={173} height={55} />
          </Link>
          <section>
            <div className={styles.grid_item_1}>
              <p>All rights reserved</p>
              <p>&#169; Copyright Felix Oyeleke 2022</p>
              <p className={styles.elijah}>
                site by{" "}
                <Link href="https://elijahthis-portfolio.netlify.app/" passHref>
                  <a target="_blank" rel="noreferrer">
                    Elijah
                  </a>
                </Link>
              </p>
            </div>
            <div className={styles.grid_item_2}>
              <div>
                <Link href="/gallery" passHref>
                  <a>
                    <p>
                      <span>Gallery</span>
                    </p>
                  </a>
                </Link>
                <Link href="/#resume" passHref>
                  <a>
                    <p>
                      <span>Resume</span>
                    </p>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/#contact" passHref>
                  <a style={{ display: "block" }}>
                    <p>Contact</p>
                  </a>
                </Link>
                <p style={{ fontWeight: "400" }}>fsoyeleke@gmail.com</p>
                <p style={{ fontWeight: "400" }}>fsoyeleke@mun.ca</p>
                <div className={styles.socials}>
                  <Link href="https://www.linkedin.com/in/fsoyeleke/" passHref>
                    <a target="_blank" rel="noreferrer">
                      <div>
                        <Image src={linkedin} layout="fill" alt="linkedin" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.twitter.com/fsoyeleke" passHref>
                    <a target="_blank" rel="noreferrer">
                      <div>
                        <Image src={twitter} layout="fill" alt="twitter" />
                      </div>
                    </a>
                  </Link>
                  <Link href="" passHref>
                    <a>
                      <div>
                        <Image src={github} layout="fill" alt="github" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/fsoyeleke/" passHref>
                    <a target="_blank" rel="noreferrer">
                      <div>
                        <Image src={instagram} layout="fill" alt="instagram" />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </Fade>
      <Fade clear distance={"50px"} delay={300} duration={1000} count={1}>
        <footer className={styles.mobile_footer}>
          <div>
            <Link href="/" passHref>
              <Image src={logo} alt="logo" width={173} height={55} />
            </Link>
          </div>
          <section>
            <div className={styles.grid_item_2}>
              <div>
                <Link href="/gallery" passHref>
                  <a>
                    <p>
                      <span>Gallery</span>
                    </p>
                  </a>
                </Link>
                <Link href="/#resume" passHref>
                  <a>
                    <p>
                      <span>Resume</span>
                    </p>
                  </a>
                </Link>
                <Link href="/#contact" passHref>
                  <a style={{ display: "block", marginTop: "20px" }}>
                    <p>Contact</p>
                  </a>
                </Link>
                <p style={{ fontWeight: "400" }}>fsoyeleke@gmail.com</p>
                <p style={{ fontWeight: "400" }}>fsoyeleke@mun.ca</p>
                <div className={styles.socials}>
                  <Link href="https://www.linkedin.com/in/fsoyeleke/" passHref>
                    <a target="_blank" rel="noreferrer">
                      <div>
                        <Image src={linkedin} layout="fill" alt="linkedin" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.twitter.com/fsoyeleke" passHref>
                    <a target="_blank" rel="noreferrer">
                      <div>
                        <Image src={twitter} layout="fill" alt="twitter" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://github.com/FelixOyeleke" passHref>
                    <a target="_blank" rel="noreferrer">
                      <div>
                        <Image src={github} layout="fill" alt="github" />
                      </div>
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/felixoyeleke/" passHref>
                    <a target="_blank" rel="noreferrer">
                      <div>
                        <Image src={instagram} layout="fill" alt="instagram" />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.grid_item_1}>
              <p>All rights reserved</p>
              <p>&#169; Copyright Felix Oyeleke 2022</p>
              <p className={styles.elijah}>
                site by{" "}
                <Link href="https://elijahthis-portfolio.netlify.app/" passHref>
                  <a target="_blank" rel="noreferrer">
                    Elijah
                  </a>
                </Link>
              </p>
            </div>
          </section>
        </footer>
      </Fade>
    </>
  );
};

export default Footer;
