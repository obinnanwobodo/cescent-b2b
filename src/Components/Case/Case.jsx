import React from 'react'
import styles from './case.module.css'
import { FaArrowRight } from "react-icons/fa6";




const caseStudies = [
  {
    id: 1,
    category: 'Technology',
    featured: true,
    metric: '+40% Revenue Growth',
    company: 'TechCorp Global',
    description: 'Complete digital transformation and market expansion strategy implementation.',
    duration: 'in 3 months'
  },
  {
    id: 2,
    category: 'Retail',
    featured: false,
    metric: '+65% Customer Engagement',
    company: 'RetailMax Inc',
    description: 'UX redesign and customer journey optimization across all touchpoints.',
    duration: 'in 6 months'
  },
  {
    id: 3,
    category: 'Manufacturing',
    featured: false,
    metric: '+30% Operational Efficiency',
    company: 'ManufacturePro',
    description: 'Process optimization and automation strategy deployment.',
    duration: 'in 4 months'
  },
  {
    id: 4,
    category: 'Financial Services',
    featured: false,
    metric: '+85% Process Automation',
    company: 'FinanceForward',
    description: 'Digital workflow optimization and customer service enhancement.',
    duration: 'in 5 months'
  },
  {
    id: 5,
    category: 'Healthcare',
    featured: false,
    metric: '+50% Patient Satisfaction',
    company: 'HealthTech Solutions',
    description: 'Patient experience redesign and operational efficiency improvements.',
    duration: 'in 8 months'
  },
  {
    id: 6,
    category: 'Energy',
    featured: false,
    metric: '+35% Cost Reduction',
    company: 'EnergyInnovate',
    description: 'Sustainability strategy and operational optimization implementation.',
    duration: 'in 6 months'
  }
];





const Case = () => {
  return (
    <div className={`${styles.gencase}`}>

      <div className={styles.cp}>
        <p className={styles.cs}>Case Studies</p>
        <h2 className={styles.proven}>Proven Results for <span className={styles.industry}>Industry Leaders</span></h2>
      </div>




{/* MAPPING */}


  <div className={styles.casemain}>
            {caseStudies.map(study => (
                <div key={study.id} className={styles.casecard}>
                    <div className={styles.caseheader}>
                        <div>
                            <span className={styles.category}>{study.category}</span>
                            {study.featured && <span className={styles.featured}>Featured</span>}
                        </div>
                        <p className={styles.metric}>{study.metric}</p>
                    </div>
                    <div className={styles.casebody}>
                        <h4 className={styles.company}>{study.company}</h4>
                        <p className={styles.description}>{study.description}</p>
                    </div>
                    <div className={styles.casefooter}>
                        <span className={styles.duration}>{study.duration}</span>
                        <a href="#" className={styles.readmore}>
                            Read More <FaArrowRight />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    


    </div>
  )
}

export default Case