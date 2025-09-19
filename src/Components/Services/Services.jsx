import React from 'react'
import styles from './Services.module.css'
import { FiTarget } from "react-icons/fi";
import { MdOutlineColorLens } from "react-icons/md";
import { FiBarChart } from 'react-icons/fi';
import { GrSettingsOption } from "react-icons/gr";
import { GoLightBulb } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { AiOutlineSafety } from "react-icons/ai";










const array = [

    {
        icon: <FiTarget />,
        tittle: 'Strategy Workshops',
        description: 'Collaborative sessions to define \nvision, identify opportunities, and \ncreate actionable roadmaps.',
    },


    {
        icon: <MdOutlineColorLens />,
        tittle: 'UX Design',
        description: 'User-centered design solutions \nthat enhance customer \nexperience and drive \nengagement.',
    },


    {
        icon: <FiBarChart />,
        tittle: 'Market Research',
        description: 'Data-driven insights to \nunderstand market dynamics and \ncompetitive positioning.',
    },


    {
        icon: <GrSettingsOption />,
        tittle: 'Innovation Consulting',
        description: 'Creative problem-solving and \nideation workshops to drive \nbreakthrough innovations.',
    },


    {
        icon: <GoLightBulb />,
        tittle: 'Change Management',
        description: 'Comprehensive strategies to \nguide organizations through \ntransformational change..',
    },
    {
        icon: <LuUsers />,
        tittle: 'Digital Transformation',
        description: 'End-to-end digitization \nstrategies that modernize \noperations and accelerate \ngrowth.',
    },


    {
        icon: <FaArrowTrendUp />,
        tittle: 'Growth Strategy',
        description: 'Market expansion and revenue \noptimization strategies for \nsustainable growth.',
    },

    {
        icon: <AiOutlineSafety />,
        tittle: 'Risk Assessment',
        description: 'Identify and mitigate business \nrisks with comprehensive analysis \nand planning.',
    },


]













const Services = () => {
    return (
        <div className={`${styles.genservices}`}>


            <div className={styles.oco}>

                <p className={styles.os}>Our Services</p>

                <h2 className={styles.csfmc}>Comprehensive Solutions for <span className={styles.modern}>Modern Challenges</span></h2>

                <h3 className={styles.oe}>Our expert team delivers end-to-end consulting services designed to drive sustainable <br />growth and competitive advantage.</h3>



                <div className={styles.mappinggen}>
                    {array.map((each, index) => (

                        <div key={index} className={`${styles.eachofthem}`}>

                            <div className={`${styles.allinagrp}`}>


                                <div className={`${styles.icons}`}>
                                    {each.icon}
                                </div>

                                <div className={`${styles.tittle}`}>
                                    {each.tittle}
                                </div>

                                <div className={`${styles.desc}`}>
                                    {each.description}
                                </div>


                            </div>

                        </div>


                    ))}


                </div>




            </div>


        </div>
    )
}

export default Services