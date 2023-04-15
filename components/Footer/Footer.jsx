import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className="section">
      <div className={styles.footer} id="Changer">
        <div>
          <h1>Accessories</h1>
        </div>
        <div className={styles.shop_btn}>
          <button>Shop Now</button>
        </div>
      </div>
      <div className={styles.footer_items}>
        <ul className={styles.footer_menu_item}>
          <li>Tesla ©{new Date().getFullYear()}</li>
          <li>Privacy & Legal</li>
          <li>Vehicle Recalls</li>
          <li>Contact</li>
          <li>Careers</li>
          <li>News</li>
          <li>Engage</li>
          <li>Locations</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
