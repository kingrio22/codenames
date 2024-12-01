import React from 'react'; 
import styles from './vacancy.module.css'


const Vacancy = (props)=> (
  <div className={styles.VacancyWrapper}>
    <div className={styles.Employer}>{props.employer}</div>
    <div className={styles.JobName}>{props.jobName}</div>
    <div className={styles.Timerange}>
      {props.from} - {props.to}
    </div>
    <ul>
      {props.descriptions.map((x,i)=><li key={i}>{x}</li>)}
    </ul>
  </div>
)
export default Vacancy; 