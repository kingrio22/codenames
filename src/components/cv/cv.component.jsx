import React, { Component } from "react";
import ApplyLetter from "./apply-letter/apply-letter.component";
import Contact from "./contact/contact.component";
import styles from "./cv.module.css";
import Description from "./description/description.component";
import Impress from "./impress/impress.component";
import NavigationBar from "./navigation-bar/navigation-bar.component";
import Skills from "./skills/skills.component";
import Vacancy from "./vacancy/vacancy.component";

class Cv extends Component{

constructor(props){
  super(props); 
  this.state = {
    currentBottom: 0,
  }
}

switchBottom = (bottomIndex) =>{
  this.setState({currentBottom: bottomIndex})
}
render(){

  let bottom; 
  switch(this.state.currentBottom){
    case 0: 
    bottom = this.props.vacancies
            .sort((a,b)=>new Date(b.dateFrom).getTime() - new Date(a.dateFrom).getTime())
            .map((x,i)=>
              <Vacancy className={styles.Vacancy} employer={x.employer} jobName={x.jobName} from={x.from} to={x.to} descriptions={x.descriptions} key={i} />
              ); 
    break; 

    case 1: 
    bottom  = <Skills />
    break; 

    case 2: 
    bottom = <Contact/>
    break; 

    default:
    bottom = <div> Run in default</div>
    break;
  }

  return (
    <div className={styles.Cv}>
      <div className={styles.TopArea}>
        <div className={styles.TopBox}>
          <Description/>
        </div>
        <div className={styles.TopBox}>
          <ApplyLetter/>
        </div>
      </div>
      <div className={styles.NavigationBar}>
        <NavigationBar switchBottom={this.switchBottom} currentState={this.state.currentBottom}/>
      </div>
      <div className={styles.BottomArea}>
        {bottom}
      </div>
      <Impress/>
    </div>

  )
};
}

export default Cv;
