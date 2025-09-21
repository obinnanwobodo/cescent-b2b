import React from 'react';
import styles from './Footer.module.css'; // Changed import to use CSS Modules
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={`${styles.footerSection} ${styles.companyInfo}`}>
                    <h3 className={styles.companyLogo}>CrescentSolutions</h3>
                    <p className={styles.companyTagline}>
                        Transforming businesses through strategic consulting and innovative solutions.
                    </p>
                    <div className={styles.socialIcons}>
                        <a href="https://www.linkedin.com/in/obinna-nwobodo-088413377" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={styles.socialIcon} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className={styles.socialIcon} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className={styles.socialIcon} />
                        </a>
                    </div>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.sectionTitle}>Services</h4>
                    <ul className={styles.footerLinks}>
                        <li><a href="#strategy-workshops">Strategy Workshops</a></li>
                        <li><a href="#ux-design">UX Design</a></li>
                        <li><a href="#market-research">Market Research</a></li>
                        <li><a href="#digital-transformation">Digital Transformation</a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.sectionTitle}>Company</h4>
                    <ul className={styles.footerLinks}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.sectionTitle}>Legal</h4>
                    <ul className={styles.footerLinks}>
                        <li><a href="#privacy-policy">Privacy Policy</a></li>
                        <li><a href="#terms-of-service">Terms of Service</a></li>
                        <li><a href="#cookie-policy">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.copyright}>&copy; 2025 CrescentSolutions. All rights reserved.</p>
                <p className={styles.madeWith}>
                    Made with <span className={styles.heartIcon}>❤️</span> for ambitious businesses
                </p>
            </div>
        </footer>
    );
};

export default Footer;