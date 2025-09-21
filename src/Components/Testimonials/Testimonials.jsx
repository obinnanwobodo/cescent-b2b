import React from 'react'
import styles from './Testimonials.module.css'
import { FaStar } from "react-icons/fa";



const testimonialsData = [
  {
    id: 1,
    stars: 5,
    quote: "CrescentLanding transformed our entire business strategy. The results exceeded all expectations and helped us achieve 40% revenue growth in just 3 months.",
    name: "Sarah Johnson",
    title: "CEO, TechCorp Global",
    initials: "SJ"
  },
  {
    id: 2,
    stars: 5,
    quote: "Their expertise in digital transformation is unmatched. The team delivered innovative solutions that streamlined our operations and enhanced our competitive edge.",
    name: "Michael Chen",
    title: "CTO, InnovateSoft",
    initials: "MC"
  },
  {
    id: 3,
    stars: 5,
    quote: "Outstanding results in UX research and customer journey optimization. Our engagement metrics improved by 65% within 6 months of implementation.",
    name: "Emma Rodriguez",
    title: "VP Marketing, RetailMax Inc",
    initials: "ER"
  },
  {
    id: 4,
    stars: 5,
    quote: "The process optimization strategies were game-changing. We achieved 30% operational efficiency improvement that directly impacted our bottom line.",
    name: "David Park",
    title: "Operations Director, ManufacturePro",
    initials: "DP"
  },
  {
    id: 5,
    stars: 5,
    quote: "Exceptional strategic guidance and execution. The digital transformation roadmap they created has positioned us perfectly for future growth.",
    name: "Lisa Wang",
    title: "Chief Strategy Officer, FinanceForward",
    initials: "LW"
  },
  {
    id: 6,
    stars: 5,
    quote: "Professional, insightful, and results-driven. The patient experience improvements have significantly enhanced our service quality and satisfaction scores.",
    name: "Robert Smith",
    title: "Founder, HealthTech Solutions",
    initials: "RS"
  }
];

const Testimonials = () => {
  const renderStars = (count) => {
    return Array.from({ length: count }, (_, i) => (
      <span key={i} className={styles.star}><FaStar /></span>
    ));
  };

  return (
    <div className={styles.testigen}>
      <div className={styles.tw}>
        <p className={styles.testi}>Testimonials</p>
        <h2 className={styles.wocs}>What Our <span className={styles.client}>Clients Say</span></h2>
      </div>

      <div className={styles.testimonialsGrid}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <div className={styles.starsContainer}>
              {renderStars(testimonial.stars)}
            </div>
            <i className={styles.testimonialQuote}>"{testimonial.quote}"</i>
            <div className={styles.testimonialAuthorInfo}>
              <div className={styles.authorInitials}>{testimonial.initials}</div>
              <div>
                <p className={styles.authorName}>{testimonial.name}</p>
                <p className={styles.authorTitle}>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials;