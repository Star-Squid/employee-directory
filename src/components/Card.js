import React from "react";
import styles from "./CardStyles.module.css";

function Card() {
  return (
    <div class={styles.outer}>
        <img src="../images/default.webp" alt="" class={styles.photo}/>
        <div class={styles.description}>
            <h2>Name Surname</h2>
            <h3>Job Position</h3>
            <p>
                He loves riding horses and sailors into the sunset.
            </p>
        </div>
    </div>
  );
}

export default Card;
