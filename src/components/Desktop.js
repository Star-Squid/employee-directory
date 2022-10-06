import React, { useState } from "react";
import Papa from "papaparse";
import styles from "./DesktopStyles.module.css";
import Card from "./Card";
import SmoothNavigation from "./SmoothNavigation";
import pictureJohn from "../external/john.png";
import UploadImg from "../images/upload.svg";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

const Parser = () => {
  //store the parsed data
  const [data, setData] = useState([]);

  // incorrect extension?
  const [error, setError] = useState("");

  // uploaded file
  const [file, setFile] = useState("");

  const [cards, setCards] = useState([]);

  const handleFileChange = (e) => {
    setError("");

    // when a file is entered
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      // is the file extension allowed?
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please select a .csv file");
        return;
      }

      // set state if correct file type
      setFile(inputFile);
    }
  };

  const handleParse = () => {
    if (!file) return setError("Enter a valid file");

    const reader = new FileReader();

    // Event listener on reader when the file loads
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      // const columns = Object.keys(parsedData[0]);
      // const row = Object.values(parsedData[1]);

      for (let i = 0; i< parsedData.length; i++){
        console.log(parsedData[i])

        setCards([...cards, parsedData[i]])
        
        // setCards([
        //   ...items,
        //   {
        //     id: items.length,
        //     name: itemName
        //   }
        // ]);

        // <Card/>
      }
      console.log("cards :", cards)
      // const log = setData(row);
      
      // for (let i = 0; i< data.length; i++){
      //   console.log(data[i])
      // }
      

      // setData(columns);
    };
    reader.readAsText(file);
  };

  return (
    <div className={styles.upload}>
      <label htmlFor="csvInput" style={{ display: "block" }}>
        <h2>Upload a .csv file to start</h2>
      </label>
      <p>
        (e.g.{" "}
        <a href="../external/employee_directory_example.csv">this one</a>)
      </p>
      <p>
        <input
          onChange={handleFileChange}
          id="csvInput"
          name="file"
          type="File"
          className={styles.inputFile}
        />
      </p>
      <div>
        <button className={styles.button} onClick={handleParse}>
          Create cards
        </button>
      </div>
      <div style={{ marginTop: "3rem" }}>
        {error ? error : data.map((col, idx) => <div key={idx}>{col}</div>)}
      </div>
    </div>
  );
};

function Desktop() {
  return (
    <>
      <SmoothNavigation></SmoothNavigation>
      <main className={styles.desktop}>
        <Parser />

        <Card
        id={"666"}
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
