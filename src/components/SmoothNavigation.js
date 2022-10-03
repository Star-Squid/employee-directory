import React, { useState, useEffect } from "react";
import Hamburger from "../images/Hamburger";
import Roof from "../images/Roof";
import styles from "./SmoothNavigation.module.css";

function displayRoof(isMenuOpen) {
  if (!isMenuOpen) {
    return <Hamburger color="white" />;
  } else {
    return <Roof color="white" />;
  }
}

export default function SmoothNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function pulloutMenu() {
    if (menuOpen) {
      setMenuOpen(false);
      document.querySelector(".sidebar")
      document.querySelector(".sidebar").classList.add("styles.undisplay");
    } else {
      setMenuOpen(true);
      document.querySelector(".sidebar").classList.remove("styles.undisplay");
    }
  }

  // useEffect(() => {
  //   document.title = `the menu is ${menuOpen} `;
  // });


  return (
    <>
      <div className={styles.head}>

        <div className={styles.icon} tabIndex={0} onClick={pulloutMenu}>
          {displayRoof(menuOpen)}
        </div>
        <div>Filename.csv</div>
      </div>

      {menuOpen ? (<div className={styles.sidebar}>
        <div className={styles.menu}>
          <ul className={styles.menuItems}>
            <li>Menu item</li>
            <li>Menu item</li>
            <li>Menu item</li>
            <li>Menu item</li>
            <li>Menu item</li>
            <li>Menu item</li>
            <li>Menu item</li>
          </ul>
        </div>
      </div>) : (<div></div>)}

    </>
  );
}
