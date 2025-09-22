'use client'

import React, { useState, useEffect } from 'react'
import styles from './Hero.module.css'
import { FaArrowRight, FaTimes, FaCalendarAlt, FaCheck } from "react-icons/fa";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1); // 👈 track modal step

       const [submitted, setSubmitted] = useState(false)
    



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
        <div className={styles.genhero}>
            <p className={styles.trusted}>Trusted by 500+ Companies</p>

            <div className={styles.mainherobdy}>
                <h2 className={styles.tyb}>Transform Your Business</h2>
                <h2 className={styles.wec}>with Expert Consulting</h2>

                <h3 className={styles.wehelp}>
                    We help enterprises accelerate growth through strategic consulting, <br />
                    digital transformation, and innovative solutions that deliver measurable <br />
                    results.
                </h3>

                <div className={styles.genbtn}>
                    <button className={styles.btn1} onClick={() => { setIsOpen(true); setStep(1); setSubmitted(false);}}>
                        <p className={styles.bac}>Book a Consultation</p>
                        <div><FaArrowRight /></div>
                    </button>

                    <button className={styles.btn2}>
                        <p className={styles.vcs}><a href="#case">View Case Studies</a></p>
                    </button>
                </div>
            </div>

            {/* MODAL */}
            {isOpen && (
                <div className={styles.backdrop} onClick={() => setIsOpen(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalOverlay}>
                            <div className={styles.modalContainer}>
                                <div className={styles.modalHeader}>
                                    <h2 className={styles.modalTitle}>Book Your Free Consultation</h2>
                                    <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                                        <FaTimes />
                                    </button>
                                </div>

                                {/* Step 1 - Cards */}
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

                                {/* Step 2 - Form */}
                                {step === 2 && (
                                    <div className={styles.modalBody}>
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
                                            <textarea
                                                className={styles.textarea}
                                                placeholder="Tell us about your project, challenges, and goals..."
                                            />

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

export default Hero
