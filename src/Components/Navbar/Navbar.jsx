'use client'


import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'






const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);



    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // cleanup in case component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);




    return (
        <div className={`${styles.navgen}`}>

            <div className={styles.tittlendsub} >
                <h2 className={styles.cs}>CrescentSolutions</h2>
                <p className={styles.sbs}>Streamlining B2B Services</p>
            </div>

            <div className={`${styles.scacb}`}>
                <p className={`${styles.services}`} ><a href="#service">Services</a></p>

                <p className={`${styles.studies}`}><a href="#case">Case Studies</a></p>

                <p className={`${styles.about}`}><a href="#about">About</a></p>

                <p className={`${styles.contact}`}><a href="#contact">Contact</a></p>

                <button className={`${styles.bookcon}`} onClick={() => setIsOpen(true)}>Book Consultation</button>
            </div>





            {/* MODAL */}
            {isOpen && (
                <div className={styles.backdrop} onClick={() => setIsOpen(false)}>

                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>Close nav</button>
                    </div>

                </div>
            )}







        </div>
    )
}

export default Navbar