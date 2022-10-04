import React, {useState} from "react";
import Papa from "papaparse";
import styles from "./DesktopStyles.module.css";
import Card from "./Card";
// import Navigation from "./Navigation";
import SmoothNavigation from "./SmoothNavigation";
import pictureJohn from "../external/john.png";
import { FileDrop } from "react-file-drop";


// Allowed extensions for input file
const allowedExtensions = ["csv"];
 
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
                setError("Please input a csv file");
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
        <div>
            <label htmlFor="csvInput" style={{ display: "block" }}>
                Enter CSV File
            </label>
            <input
                onChange={handleFileChange}
                id="csvInput"
                name="file"
                type="File"
            />
            <div>
                <button onClick={handleParse}>Parse</button>
            </div>
            <div style={{ marginTop: "3rem" }}>
                {error ? error : data.map((col,
                  idx) => <div key={idx}>{col}</div>)}
            </div>
        </div>
    );
};




function dragAndDropFile(files) {
  for (var i in files) {
    var fileType = files[i].type;

    //  var fileSize=files[i].size

    if (fileType === "text/CSV") {
      console.log("CSV file");
    } else {
      console.log("provide valid file type");
    }
  }
}



function ImportHere() {
  const [file, setFile] = useState();
  const fileReader = new FileReader();
  const handleOnChange = (e) => {
      setFile(e.target.files[0]);
  };
  const handleOnSubmit = (e) => {         e.preventDefault();         if (file) {
          fileReader.onload = function (event) {
              const csvOutput = event.target.result;
          };
          fileReader.readAsText(file);
      }
  };
  return (
      <div style={{ textAlign: "center" }}>
          <h1>REACTJS CSV IMPORT EXAMPLE </h1>
          <form>
              <input
                  type={"file"}
                  id={"csvFileInput"}
                  accept={".csv"}
                  onChange={handleOnChange}
              />
              <button
                  onClick={(e) => {
                      handleOnSubmit(e);
                  }}
              >
                  IMPORT CSV
              </button>
          </form>
      </div>
  );
}



function Desktop() {
  return (
    <>
      <SmoothNavigation></SmoothNavigation>
      <main className={styles.desktop}>
        <div className={styles.upload}>
          Upload a .csv to start 
          <Parser/>
          
        </div>

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
