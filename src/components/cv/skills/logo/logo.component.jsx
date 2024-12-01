import React from "react";
import styles from "./logo.module.css";
const Logo = (props) => (
  <div className={styles.Logo}>
    <img src={props.src} alt="Logo" />
  </div>
);

export default Logo;
