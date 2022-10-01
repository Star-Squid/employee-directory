import React from "react";
import styles from "./DesktopStyles.module.css";
import Card from "./Card";
import Navigation from "./Navigation";


function Desktop() {
  return (
    <>
    <Navigation></Navigation>
    <main class={styles.desktop}>
    <Card name={"Booboo the Clown"} position={"Bastard"} info={"Worst person ever"}></Card>
    <Card name={"Name Surname"} position={"Work Position"} info={"He enjoys riding horses and cowboys"} photo={url("faces/john.webp")}></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    </main>
    
    </>
  );
}

export default Desktop;
