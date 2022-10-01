import React from "react";
import styles from "./CardStyles.module.css";
import face from "../images/default.webp";

function Card(props) {
  return (
    <div class={styles.outer}>
      <img src={props.photo} alt="" class={styles.photo} />
      <div class={styles.infoArea}></div>
      <div class={styles.description}>
        <h2 class={styles.name}>{props.name}</h2>
        <h3 class={styles.position}>{props.position}</h3>
        <hr></hr>
        <p class={styles.info}>{props.info}</p>
      </div>
    </div>
  );
}

Card.defaultProps = {
  photo: { face },
  name: "Firstname Lastname",
  position: "Valued Employee",
  description: "Absolute legend",
};

export default Card;
