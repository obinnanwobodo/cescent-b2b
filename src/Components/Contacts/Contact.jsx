import React from 'react'
import styles from './Contact.module.css'
import {
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaFacebookF,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiArrowRight } from "react-icons/fi";






const Contact = () => {
    return (
        <div className={styles.gencontact}>

            <div className={styles.crg}>
                <p className={styles.contact}>Contact Us</p>
                <h2 className={styles.ready}>Ready to <span className={styles.transform}>Transform</span> Your Business?</h2>
                <p className={styles.get}>Get in touch with our experts to discuss your challenges and discover how <br />we can help you achieve your goals.</p>
            </div>





            <div className={styles.appcontainer}>
               
                    {/* LEFT FORM SECTION */}
                    <div className={styles.sendmessagesection}>
                        <h2>Send us a message</h2>
                        <form>
                            <div className={styles.formrow}>
                                <input type="text" placeholder="First Name" className={styles.inputfieldd} />
                                <input type="text" placeholder="Last Name" className={styles.inputfieldd} />
                            </div>
                            <input type="email" placeholder="Email Address" className={`${styles.inputfield} ${styles.fullwidth}`} />
                            <input type="text" placeholder="Company" className={`${styles.inputfield} ${styles.fullwidth}`} />
                            <textarea placeholder="Tell us about your project..." className={`${styles.textareafield} ${styles.fullwidth}`}></textarea>
                            <button type="submit" className={styles.sendmessagebutton}>
                                Send Message <span className={styles.arrow}><FiArrowRight />
</span>
                            </button>
                        </form>
                    </div>

                    {/* RIGHT CONTACT SECTION */}
                    <div className={styles.getintouchsection}>
                        <h2>Get in touch</h2>
                        <div className={styles.contactinfoitem}>
                            <span className={styles.contacticon}><CiLocationOn />
</span>
                            <div>
                                <h3>Office Location</h3>
                                <p>123 Business Ave, Suite 100, New York, NY 10001</p>
                            </div>
                        </div>
                        <div className={styles.contactinfoitem}>
                            <span className={styles.contacticon}><IoCallOutline />
                            </span>
                            <div>
                                <h3>Phone</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className={styles.contactinfoitem}>
                            <span className={styles.contacticon}><MdOutlineEmail />
</span>
                            <div>
                                <h3>Email</h3>
                                <p>hello@crescentlanding.com</p>
                            </div>
                        </div>

                        {/* FOLLOW US SECTION */}
                        <div className={styles.followussection}>
                            <h3>Follow us</h3>
                            <div className={styles.socialicons}>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialiconwrapper}>
                                    <FaInstagram className={styles.socialicon} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialiconwrapper}>
                                    <FaTwitter className={styles.socialicon} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialiconwrapper}>
                                    <FaLinkedin className={styles.socialicon} />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialiconwrapper}>
                                    <FaFacebookF className={styles.socialicon} />
                                </a>
                            </div>
                        </div>
                    </div>
             
            </div>

        </div>
    )
}

export default Contact