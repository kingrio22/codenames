import React from "react";
import styles from "./face-pic.module.css";
const FacePic = (props) => (
  <div className={styles.FacePic}>
    <img src={props.src} alt="Porträt" />
  </div>
);

export default FacePic;
