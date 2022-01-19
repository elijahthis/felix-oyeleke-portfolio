import Image from "next/image";
import styles from "../styles/navbar.module.scss";
import logo from "../images/logo.svg";

const NavBar = ({ gallery }) => {
  return (
    <>
      <header className={styles.header}>
        <a href="/">
          <div className={styles.img_wrap}>
            <Image src={logo} alt="logo" width={173} height={55} />
          </div>
        </a>
        <nav>
          <ul>
            <a href="/gallery">
              <li className={`${gallery ? styles.active : ""}`}>Gallery</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
