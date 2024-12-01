import React, { Component } from 'react'; 
import styles from './skills.module.css'; 
import logoDocker from '../../../assets/logos/docker.svg'
import logoGithub from '../../../assets/logos/github.svg'
import logoJS from '../../../assets/logos/javascript.svg'
import logoMongoDb from '../../../assets/logos/mongodb.svg'
import logoNodeJs from '../../../assets/logos/nodejs.svg'
import logoReactJs from '../../../assets/logos/react.svg'
import logoHtml from '../../../assets/logos/html.svg'
import logoCss from '../../../assets/logos/css.svg'
import logoAngular from '../../../assets/logos/angularjs.svg'
import logoNestJs from '../../../assets/logos/nestjs-logo-1.png'
import logoPostgres from '../../../assets/logos/postgresql.svg'
import logoTS from '../../../assets/logos/typescript.svg'
import Logo from './logo/logo.component';

class Skills extends Component{
  
  constructor(props){
    super(props); 
    this.state = {
      logos: [
        {
          name: 'logoTS',
          src: logoTS,
          id: 7
        },
        {
          name: 'logoJS',
          src: logoJS,
          id: 2
        },
        {
          name: 'logoDocker',
          src: logoDocker,
          id: 0
        },
        {
          name: 'logoGithub',
          src: logoGithub,
          id: 1
        },
       
        {
          name: 'logoMongoDb',
          src: logoMongoDb,
          id: 8
        },
        {
          name: 'logoReactJs',
          src: logoReactJs,
          id: 9
        },
        {
          name: 'logoHtml',
          src: logoHtml ,
          id: 10
        },
        {
          name: 'logoCss',
          src: logoCss ,
          id: 11
        },
        {
          name: 'logoAngular',
          src: logoAngular ,
          id: 3
        },
        {
          name: 'nodeJs',
          src: logoNodeJs,
          id: 4
        },
        {
          name: 'logoNestJs',
          src: logoNestJs,
          id: 5
        },
        {
          name: 'logoPostgres',
          src: logoPostgres,
          id: 6
        },
      ]
    }
  }
  

  render(){
  return(
    <div className={styles.SkillWrapper}>
      <div className={styles.SkillRow}>
      {this.state.logos.slice(0,6).map((x=><Logo className={styles.Logo} src={x.src} key={x.id} />))}
        </div>
        <div className={styles.SkillRow}>
      {this.state.logos.slice(6,12).map((x=><Logo className={styles.Logo} src={x.src} key={x.id} />))}
      </div>
    </div>
    )
  }
}

export default Skills; 