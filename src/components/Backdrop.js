import React from "react";
import styles from "./BackdropStyles.module.css";

export default function Backdrop(props) {
  return <div styleName={styles.screen}>{props.children}</div>;
}
