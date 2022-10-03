import React from "react";
import logo from "../images/logo.svg";
import styles from "./HeaderStyles.module.css";


function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <img src={logo} alt="" /> Employee Directory
      </h1></header>
  );
}

export default Header;