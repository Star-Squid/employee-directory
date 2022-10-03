import React from "react";
import styles from "./DesktopStyles.module.css";
import Card from "./Card";
// import Navigation from "./Navigation";
import SmoothNavigation from "./SmoothNavigation";
import pictureJohn from "../external/john.png";

function Desktop() {
  return (
    <>
      <SmoothNavigation></SmoothNavigation>
      <main className={styles.desktop}>
        <Card
          name={"Booboo the Clown"}
          position={"Bastard"}
          info={"Worst person ever"}
        ></Card>
        <Card
          name={"John Hamster"}
          position={"Work Pet"}
          info={"He enjoys riding horses and cowboys"}
          photo={pictureJohn}
          isManager={true}
        ></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </main>
    </>
  );
}

export default Desktop;
