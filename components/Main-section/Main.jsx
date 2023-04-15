import styles from "./Main.module.css";

const Main = () => {
  return (
    <section className="section">
      <div className={styles.main_section} id="modelY">
        <div className={styles.model_y}>
          <h1>Model Y</h1>
        </div>
        <div className={styles.main_btn}>
          <button className={styles.btn1}> Custom order</button>
          <button className={styles.btn2}> Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Main;
