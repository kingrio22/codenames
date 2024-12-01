import React from 'react'; 
import styles from './apply-letter.module.css'; 


const ApplyLetter = (props)=> (
  <div className={styles.Wrapper}>
    <div className={styles.Headline}>Motivationsschreiben</div>
    
    <div className={styles.MotivationsText}>
      <div className={styles.TextField}>
      <span>
      Mein Hang zu Zahlen und logischen Prozessen, habe ich mit Softwareentwicklung schon während des Studiums vom Hobby zum Beruf gemacht. Ich habe eine hohe Lernbereitschaft, freue mich über jede Möglichkeit mich persönlich weiter entwickeln zu können und mich somit erfolgsorientiert einzubringen. Die Möglichkeit bei SprintEins immer wieder an neuen Projekten arbeiten zu können, reizt mich besonders.  
      </span>
      <br></br>
      <br></br>
      <span>
      In einem familiären Teamgefüge, in dem man sich gegenseitig unterstützt, ergänzt und gemeinsam am Gesamterfolg arbeitet, fühle ich mich besonders wohl. Feedback zu meiner Arbeit ist mir sehr wichtig um mich stetig verbessern zu können. 
      </span>
      <br></br>
      <br></br>
      <span>
      Die Verbindung aus Wohlfühlfaktor am Arbeitsplatz und Begeisterung für die Sache, treibt mich an regelmäßig Höchstleistungen zu bringen.
      </span>
      <br></br>
      <br></br>

      <div className={styles.additional}>
      Außerdem ist das die coolste Bewerbung die ich je gemacht habe:D 
      </div>
      </div>
      
      
        
    </div>
  </div>
)

export default ApplyLetter; 