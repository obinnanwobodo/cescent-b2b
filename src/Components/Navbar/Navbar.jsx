'use client'

import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { FaArrowRight, FaTimes, FaCalendarAlt, FaCheck } from "react-icons/fa";
import { FaBars } from "react-icons/fa";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 🔑 Track steps

   const [submitted, setSubmitted] = useState(false)

   const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true);

  // Auto-close after 3s
  setTimeout(() => {
    setIsOpen(false);
    setSubmitted(false);
    setStep(1);
  }, 3000);
};


  return (
    <div className={`${styles.navgen}`}>

      <div className={styles.tittlendsub}>
        <h2 className={styles.cs}>CrescentSolutions</h2>
        <p className={styles.sbs}>Streamlining B2B Services</p>
      </div>

      <button 
  className={styles.hamburger} 
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>

     <div className={`${styles.scacb} ${menuOpen ? styles.open : ""}`}>
        <p className={`${styles.services}`}><a href="#service">Services</a></p>
        <p className={`${styles.studies}`}><a href="#case">Case Studies</a></p>
        <p className={`${styles.about}`}><a href="#about">About</a></p>
        <p className={`${styles.contact}`}><a href="#contact">Contact</a></p>
        <button className={`${styles.bookcon}`} onClick={() => { setIsOpen(true); setStep(1);  setSubmitted(false); }}>Book Consultation</button>
      </div>

      {/* MODAL */}
      {isOpen &&  !submitted &&(
        <div className={styles.backdrop} onClick={() => setIsOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalOverlay}>
              <div className={styles.modalContainer}>

                {/* Header */}
                <div className={styles.modalHeader}>
                  <h2 className={styles.modalTitle}>Book Your Free Consultation</h2>
                  <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                    <FaTimes />
                  </button>
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <div className={styles.modalBody}>
                    <div className={styles.stepIndicator}>
                      <span className={styles.stepText}>Step 1 of 2</span>
                    </div>
                    <p className={styles.modalDescription}>
                      Choose the consultation type that best fits your needs
                    </p>

                    <div className={styles.consultationOptions}>
                      {/* Strategy Session Card */}
                      <div className={styles.optionCard} onClick={() => setStep(2)}>
                        <div className={styles.cardHeader}>
                          <FaCalendarAlt className={styles.cardIcon} />
                        </div>
                        <h3 className={styles.cardTitle}>Strategy Session</h3>
                        <p className={styles.cardDuration}>
                          <FaCalendarAlt className={styles.durationIcon} /> 60 minutes
                        </p>
                        <p className={styles.cardDescription}>
                          Deep dive into your business challenges and opportunities
                        </p>
                        <ul className={styles.cardFeatures}>
                          <li><FaCheck className={styles.featureCheck} /> Business analysis</li>
                          <li><FaCheck className={styles.featureCheck} /> Strategic roadmap</li>
                          <li><FaCheck className={styles.featureCheck} /> Action items</li>
                        </ul>
                      </div>

                      {/* Technical Consultation Card */}
                      <div className={styles.optionCard} onClick={() => setStep(2)}>
                        <div className={styles.cardHeader}>
                          <FaCalendarAlt className={styles.cardIcon} />
                        </div>
                        <h3 className={styles.cardTitle}>Technical Consultation</h3>
                        <p className={styles.cardDuration}>
                          <FaCalendarAlt className={styles.durationIcon} /> 90 minutes
                        </p>
                        <p className={styles.cardDescription}>
                          Review technical requirements and implementation planning
                        </p>
                        <ul className={styles.cardFeatures}>
                          <li><FaCheck className={styles.featureCheck} /> Technical assessment</li>
                          <li><FaCheck className={styles.featureCheck} /> Solution architecture</li>
                          <li><FaCheck className={styles.featureCheck} /> Implementation plan</li>
                        </ul>
                      </div>

                      {/* Full Business Review Card */}
                      <div className={styles.optionCard} onClick={() => setStep(2)}>
                        <div className={styles.cardHeader}>
                          <FaCalendarAlt className={styles.cardIcon} />
                        </div>
                        <h3 className={styles.cardTitle}>Full Business Review</h3>
                        <p className={styles.cardDuration}>
                          <FaCalendarAlt className={styles.durationIcon} /> 2-3 hours
                        </p>
                        <p className={styles.cardDescription}>
                          Comprehensive analysis of your business operations
                        </p>
                        <ul className={styles.cardFeatures}>
                          <li><FaCheck className={styles.featureCheck} /> Complete audit</li>
                          <li><FaCheck className={styles.featureCheck} /> Detailed recommendations</li>
                          <li><FaCheck className={styles.featureCheck} /> Follow-up plan</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className={styles.modalBodyy}>
                    <div className={styles.stepIndicator}>
                      <span className={styles.stepText}>Step 2 of 2</span>
                    </div>
                    <p className={styles.modalDescription}>
                      Tell us about your project and we'll get back to you within 24 hours
                    </p>

                    <form className={styles.form}  onSubmit={handleSubmit}>
                      <div className={styles.formRow}>
                        <input type="text" placeholder="First Name *" className={styles.input} />
                        <input type="text" placeholder="Last Name *" className={styles.input} />
                      </div>
                      <div className={styles.formRow}>
                        <input type="email" placeholder="Email Address *" className={styles.input} />
                        <input type="text" placeholder="Phone Number" className={styles.input} />
                      </div>
                      <div className={styles.formRow}>
                        <input type="text" placeholder="Company *" className={styles.input} />
                        <input type="text" placeholder="Timeline (e.g. ASAP, 3-6 months)" className={styles.input} />
                      </div>
                      <textarea className={styles.textarea} placeholder="Tell us about your project, challenges, and goals..." />

                      <div className={styles.buttonRow}>
                        <button type="button" className={styles.backBtn} onClick={() => setStep(1)}>
                          Back
                        </button>
                        <button type="submit" className={styles.submitBtn}>
                          Schedule Consultation <FaArrowRight />
                        </button>
                      </div>
                    </form>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}


        {isOpen && submitted && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.successModal} onClick={(e) => e.stopPropagation()}>
            <h2>✅ Submitted Successfully!</h2>
            <p>We’ll reach out to you within 24 hours.</p>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default Navbar
