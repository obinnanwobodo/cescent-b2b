'use client'

import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { FaArrowRight, FaTimes, FaCalendarAlt, FaCheck } from "react-icons/fa";
import { FaBars } from "react-icons/fa";




const Navbar = () => {
  
    const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className={`${styles.navgen}`}>

      <div className={styles.tittlendsub}>
        <h2 className={styles.cs}><a href="#">CrescentSolutions</a></h2>
        <p className={styles.sbs}>Streamlining B2B Services</p>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`${styles.scacb} ${menuOpen ? styles.open : ""}`}>
        <p className={`${styles.services}`}><a href="#">Home</a></p>
        <p className={`${styles.services}`}><a href="#service">Services</a></p>
        <p className={`${styles.studies}`}><a href="#case">Case Studies</a></p>
        <p className={`${styles.about}`}><a href="#about">About</a></p>
        <button className={`${styles.contact}`}><a href="#contact">Contact</a> </button>
      </div>

    </div>
  )
}

export default Navbar
