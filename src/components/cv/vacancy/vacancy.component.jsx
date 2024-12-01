import React from "react";
import styles from "./vacancy.module.css";

const Vacancy = (props) => (
  <div className={styles.Vacancy}>
    <div className={styles.VacancyWrapper}>
      <div className={styles.VacancyTitle}>
        <div className={styles.Employer}>{props.employer}</div>
        <div className={styles.JobName}>{props.jobName}</div>
        <div className={styles.Timerange}>
          {props.from} - {props.to}
        </div>
      </div>
      <div className={styles.DescriptionWrapper}>
        {props.descriptions.map((x, i) => (
          <div className={styles.Row} key={i}>
            {x}
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default Vacancy;
