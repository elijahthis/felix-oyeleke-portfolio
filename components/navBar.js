import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import logo from "../images/logo.svg";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const NavBar = ({ home, gallery }) => {
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Link href="/" passHref>
          <div className={styles.img_wrap}>
            <Image src={logo} alt="logo" width={173} height={55} />
          </div>
        </Link>
        <nav>
          <ul>
            <Link href="/" passHref>
              <li className={`${home ? styles.active : ""}`}>Home</li>
            </Link>
            <Link href="/" passHref>
              <li>My Work</li>
            </Link>
            <Link href="#skills" passHref>
              <li>Skillset</li>
            </Link>
            <Link href="/" passHref>
              <li>Blog</li>
            </Link>
            <Link href="/gallery" passHref>
              <li className={`${gallery ? styles.active : ""}`}>Gallery</li>
            </Link>
          </ul>
        </nav>
      </header>
      <header className={styles.mobile_header}>
        <Link href="/" passHref>
          <div className={styles.img_wrap}>
            <Image src={logo} alt="logo" width={173} height={55} />
          </div>
        </Link>
        <div className="mobile-nav">
          <FiMenu
            size={25}
            onClick={() => {
              setSideOpen(true);
            }}
            style={{ color: "#364f6b" }}
          />
        </div>
        {/* <div> */}
        <nav className={`${sideOpen ? styles.visible : styles.invisible}`}>
          <MdClose
            size={35}
            onClick={() => {
              setSideOpen(false);
            }}
            style={{
              position: "absolute",
              right: "8vw",
              color: "#364f6b",
            }}
          />
          <ul>
            <Link href="/" passHref>
              <li
                className={`${home ? styles.active : ""}`}
                onClick={() => {
                  setSideOpen(false);
                }}
              >
                Home
              </li>
            </Link>
            <Link href="/" passHref>
              <li
                onClick={() => {
                  setSideOpen(false);
                }}
              >
                My Work
              </li>
            </Link>
            <Link href="#skills" passHref>
              <li
                onClick={() => {
                  setSideOpen(false);
                }}
              >
                Skillset
              </li>
            </Link>
            <Link href="/" passHref>
              <li
                onClick={() => {
                  setSideOpen(false);
                }}
              >
                Blog
              </li>
            </Link>
            <Link href="/gallery" passHref>
              <li
                onClick={() => {
                  setSideOpen(false);
                }}
                className={`${gallery ? styles.active : ""}`}
              >
                Gallery
              </li>
            </Link>
          </ul>
        </nav>
        {/* </div> */}
      </header>
    </>
  );
};

export default NavBar;
