import React from "react";
import styles from "./NavigationStyles.module.css";

function Navigation() {
  return (
    <>
    <div class={styles.overlay}></div>
    <nav class={styles.nav}>
    <ul>
      <li>
        <a href="#menu" class={styles.menuToggle}>
          <span>Menu</span>
        </a>
        <div class={styles.menu}>
          <ul class={styles.menuItems}>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="generic.html">Generic</a>
            </li>
            <li>
              <a href="elements.html">Elements</a>
            </li>
            <li>
              <a href="generic.html">Sign Up</a>
            </li>
            <li>
              <a href="generic.html">Log In</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
  </>
  );
}

export default Navigation;