import React, { useState } from "react";
import Papa from "papaparse";
import styles from "./DesktopStyles.module.css";
import Card from "./Card";
import SmoothNavigation from "./SmoothNavigation";
import pictureJohn from "../external/john.png";
import UploadImg from "../images/upload.svg";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

const Parser = ({giveAllEmployees}) => {
  //store the parsed data
  const [data, setData] = useState([]);

  // incorrect extension?
  const [error, setError] = useState("");

  // uploaded file
  const [file, setFile] = useState("");

  const [allEmployees, setAllEmployees] = useState([]);

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
      const columns = Object.keys(parsedData[0]);
      // const row = Object.values(parsedData[1]);

      console.log("parsedData: ", parsedData )
      allParsedData = parsedData;
      console.log(parsedData)
      setAllEmployees(parsedData)
      console.log(allEmployees)
        //THIS IS A JOKE, NOT SUPPOSED TO WORK ?????
        //HOW DOES IT KNOW TO USE parsedData[i] ????
        
        
        //setAllEmployees( ["poop", "bitch"])


        // setCards([
        //   ...items,
        //   {
        //     id: items.length,
        //     name: itemName
        //   }
        // ]);

        // <Card/>
      // }

      
      // const log = setData(row);
      
      // for (let i = 0; i< data.length; i++){
      //   console.log(data[i])
      // }
      

      setData(parsedData);
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
        {/* <button className={styles.button} onClick={() => { handleParse(); giveCards(cards)}}>
          Create cards
        </button> */}
        <button className={styles.button} onClick={handleParse}>
          Parse
        </button>
        <button className={styles.button} onClick={event => {giveAllEmployees(data)}}>
          Create cards
        </button>
      </div>
      <div style={{ marginTop: "3rem" }}>
        {/* {error ? error : data.map((col, idx) => <div key={idx}>{col}</div>)} */}
        {/* {error ? error : data.map(elem => <div key={elem.ID}>{elem.ID}</div>)} */}
        {error ? error : ""}
      </div>
    </div>
  );
};

function Desktop() {
  const [allCards, setAllCards] = useState([]);
  const giveAllEmployees = (allEmployees) => {
    setAllCards(allEmployees);
  };

//   const prepareCards = (() => {
//     if (allCards.length>0) {
      
//       return  (
//       for (let i = 0; i < allCards.length; i++){
//       <Card
//       id={allCards[i].ID}
//         name={allCards[i].FullName}
//         preferredName={allCards[i].PreferredName}
//         title={allCards[i].JobTitle}
//         customTitle={allCards[i].CustomTitle}
//         department={allCards[i].Department}
//         description={allCards[i].Description}
//       email={allCards[i].PrimaryEmail}
//       location={allCards[i].Location}
//       team={allCards[i].Team}
//       subTeam={allCards[i].SubTeam}
//       isManager= {false}
//       manager={allCards[i].Manager}
//       hobby={allCards[i].Hobby}
//       softwareSkills={allCards[i].SoftwareSkills}
//       hardSkills={allCards[i].HardSkills}
//       currentProjects={allCards[i].CurrentProjects}
//       pastProjects={allCards[i].PastProjects}
//       hireDate={allCards[i].HireDate}
//       ></Card>
//       }
//       )
//     }
// })();

  return (
    <>
      <SmoothNavigation></SmoothNavigation>
      <main className={styles.desktop}>
        <Parser giveAllEmployees={giveAllEmployees} />
        {/* {console.log("Desktop's allCards: ", allCards)} */}

        {allCards.map((card)=>{
         return (<Card key={card.ID}
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
      isManager= {false}
      manager={card.Manager}
      hobby={card.Hobby}
      softwareSkills={card.SoftwareSkills}
      hardSkills={card.HardSkills}
      currentProjects={card.CurrentProjects}
      pastProjects={card.PastProjects}
      hireDate={card.HireDate}
      ></Card>)
     })}

    {/* for (let i = 0; i < allCards.length; i++){
      <Card
      id={allCards[i].ID}
        name={allCards[i].FullName}
        preferredName={allCards[i].PreferredName}
        title={allCards[i].JobTitle}
        customTitle={allCards[i].CustomTitle}
        department={allCards[i].Department}
        description={allCards[i].Description}
      email={allCards[i].PrimaryEmail}
      location={allCards[i].Location}
      team={allCards[i].Team}
      subTeam={allCards[i].SubTeam}
      isManager= {false}
      manager={allCards[i].Manager}
      hobby={allCards[i].Hobby}
      softwareSkills={allCards[i].SoftwareSkills}
      hardSkills={allCards[i].HardSkills}
      currentProjects={allCards[i].CurrentProjects}
      pastProjects={allCards[i].PastProjects}
      hireDate={allCards[i].HireDate}
      ></Card>
      } */}

        <Card
        id={"666"}
        name={allCards.length>0 ? allCards[0].ID : "nope"}
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
