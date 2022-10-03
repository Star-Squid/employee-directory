import React from "react";
import styles from "./CardStyles.module.css";
import defaultPhoto from "../images/default.webp";

function Card(props) {
  return (
    <>
      <div className={styles.outer}>
        {props.photo ? (
          props.isManager ? (
            <img
              src={props.photo}
              alt={props.name}
              className={styles.managerPhoto}
            />
          ) : (
            <img src={props.photo} alt="" className={styles.photo} />
          )
        ) : props.isManager ? (
          <img src={defaultPhoto} alt="" className={styles.managerPhoto} />
        ) : (
          <img src={defaultPhoto} alt="" className={styles.photo} />
        )}

        <div className={styles.infoArea}></div>
        <div className={styles.infoContent}>
          <h2>{props.preferredName}</h2>
          <h2>{props.name}</h2>
          <p className={styles.pronoun}>{props.pronoun}</p>
          <h3 className={styles.position}>{props.customTitle}</h3>
          <h3 className={styles.position}>{props.title}</h3>
          <p className={styles.email}>{props.email}</p>
          <hr />
          <p className={styles.description}>{props.description}</p>
          <p>
            <span className={styles.keyword}>hobbies: </span>
            {props.hobby}
          </p>

          <p>
            <span className={styles.keyword}>location: </span>
            {props.location}
          </p>
          <p>
            <span className={styles.keyword}>department: </span>
            {props.department}
          </p>
          <p>
            <span className={styles.keyword}>team: </span>
            {props.team}
          </p>
          <p>
            <span className={styles.keyword}>sub-team: </span>
            {props.subTeam}
          </p>
          <p>
            <span className={styles.keyword}>manager: </span>
            {props.manager}
          </p>
          <p>
            <span className={styles.keyword}>software: </span>
            {props.softwareSkills}
          </p>
          <p>
            <span className={styles.keyword}>hard skills: </span>
            {props.hardSkills}
          </p>
          <p>
            <span className={styles.keyword}>current projects: </span>
            {props.currentProjects}
          </p>
          <p>
            <span className={styles.keyword}>past projects: </span>
            {props.pastProjects}
          </p>
          <p>
            <span className={styles.keyword}>with us since: </span>
            {props.hireDate}
          </p>
        </div>


      <div className={styles.tooltip}>
      <div className={styles.infoContent}>

          <p>
            <span className={styles.keyword}>hobbies: </span>
            {props.hobby}
          </p>
          <p>
            <span className={styles.keyword}>location: </span>
            {props.location}
          </p>
          <p>
            <span className={styles.keyword}>department: </span>
            {props.department}
          </p>
          <p>
            <span className={styles.keyword}>team: </span>
            {props.team}
          </p>
          <p>
            <span className={styles.keyword}>sub-team: </span>
            {props.subTeam}
          </p>
          <p>
            <span className={styles.keyword}>manager: </span>
            {props.manager}
          </p>
          <p>
            <span className={styles.keyword}>software: </span>
            {props.softwareSkills}
          </p>
          <p>
            <span className={styles.keyword}>hard skills: </span>
            {props.hardSkills}
          </p>
          <p>
            <span className={styles.keyword}>current projects: </span>
            {props.currentProjects}
          </p>
          <p>
            <span className={styles.keyword}>past projects: </span>
            {props.pastProjects}
          </p>
          <p>
            <span className={styles.keyword}>with us since: </span>
            {props.hireDate}
          </p>
          </div>
          </div>
          </div>

    </>
  );
}

Card.defaultProps = {
  // photo: "../images/default.webp",
  preferredName: "?",
  name: "Firstname Lastname",
  pronoun: "they/them",
  customTitle: "Wizard",
  title: "Valued Employee",
  description: "Absolute legend",
  email: "person@company.co.uk",
  location: "?",
  department: "?",
  team: "?",
  subTeam: "?",
  isManager: false,
  manager: "?",
  hobby: "?",
  softwareSkills: "?",
  hardSkills: "?",
  currentProjects: "?",
  pastProjects: "?",
  hireDate: "?",
};

export default Card;
