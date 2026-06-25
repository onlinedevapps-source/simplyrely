"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import { testimonials } from "@/data/profile";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;
    
    // Duplicate content for infinite scroll
    const step = () => {
      if (!isHovered) {
        scrollPos += 0.5;
        if (scrollPos >= el.scrollWidth / 2) {
          scrollPos = 0;
        }
        el.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="section section--alt" id="testimonials" aria-label="Testimonials">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-eyebrow">// references</span>
            <h2 className="section-title">
              Client &amp; <span className="gradient-text">Colleague</span> Feedback
            </h2>
            <p className="section-subtitle">
              Don&apos;t just take my word for it. Here&apos;s what people I&apos;ve worked with have to say.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.2} direction="none">
        <div 
          className={styles.carouselContainer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left/Right fade gradients */}
          <div className={styles.fadeLeft} aria-hidden="true" />
          <div className={styles.fadeRight} aria-hidden="true" />

          <div className={styles.carousel} ref={scrollRef}>
            <div className={styles.carouselTrack}>
              {duplicatedTestimonials.map((testimonial, i) => (
                <div key={i} className={styles.card}>
                  {/* Quote Icon */}
                  <div className={styles.quoteIcon} aria-hidden="true">"</div>
                  
                  {/* Rating */}
                  <div className={styles.rating} aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < testimonial.rating ? "var(--accent-amber)" : "var(--border)"} stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>

                  <p className={styles.quote}>{testimonial.quote}</p>
                  
                  <div className={styles.author}>
                    <div className={styles.avatar}>
                      {/* Fallback initials if no image provided yet */}
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className={styles.name}>{testimonial.name}</h4>
                      <p className={styles.title}>{testimonial.title}, <span>{testimonial.company}</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
