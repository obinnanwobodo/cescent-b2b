import React from 'react'
import styles from './Process.module.css'



const stepsData = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deep dive into your business challenges, goals, and current state analysis.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Develop a comprehensive strategic roadmap with clear milestones and KPIs.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Execute solutions with agile methodology and continuous stakeholder alignment.",
  },
  {
    number: "04",
    title: "Results",
    description:
      "Monitor performance, optimize outcomes, and ensure sustainable growth.",
  },
];




const Process = () => {
  return (
    <div className={styles.genprocess}>
        
        <div className={styles.of}>
            <p className={styles.op}>Our Process</p>
            <h2 className={styles.fssr}><span className={styles.four}>Four-Step </span>Success Framework</h2>
        </div>



    <div className={styles.processContainer}>
      {stepsData.map((step, index) => (
        <div key={index} className={styles.processStep}>
          <div className={styles.stepNumber}>{step.number}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>



    </div>
  )
}

export default Process