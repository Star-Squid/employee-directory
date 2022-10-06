import React, { useState } from "react";
import styles from "./CardStyles.module.css";
import defaultPhoto from "../images/default.webp";

function Card(props) {
  //tooltip follows cursor position
  const [tooltipShown, setTooltipShown] = useState(false);

  //conditional rendering of each data item

  const showID = (() => {
      if (props.id) {
        return  <p>
        <span className={styles.keyword}>ID: </span>
        {props.id}
      </p>
      }
  })();

  const showPreferredName = (() => {
    if (props.preferredName) {
      return <h2>{props.preferredName}</h2>;
    }
  })();

  //name always shows

  const showPronoun = (() => {
    if (props.pronoun) {
      return <p className={styles.pronoun}>{props.pronoun}</p>;
    }
  })();

  const showCustomTitle = (() => {
    if (props.customTitle) {
      return <h3 className={styles.position}>{props.customTitle}</h3>;
    }
  })();

  const showTitle = (() => {
    if (props.title) {
      return <h3 className={styles.position}>{props.title}</h3>;
    }
  })();

  //email always shows

  const showDescription = (() => {
    if (props.description) {
      return <p className={styles.description}>{props.description}</p>;
    }
  })();

  const showHobbies = (() => {
    if (props.hobby) {
      return (
        <p>
          <span className={styles.keyword}>hobbies: </span>
          {props.hobby}
        </p>
      );
    }
  })();

  const showLocation = (() => {
    if (props.location) {
      return (
        <p>
          <span className={styles.keyword}>location: </span>
          {props.location}
        </p>
      );
    }
  })();

  const showDepartment = (() => {
    if (props.department) {
      return (
        <p>
          <span className={styles.keyword}>department: </span>
          {props.department}
        </p>
      );
    }
  })();

  const showTeam = (() => {
    if (props.team) {
      return (
        <p>
          <span className={styles.keyword}>team: </span>
          {props.team}
        </p>
      );
    }
  })();

  const showSubTeam = (() => {
    if (props.subTeam) {
      return (
        <p>
          <span className={styles.keyword}>sub-team: </span>
          {props.subTeam}
        </p>
      );
    }
  })();

  const showManager = (() => {
    if (props.manager) {
      return (
        <p>
          <span className={styles.keyword}>manager: </span>
          {props.manager}
        </p>
      );
    }
  })();

  const showSoftwareSkills = (() => {
    if (props.softwareSkills) {
      return (
        <p>
          <span className={styles.keyword}>software: </span>
          {props.softwareSkills}
        </p>
      );
    }
  })();

  const showHardSkills = (() => {
    if (props.hardSkills) {
      return (
        <p>
          <span className={styles.keyword}>hard skills: </span>
          {props.hardSkills}
        </p>
      );
    }
  })();

  const showCurrentProjects = (() => {
    if (props.currentProjects) {
      return (
        <p>
          <span className={styles.keyword}>current projects: </span>
          {props.currentProjects}
        </p>
      );
    }
  })();

  const showPastProjects = (() => {
    if (props.pastProjects) {
      return (
        <p>
          <span className={styles.keyword}>past projects: </span>
          {props.pastProjects}
        </p>
      );
    }
  })();

  const showHireDate = (() => {
    if (props.hireDate) {
      return (
        <p>
          <span className={styles.keyword}>with us since: </span>
          {props.hireDate}
        </p>
      );
    }
  })();

  //render the card

  return (
    <>
      <div className={styles.outer}>
        {props.photo ? (
          props.isManager ? (
            <img
              src={props.photo}
              alt={props.name}
              className={styles.managerPhoto}
              onMouseEnter={() => setTooltipShown(true)}
            />
          ) : (
            <img src={props.photo} alt="" className={styles.photo}
            onMouseEnter={() => setTooltipShown(true)} />
          )
        ) : props.isManager ? (
          <img src={defaultPhoto} alt="" className={styles.managerPhoto}
          onMouseEnter={() => setTooltipShown(true)} />
        ) : (
          <img src={defaultPhoto} alt="" className={styles.photo}
          onMouseEnter={() => setTooltipShown(true)} />
        )}

        <div className={styles.infoArea}></div>
        <div className={styles.infoContent}>
          {/* {(function() {
          if (preferredName) {
            return           <h2>{props.preferredName}</h2>
            ;
          } else {
            return           <h2>Nope</h2>
            ;
          }
        })()}  */}
          {showPreferredName}
          <h2>
            {props.name}
          </h2>
          {showPronoun}
          {showCustomTitle} {showTitle}
          <p
            className={styles.email}
          >
            {props.email}
          </p>
          <hr />
          {showDescription}
          {/* {showHobbies}
          {showLocation}
          {showDepartment}
          {showTeam}
          {showSubTeam}
          {showManager}
          {showSoftwareSkills}
          {showHardSkills}
          {showCurrentProjects}
          {showPastProjects}
          {showHireDate} */}
        </div>

        {/* TOOLTIP */}
        {tooltipShown && (
          <div className={styles.tooltip} 
          onMouseLeave={() => setTooltipShown(false)}>
            <div className={styles.infoContent}>
              {showID}
              {showHobbies}
              {showLocation}
              {showDepartment}
              {showTeam}
              {showSubTeam}
              {showManager}
              {showSoftwareSkills}
              {showHardSkills}
              {showCurrentProjects}
              {showPastProjects}
              {showHireDate}
            </div>
          </div>
        )}
        {/* END TOOLTIP */}

      </div>
    </>
  );
}

Card.defaultProps = {
  // preferredName: "?",
  name: "Firstname Lastname",
  // pronoun: "they/them",
  // customTitle: "Wizard",
  title: "Valued Employee",
  description:
    "Absolute legend. Absolute legend. Absolute legend. Absolute legend. Absolute legend. Absolute legend. Absolute legend. Absolute legend. Absolute legend. Absolute legend. Absolute legend. ",
  // email: "person@company.co.uk",
  // location: "?",
  // department: "?",
  // team: "?",
  // subTeam: "?",
  isManager: false,
  manager: "ceo@company.co.uk",
  // hobby: "?",
  // softwareSkills: "?",
  // hardSkills: "?",
  // currentProjects: "?",
  // pastProjects: "?",
  // hireDate: "?",
};

export default Card;
