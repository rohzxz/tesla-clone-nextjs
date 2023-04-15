import styles from "./NavBar.module.css";
import Link from "next/link";

const SideBar = ({ handleClose }) => {
  return (
    <aside className={styles.side_bar_menu}>
      <button onClick={handleClose}>✘</button>
      <Link className={styles.lists} href={"#models"}>
        <li>Model S</li>
      </Link>
      <Link className={styles.lists} href={"#model3"}>
        <li>Model 3</li>
      </Link>
      <Link className={styles.lists} href={"#modelX"}>
        <li>Model X</li>
      </Link>
      <Link className={styles.lists} href={"#modelY"}>
        <li>Model Y</li>
      </Link>
      <Link className={styles.lists} href={"#solorRoof"}>
        <li>Solar Roof</li>
      </Link>
      <Link className={styles.lists} href={"#Changer"}>
        <li>Changer</li>
      </Link>
    </aside>
  );
};
export default SideBar;
