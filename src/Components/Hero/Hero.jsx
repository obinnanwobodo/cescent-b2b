'use client'

import React, { useState, useEffect } from 'react'
import styles from './Hero.module.css'
import { FaArrowRight, FaTimes, FaCalendarAlt, FaCheck } from "react-icons/fa";









const Hero = () => {

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


    const ConsultationModal = ({ isOpen, onClose }) => {
        if (!isOpen) return null;
    }

    return (
        <div className={`${styles.genhero}`}>

            <p className={`${styles.trusted}`}>Trusted by 500+ Companies</p>

            <div className={`${styles.mainherobdy}`}>
                <h2 className={`${styles.tyb}`}>Transform Your Business</h2>
                <h2 className={`${styles.wec}`}>with Expert Consulting</h2>


                <h3 className={`${styles.wehelp}`}>We help enterprises accelerate growth through strategic consulting, <br />digital transformation, and innovative solutions that deliver measurable <br />results.</h3>


                <div className={`${styles.genbtn}`}>

                    <button className={`${styles.btn1}`} onClick={() => setIsOpen(true)}>
                        <p className={`${styles.bac}`}>Book a Consultation</p>
                        <div><FaArrowRight /></div>
                    </button>

                    <button className={`${styles.btn2}`}>
                        <p className={`${styles.vcs}`}><a href="#case">View Case Studies</a></p>
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

                                <div className={styles.modalBody}>
                                    <div className={styles.stepIndicator}>
                                        <span className={styles.stepText}>Step 1 of 2</span>
                                    </div>
                                    <p className={styles.modalDescription}>
                                        Choose the consultation type that best fits your needs
                                    </p>

                                    <div className={styles.consultationOptions}>
                                        {/* Strategy Session Card */}
                                        <div className={styles.optionCard}>
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
                                        <div className={styles.optionCard}>
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
                                        <div className={styles.optionCard}>
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
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Hero