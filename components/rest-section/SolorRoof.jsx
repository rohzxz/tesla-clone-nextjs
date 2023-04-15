import styles from "./Section.module.css";

const SolorRoof = () => {
  return (
    <div className="section">
      <div className="section">
        <div className={styles.solar_roof} id="solorRoof">
          <div>
            <h1>Solar Roof</h1>
            <p>Product Clean Energy From Your Roof</p>
          </div>
          <div className={styles.main_btn}>
            <button className={styles.btn1}> Custom order</button>
            <button className={styles.btn2}> Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolorRoof;
