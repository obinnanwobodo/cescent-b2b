import React from 'react'
import styles from './Insight.module.css'
import digitalimg from '../../../public/Gemini_Generated_Image_70kpto70kpto70kp.png'
import Image from 'next/image'
import { FiUser } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";





const array = [

    {
        imagesrc: digitalimg,
        ds: 'Digital Strategy',
        fe: 'Featured',
        thefuture: 'The Future of Digital Transformation in 2025',
        explore: 'Explore the latest trends and technologies shaping digital transformation strategies for modern enterprises.',
        usersrc: <FiUser />,
        sarah: 'Sarah Johnson',
        datesrc: <CiCalendar />,
        date: 'Dec 15, 2025',
    }



]







const insightsData = [
    {
        tag: "Analytics",
        title: "How to Build a Data-Driven Culture",
        description: "A comprehensive guide to implementing data-driven \ndecision making across your organization.",
        author: "Michael Chen",
        date: "Dec 10, 2025",
    },
    {
        tag: "UX Strategy",
        title: "Customer Experience Optimization \nStrategies",
        description: "Proven methodologies to enhance customer journey and drive engagement across all touchpoints.",
        author: "Emma Rodriguez",
        date: "Dec 8, 2025",
    },
    {
        tag: "Growth Strategy",
        title: "Scaling Your Business with Strategic \nPartnerships",
        description: "Learn how strategic alliances can accelerate growth and open new market opportunities.",
        author: "David Park",
        date: "Dec 5, 2025",
    },

];







const Insight = () => {
    return (
        <div className={`${styles.geninsight}`}>


            <div className={`${styles.lis}`}>

                <p className={`${styles.latest}`}>Latest Insights</p>

                <h2 className={`${styles.industry}`}>Industry <span className={styles.ins}>Insights & Trend</span> </h2>

                <h3 className={`${styles.stay}`}>Stay ahead with our expert analysis and thought leadership on the latest business and <br />technology trends.</h3>

            </div>



            <div className={styles.genbox}>

                <div className={styles.mappingbox1}>
                    {array.map((each, index) => (

                        <div key={index} className={`${styles.eachofthem}`}>

                            <div className={`${styles.genimgndtext}`}>


                                <div className={`${styles.box1img}`}>
                                    <Image
                                        src={digitalimg}
                                        alt='digital image'
                                    />
                                </div>



                                <div className={`${styles.gentext}`}>


                                    <div className={`${styles.dsfe}`}>
                                        <div className={`${styles.ds}`}>{each.ds}</div>
                                        <div className={`${styles.fe}`}>{each.fe}</div>

                                    </div>


                                    <div className={`${styles.thefuture}`}>{each.thefuture}</div>
                                    <div className={`${styles.explore}`}>{each.explore}</div>





                                    <div className={`${styles.sdtndread}`}>



                                        <div className={`${styles.sdt}`}>

                                            <div className={`${styles.us}`}>
                                                <div className={`${styles.usersrc}`}>{each.usersrc}</div>
                                                <div className={`${styles.sarah}`}>{each.sarah}</div>
                                            </div>

                                            <div className={`${styles.icnnddate}`}>
                                                <div className={`${styles.dateicn}`}>{each.datesrc}</div>
                                                <div className={`${styles.date}`}>{each.date}</div>

                                            </div>

                                            <div className={`${styles.mins}`}>
                                                <p className={`${styles.mins}`}>5 min read</p>
                                            </div>


                                            <div className={`${styles.icnndread}`}>
                                                <p className={`${styles.read}`}><a href="">Read more</a></p>
                                                <div className={`${styles.readicn}`}><FaArrowRight />
                                                </div>
                                            </div>

                                        </div>






                                    </div>










                                </div>


                            </div>



                        </div>


                    ))}


                </div>







                {/* Second Mapping (insightsData) */}
                <div className={styles.mappingbox2}>
                    {insightsData.map((each, index) => (
                        <div key={index} className={styles.eachofthemm}>
                            <div 
  className={`${styles.gentextt} ${index === 0 ? styles.firstBox : ""}`}
>
                                <div className={styles.ds}>{each.tag}</div>
                                <div className={styles.tittle}>{each.title.split("\n").map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </div>
                                <div className={styles.explore}>
                                    {each.description.split("\n").map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className={styles.sdt2}>
                                    <div className={styles.uss}>
                                        <FiUser className={styles.usersrc} />
                                        <div className={styles.sarah}>{each.author}</div>
                                    </div>

                                    <div className={styles.icnnddatee}>
                                        <CiCalendar className={styles.dateicn} />
                                        <div className={styles.date}>{each.date}</div>
                                    </div>
                                </div>

                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>



           <div className={styles.icnndvaa}>
             <p className={styles.vaa}>View All Articles</p>
              <div className={`${styles.rightawr}`}><FaArrowRight /> </div>
           </div>

        </div>
    )
}



export default Insight