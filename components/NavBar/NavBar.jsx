import Image from "next/image";
import logo from "../../assets/tesla.svg";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [bgBlur, setBgBlur] = useState(false);

  //   menu bar---------------------close --open
  const handleShow = () => {
    setShow(!show);
    setBgBlur(!bgBlur);
  };
  const handleClose = () => {
    setShow(!show);
    setBgBlur(!bgBlur);
  };
  const router = useRouter();
  useEffect(() => {
    setShow(false);
    setBgBlur(false);
  }, [router]);
  // menu bar--------------------close --open
  return (
    <div className="container">
      <nav className={styles.nav_bar}>
        <div>
          <Link href={"#modelY"}>
            <Image src={logo} alt="logo-svg" height="30" width="120" />
          </Link>
        </div>
        <ol className={styles.nav_menu}>
          <Link className={styles.list} href={"#models"}>
            <li>Model S</li>
          </Link>
          <Link className={styles.list} href={"#model3"}>
            <li>Model 3</li>
          </Link>
          <Link className={styles.list} href={"#modelX"}>
            <li>Model X</li>
          </Link>
          <Link className={styles.list} href={"#modelY"}>
            <li>Model Y</li>
          </Link>
          <Link className={styles.list} href={"#solorRoof"}>
            <li>Solar Roof</li>
          </Link>
          <Link className={styles.list} href={"#Changer"}>
            <li>Changer</li>
          </Link>
        </ol>
        <ol className={styles.nav_btn}>
          <li className={styles.nav_support}>Support</li>
          <li className={styles.nav_support}>Account</li>
          <li className={styles.btn_menu_bar} onClick={handleShow}>
            Menu
          </li>
        </ol>

        {bgBlur && <div className={styles.backdrop}></div>}

        {show && <SideBar handleClose={handleClose} />}
      </nav>
    </div>
  );
};

export default NavBar;
