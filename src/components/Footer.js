import React from "react";
import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made by <a href="https://star-squid.github.io/">Star Squid</a>. See the
      code on{" "}
      <a href="https://github.com/Star-Squid/employee-directory">Github</a>.
    </footer>
  );
}

export default Footer;
