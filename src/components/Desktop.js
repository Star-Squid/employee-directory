import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import styles from "./DesktopStyles.module.css";
import Card from "./Card";
import SmoothNavigation from "./SmoothNavigation";
import pictureJohn from "../external/john.png";
import UploadImg from "../images/upload.svg";

// Allowed extensions for input file
const allowedExtensions = ["csv"];


const Parser = ({ desktopFunctions }) => {
  //store the parsed data
  const [data, setData] = useState([]);


  // incorrect extension?
  const [error, setError] = useState("");

  // uploaded file
  const [file, setFile] = useState("");

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

  let allParsedData;

  const handleParse = () => {
    if (!file) return setError("Enter a valid file");

    const reader = new FileReader();

    // Event listener on reader when the file loads
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      // const columns = Object.keys(parsedData[0]);

      console.log("parsedData: ", parsedData);
      allParsedData = parsedData;

      setData(parsedData);
      
    
      // desktopFunctions.giveAllEmployees(data); //NO, parser doesnt finish in time
    };
    reader.readAsText(file);



  };

   
  // function err(x) {
  //   console.log(x);
  // }

  // //this is a promise, so the 3 functions that happen after file selection can run in sequence
  // const handleSequence = handleParse()
  //   .then(
  //     desktopFunctions.giveAllEmployees(data),
  //     err("Error: can't parse file")
  //   )
  //   .then(desktopFunctions.handleDisplayCards(), err("Error: can't make cards"))
  //   .catch(err("Error: can't display cards"));



  //   new Promise( (resolve, reject) => {
  //     handleParse();
  //     if (data > 0) {
  //        resolve("Can now run giveAllEmployees");
  //     }jacket
  //     else {
  //        reject(Error("Promise rejected"));
  //     }
  //  }).then(function(result) {
  //   console.log(result);
  //    // "Promise resolved successfully"
  //    desktopFunctions.giveAllEmployees(data);
  // }).then(function(result) {
  //   console.log(result);
  //    // "Promise resolved successfully"
  //    desktopFunctions.handleDisplayCards();
  // }, err => {
  //     console.log(err); // Error: "Promise rejected"
  //  });



  return (
    <div className={styles.upload}>
      <label htmlFor="csvInput" style={{ display: "block" }}>
        <h2>Upload a .csv file to start</h2>
      </label>
      <p>
        (e.g. <a href="../external/employee_directory_example.csv">this one</a>)
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
        <button
          className={styles.button}
          onClick={() => {
            handleParse();
            desktopFunctions.giveAllEmployees(data);
            // desktopFunctions.handleDisplayCards();
          }}
        >
          Synchronously do everything
        </button>
        <br />
        <button
          className={styles.button}
          onClick={() => {
            handleParse();
            desktopFunctions.giveAllEmployees(data);
            // desktopFunctions.handleDisplayCards();
          }}
        >
          Do everything
        </button>
        <br />
        <button className={styles.button} onClick={handleParse}>
          Parse
        </button>
        {/* this button needs to do 3 things: parse (handleParse()), giveAllEmployees(data), and handleDisplayCards  */}
        {/* handleParse calls giveAllEmployees from Parser NO ? OR handleParse gets a promise? OR giveAllEmployees gets called through useEffect in Parser when the data state changes */}
        {/* giveAllEmployees calls handleDisplayCards from inside Desktop */}
        <button
          className={styles.button}
          onClick={(event) => {
            desktopFunctions.giveAllEmployees(data);
          }}
        >
          Create cards and hide panel
        </button>
        <button
          className={styles.button}
          onClick={desktopFunctions.handleDisplayCards}
        >
          hide this panel
        </button>
      </div>
      <div style={{ marginTop: "3rem" }}>{error ? error : ""}</div>
    </div>
  );
};

function Desktop() {
  const [displayCards, setDisplayCards] = useState(false);
  const [allCards, setAllCards] = useState([]);

  const newHandleDisplayCards = () => {
    setDisplayCards(displayCards ? false : true);
  };

  const desktopFunctions = {
    handleDisplayCards: () => {
      setDisplayCards(displayCards ? false : true);
    },
    giveAllEmployees: (allEmployees) => {
      setAllCards(allEmployees);
      newHandleDisplayCards()
    },
  };

  // useEffect(setTimeout(desktopFunctions.handleDisplayCards(), 2000), [])

  return (
    <>
      <SmoothNavigation></SmoothNavigation>
      <main className={styles.desktop}>
        {!displayCards ? (
          // <Parser giveAllEmployees={giveAllEmployees} handleDisplayCards={handleDisplayCards} />
          <Parser desktopFunctions={desktopFunctions} />
        ) : (
          allCards.map((card) => {
            return (
              <Card
                key={card.ID}
                id={card.ID}
                name={card.FullName}
                preferredName={card.PreferredName}
                title={card.JobTitle}
                customTitle={card.CustomTitle}
                department={card.Department}
                description={card.Description}
                email={card.PrimaryEmail}
                location={card.Location}
                team={card.Team}
                subTeam={card.SubTeam}
                isManager={false}
                manager={card.Manager}
                hobby={card.Hobby}
                softwareSkills={card.SoftwareSkills}
                hardSkills={card.HardSkills}
                currentProjects={card.CurrentProjects}
                pastProjects={card.PastProjects}
                hireDate={card.HireDate}
              ></Card>
            );
          })
        )}

        <Card
          id={"666"}
          name={allCards.length > 0 ? allCards[0].ID : "nope"}
          // name={allCards.length>0 ? "there's something" : "nope"}
          preferredName={"Darling"}
          title={"Bastard"}
          department={"Clowning Inc"}
          isManager={true}
          description={"Worst person ever"}
        ></Card>

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
