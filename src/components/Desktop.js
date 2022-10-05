import React, { useState } from "react";
import Papa from "papaparse";
import styles from "./DesktopStyles.module.css";
import Card from "./Card";
import SmoothNavigation from "./SmoothNavigation";
import pictureJohn from "../external/john.png";
import UploadImg from "../images/upload.svg";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

// function activateUpload( ){
//   const uploadButton = document.getElementById("csvInput");
//   // uploadButton.click
// }

const Parser = () => {
  // This state will store the parsed data
  const [data, setData] = useState([]);

  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState("");

  // It will store the file uploaded by the user
  const [file, setFile] = useState("");

  // This function will be called when
  // the file input changes
  const handleFileChange = (e) => {
    setError("");

    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a .csv file");
        return;
      }

      // If input type is correct set the state
      setFile(inputFile);
    }
  };
  const handleParse = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      const columns = Object.keys(parsedData[0]);
      setData(columns);
    };
    reader.readAsText(file);
  };

  return (
    <div className={styles.upload}>
      <label htmlFor="csvInput" style={{ display: "block" }}>
        <h2>Upload a .csv file to start</h2>
      </label>
      <p>
        (you can use{" "}
        <a href="../external/employee_directory_example.csv">this one</a> for
        testing)
      </p>
      <p>
        {/*       
                            <i id="1" onClick={function () {
 document.getElementById("2").click;
}} className={styles.test} aria-hidden="true"></i>Upload Document
                            <input id="2" style="display:none; "type="file" class="form-control col-lg-2 col-md-2 col-sm-2 "/> */}
        {/* <img className={styles.icon} src={UploadImg} alt="upload file" onClick={activateUpload}/> */}

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
          Convert to cards
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
