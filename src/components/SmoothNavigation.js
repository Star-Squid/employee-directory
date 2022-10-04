import React, { useState, useEffect } from "react";
import Hamburger from "../images/Hamburger";
import Roof from "../images/Roof";
import styles from "./SmoothNavigation.module.css";
import UploadImg from "../images/upload.svg";
import SortImg from "../images/sort.svg";
import Grid from "../images/grid.svg";
import Software from "../images/software.svg";
import Skills from "../images/skills.svg";
import Projects from "../images/projects.svg";
import Location from "../images/location.svg";

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
    } else {
      setMenuOpen(true);
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

              <li>
                <label for="sorter">
                  <img className={styles.icon} src={SortImg} alt="" /> Sort by:
                </label>
              </li>
              <li>
                <select id="sorter" name="sorter" form="sorter">
                  <option value="name">name</option>
                  <option value="jobtitle">job title</option>
                  <option value="location">location</option>
                  <option value="department">department</option>
                  <option value="team">team</option>                  <option value="subteam">sub-team</option>                  <option value="manager">manager</option>                  <option value="currentprojects">current projects</option>                  <option value="allprojects">all projects</option>                  <option value="hiredate">hire date</option> 
                </select>
              </li>
              <hr className={styles.hr} />

              <li>
                <img src={Grid} className={styles.icon} alt="" /> Display:
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
              <li>
                <img className={styles.icon} src={Location} alt="" /> Location:
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
              <li>
                <img src={Software} className={styles.icon} alt="" /> Software:
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
              <li>
                <img className={styles.icon} src={Skills} alt="" /> Other
                skills:
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

              <li>
                <img className={styles.icon} src={Projects} alt="" /> Projects:
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
            </ul>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
