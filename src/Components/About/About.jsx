import React from 'react'
import styles from './About.module.css'
import aboutpic from '../../../public//team-photo-C-H7QzJ4.jpg'
import Image from 'next/image';
import picc from '../../../public/Gemini_Generated_Image_o1xhfo1xhfo1xhfo.png'

const About = () => {
   return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.left}>
        <div className={styles.tagWrapper}>
          <span className={styles.tag}>About Us</span>
        </div>

        <h1 className={styles.heading}>
          Driving Innovation <br />Through  
          <span className={styles.highlight}> Strategic <br />Excellence</span>
        </h1>

        <p className={styles.paragraph}>
          Founded in 2018, CrescentLanding has helped over 500 companies
          transform their operations, accelerate growth, and achieve sustainable
          competitive advantage through innovative consulting solutions.
        </p>

        <div className={styles.stats}>
          <div>
            <h3 className={styles.statNumber}>500+</h3>
            <p className={styles.statText}>Projects Completed</p>
          </div>
          <div>
            <h3 className={styles.statNumber}>98%</h3>
            <p className={styles.statText}>Client Satisfaction</p>
          </div>
        </div>

        <ul className={styles.features}>
          <li>
            <span className={styles.icon}>✔</span>
            <span>Expert team of industry veterans</span>
          </li>
          <li>
            <span className={styles.icon}>✔</span>
            <span>Innovation-driven methodology</span>
          </li>
          <li>
            <span className={styles.icon}>✔</span>
            <span>Proven track record of success</span>
          </li>
          <li>
            <span className={styles.icon}>✔</span>
            <span>Trusted by Fortune 500 companies</span>
          </li>
        </ul>
      </div>

      {/* Right Section (Image) */}
      <div className={styles.right}>
        <div className={styles.imageWrapper}>
         
         <Image
src={aboutpic}
            alt="Four diverse people in business attire smiling"
            className={styles.image}
            width={500}
            height={200}
            
            />
        </div>
      </div>
    </div>
  );
};

export default About