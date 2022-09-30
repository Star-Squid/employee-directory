import React from "react";
import styles from "./DesktopStyles.module.css";
import Card from "./Card";
import Navigation from "./Navigation";


function Desktop() {
  return (
    <>
    <Navigation></Navigation>
    <main class={styles.desktop}>
      <Card></Card>
    </main>
    
    </>
  );
}

export default Desktop;
