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
import Anniversary from "../images/anniversary.svg";

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
              <li className={styles.menuHead}>
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

              <li className={styles.menuHead}>
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
                  <option value="team">team</option>
                  <option value="subteam">sub-team</option>
                  <option value="manager">manager</option>
                  <option value="currentprojects">current projects</option>
                  <option value="allprojects">all projects</option>
                  <option value="hiredate">hire date</option>
                </select>
              </li>
              <hr className={styles.hr} />

              <li className={styles.menuHead}>
                <img src={Grid} className={styles.icon} alt="" /> Display:
              </li>

              <li>
              <div className={styles.checkboxArea}>
                <label>
                  <input type="checkbox" name="isManager" value="isManager" />
                  managers
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="isNotManager"
                    value="isNotManager"
                  />
                  non-managers
                </label>
                </div>
              </li>

              <li>
                <div className={styles.checkboxArea}>
                  <label>
                    <input type="checkbox" name="location" value="location" />
                    location
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="department"
                      value="department"
                    />
                    department
                  </label>
                  <label>
                    <input type="checkbox" name="team" value="team" />
                    team
                  </label>
                  <label>
                    <input type="checkbox" name="subteam" value="subteam" />
                    sub-team
                  </label>

                  <label>
                    <input type="checkbox" name="manager" value="manager" />
                    manager
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="currentprojects"
                      value="currentprojects"
                    />
                    current projects
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="allprojects"
                      value="allprojects"
                    />
                    all projects
                  </label>
                  <label>
                    <input type="checkbox" name="hiredate" value="hiredate" />
                    hire date
                  </label>
                </div>
              </li>
              <hr className={styles.hr} />
              <li className={styles.menuHead}>
                <img className={styles.icon} src={Location} alt="" /> Location:
              </li>
              <li>
              <div className={styles.checkboxArea}>
                <label>
                  <input type="checkbox" name="" value="" />
                  from cards
                </label>
                </div>
              </li>
              <hr className={styles.hr} />
              <li className={styles.menuHead}>
                <img src={Software} className={styles.icon} alt="" /> Software:
              </li>
              <li>
              <div className={styles.checkboxArea}>
                <label>
                  <input type="checkbox" name="" value="" />
                  from cards
                </label>
                </div>
              </li>
              <hr className={styles.hr} />
              <li className={styles.menuHead}>
                <img className={styles.icon} src={Skills} alt="" /> Other
                skills:
              </li>
              <li>
              <div className={styles.checkboxArea}>
                <label>
                  <input type="checkbox" name="" value="" />
                  from cards
                </label>
                </div>
              </li>
              <hr className={styles.hr} />

              <li className={styles.menuHead}>
                <img className={styles.icon} src={Projects} alt="" /> Projects:
              </li>
              <li>
              <div className={styles.checkboxArea}>
                <label>
                  <input type="checkbox" name="" value="" />
                  from cards
                </label>
                </div>
              </li>
              <hr className={styles.hr} />

              <li className={styles.menuHead}>
                {" "}
                <label for="anniversary">
                  <img className={styles.icon} src={Anniversary} alt="" />{" "}
                  Anniversary:
                </label>
              </li>
              <li>
                <select id="anniversary" name="anniversary" form="anniversary">
                  <option value="anniversary6">within 6 months</option>
                  <option value="anniversary3">within 3 months</option>
                  <option value="anniversary1">within 1 month</option>
                  <option value="anniversarypast3">in the past 3 months</option>
                </select>
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
