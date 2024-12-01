import React from 'react'; 
import styles from './personal-information.module.css'; 


const PersonalInformation = props=> (
  <div className={styles.Wrapper}>
    <div className={styles.Box}>
      <div className={styles.Name}>Maximilian Grätz</div>
      <div className={styles.Birthdate}>* 02.02.1993 in Starnberg</div>
    </div>
    <div className={styles.Box}>
      <div className={styles.Street}>Marsstraße 4</div>
      <div className={styles.Address}>85609 Aschheim</div>
    </div>
    <div className={styles.Box}>
      <div className={styles.Phone}>0159 0167 9831</div>
      <a href={"mailto:max.graetz@t-online.de"}><div className={styles.Email}>max.graetz@t-online.de</div></a>
    </div>
  </div>
)

export default PersonalInformation; 
/*
postgres logo
<a href="https://iconscout.com/icons/postgresql" target="_blank">Postgresql Icon</a> by <a href="https://iconscout.com/contributors/icon-54">Icon 54</a> on <a href="https://iconscout.com">Iconscout</a>
typescript logo




*/