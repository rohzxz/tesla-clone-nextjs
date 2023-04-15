import styles from "./Section.module.css";

const ModelX = () => {
  return (
    <div className="section">
      <div className={styles.model_x} id="modelX">
        <h1>Model X</h1>
        <div className={styles.main_btn}>
          <button className={styles.btn1}> Custom order</button>
          <button className={styles.btn2}> Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ModelX;
