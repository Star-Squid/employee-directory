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
          preferredName={"Darling"}
          title={"Bastard"}
          department={"Clowning Inc"}
          isManager={true}

          description={"Worst person ever"}
        ></Card>
        <Card
          name={"John Hamster"}
          title={"Work Pet"}
          description={"He enjoys riding horses and cowboys"}
          photo={pictureJohn}
          isManager={true}
          email={"hamster@company.co.uk"}
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
