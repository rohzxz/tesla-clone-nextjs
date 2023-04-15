import React from "react";
import styles from "./Section.module.css";
const ModelS = () => {
  return (
    <div className="section">
      <div id="models" className={styles.model_s}>
        <h1>Model S</h1>
        <div className={styles.main_btn}>
          <button className={styles.btn1}> Custom order</button>
          <button className={styles.btn2}> Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ModelS;
