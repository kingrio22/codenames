import React from 'react'; 
import styles from './navigation-bar.module.css'; 


const NavigationBar = props=> {

const navItemStyle = styles.NavItem;
const selectedStyle = navItemStyle + ` ${styles.NavItemSelected}`; 

return (
  <div className={styles.Layout}>
    <div className={props.currentState === 0 ? selectedStyle : navItemStyle} onClick={()=>props.switchBottom(0)}>
      Werdegang
    </div>
    <div className={props.currentState === 1 ? selectedStyle : navItemStyle} onClick={()=>props.switchBottom(1)}>
      Skills
    </div>
    {/* <div className={props.currentState === 2 ? selectedStyle : navItemStyle} onClick={()=>props.switchBottom(2)}>
      Kontakt
    </div> */}
  </div>
)}
export default NavigationBar; 