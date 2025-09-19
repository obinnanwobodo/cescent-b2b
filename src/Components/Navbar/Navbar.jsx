import React from 'react'
import styles from './Navbar.module.css'






const Navbar = () => {
    return (
        <div className={`${styles.navgen}`}>

            <div className={styles.tittlendsub} >
                <h2 className={styles.cs}>CrescentSolutions</h2>
                <p className={styles.sbs}>Streamlining B2B Services</p>
            </div>

            <div className={`${styles.scacb}`}>
                <p className={`${styles.services}`}>Services</p>

                <p className={`${styles.studies}`}>Case Studies</p>

                <p className={`${styles.about}`}>About</p>

                <p className={`${styles.contact}`}>Contact</p>

                <button className={`${styles.bookcon}`}>Book Consultation</button>
            </div>




        </div>
    )
}

export default Navbar