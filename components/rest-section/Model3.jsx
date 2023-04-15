import styles from "./Section.module.css";

function Model3() {
  return (
    <div className="section">
      <div className={styles.model_3} id="model3">
        <h1>Model 3</h1>
        <div className={styles.main_btn}>
          <button className={styles.btn1}> Custom order</button>
          <button className={styles.btn2}> Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Model3;
