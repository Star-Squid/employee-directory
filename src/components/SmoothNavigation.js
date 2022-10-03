import React from "react";
import styles from "./SmoothNavigation.module.css";

// function openNav() {
//   document.querySelector(".sidebar").style.width = "250px";
//   document.querySelector(".main").style.marginLeft = "250px";
// }

// function closeNav() {
//   document.querySelector(".mySidebar").style.width = "0";
//   document.querySelector(".main").style.marginLeft= "0";
// }

export default function SmoothNavigation() {
  return (
<>
<div className={styles.head}>
<div className={styles.icon}>☰</div> 
<div>Filename.csv</div>
</div>

{/* <div className={styles.sidebar}>
  <span className={styles.closebtn} onClick={closeNav}>×</span>
  <ul className={styles.menuItems}>
      <li>File name.csv</li>
      <li>Menu item</li>
      <li>Menu item</li>
      <li>Menu item</li>
      <li>Menu item</li>
      <li>Menu item</li>
      <li>Menu item</li>
      <li>Menu item</li>
    </ul>
</div>

<div className={styles.main}>
  <button className={styles.openbtn} onClick={openNav}>☰ Filename.csv</button>  
  <h2>Collapsed Sidebar</h2>
  <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
</div> */}

  
  </>
  
  );
;}


