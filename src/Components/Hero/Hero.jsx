import React from 'react'
import styles from './Hero.module.css'
import { FaArrowRight } from "react-icons/fa6";








const Hero = () => {
    return (
        <div className={`${styles.genhero}`}>

            <p className={`${styles.trusted}`}>Trusted by 500+ Companies</p>

            <div className={`${styles.mainherobdy}`}>
                <h2 className={`${styles.tyb}`}>Transform Your Business</h2>
                <h2 className={`${styles.wec}`}>with Expert Consulting</h2>


                <h3 className={`${styles.wehelp}`}>We help enterprises accelerate growth through strategic consulting, <br />digital transformation, and innovative solutions that deliver measurable <br />results.</h3>


                <div className={`${styles.genbtn}`}>

                    <button className={`${styles.btn1}`}>
                        <p className={`${styles.bac}`}>Book a Consultation</p>
                         <div><FaArrowRight /></div>
                    </button>

                    <button className={`${styles.btn2}`}>
                        <p className={`${styles.vcs}`}>View Case Studies</p>
                    </button>

                </div>


            </div>




        </div>
    )
}

export default Hero