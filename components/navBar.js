import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import logo from "../images/logo.svg";

const NavBar = ({ gallery }) => {
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
            <Link href="/gallery" passHref>
              <li className={`${gallery ? styles.active : ""}`}>Gallery</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
