import React, { useState, useEffect } from "react";
import Hamburger from "../images/Hamburger";
import Roof from "../images/Roof";
import styles from "./SmoothNavigation.module.css";
import UploadImg from "../images/upload.svg";

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
      document.querySelector(".sidebar");
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

      {menuOpen ? (
        <div className={styles.sidebar}>
          <div className={styles.menu}>
            <ul className={styles.menuItems}>
              <li>
                <img className={styles.icon} src={UploadImg} alt="" /> Upload
                new file
              </li>
              <hr className={styles.hr} />
              <li>
                <input
                  class={styles.searchInput}
                  type="text"
                  placeholder="filter results"
                />
              </li>
              <hr className={styles.hr} />

              <li>Display:</li>
              <li>
                <label>
                  <input type="checkbox" name="isManager" value="isManager" />{" "}
                  managers
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="isNotManager"
                    value="isNotManager"
                  />{" "}
                  non-managers
                </label>
              </li>

              <li>
                <label>
                  <input type="checkbox" name="isManager" value="isManager" />{" "}
                  managers
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="isNotManager"
                    value="isNotManager"
                  />{" "}
                  non-managers
                </label>
              </li>
              <hr className={styles.hr} />
              <li>Software:</li>
              <li>
                <label>
                  <input type="checkbox" name="isManager" value="isManager" />{" "}
                  managers
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="isNotManager"
                    value="isNotManager"
                  />{" "}
                  non-managers
                </label>
              </li>
              <hr className={styles.hr} />
              <li>Other skills:</li>
              <li>
                <label>
                  <input type="checkbox" name="isManager" value="isManager" />{" "}
                  managers
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="isNotManager"
                    value="isNotManager"
                  />{" "}
                  non-managers
                </label>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
