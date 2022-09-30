import React from "react";
import logo from "../images/logo.svg";
import styles from "./HeaderStyles.module.css";


function Header() {
  return (
    <header class={styles.header}>
      <h1 class={styles.title}>
        <img src={logo} alt="" /> Employee Directory
      </h1></header>
  );
}

export default Header;