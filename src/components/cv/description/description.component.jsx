import React from 'react'; 
import styles from './description.module.css'; 
import FacePic from './face-pic/face-pic.component';
import facePng from '../../../assets/face.png';
import PersonalInformation from './personal-information/personal-information.component';

const Description = (props)=> (
  <div className={styles.DescriptionWrapper}>
    <div className={styles.Headline}>Info</div>
    <FacePic src={facePng}/> 
    <PersonalInformation />
  </div>
)

export default Description; 