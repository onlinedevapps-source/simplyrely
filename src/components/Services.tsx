"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import { services } from "@/data/profile";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className="section section--alt" id="services" aria-label="Services">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-eyebrow">// work with me</span>
            <h2 className="section-title">
              Services &amp; <span className="gradient-text">Engagement Models</span>
            </h2>
            <p className="section-subtitle">
              Flexible engagement options tailored to your needs — contract, remote, or full-time with relocation.
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <AnimatedSection delay={0.3}>
          <div className={styles.cta}>
            <p className={styles.ctaText}>
              Not sure which model fits? Let&apos;s talk and figure it out together.
            </p>
            <a href="#contact" className="btn btn--primary" id="services-contact-cta">
              Get in Touch
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const colorMap = {
    indigo: {
      border: "var(--accent)",
      glow: "var(--shadow-glow-indigo)",
      badge: "badge--indigo",
      btn: "btn--primary",
    },
    cyan: {
      border: "var(--accent-cyan)",
      glow: "var(--shadow-glow-cyan)",
      badge: "badge--cyan",
      btn: "btn--ghost",
    },
    amber: {
      border: "var(--accent-amber)",
      glow: "var(--shadow-glow-amber)",
      badge: "badge--amber",
      btn: "btn--ghost",
    },
  };

  const colors = colorMap[service.color];

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${service.highlighted ? styles.highlighted : ""}`}
      style={
        service.highlighted
          ? { borderColor: colors.border, boxShadow: colors.glow }
          : {}
      }
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      {service.highlighted && (
        <div className={styles.popularBadge}>⭐ Most Popular</div>
      )}

      <div className={styles.icon} role="img" aria-label={service.title}>
        {service.icon}
      </div>

      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{service.title}</h3>
        <span className={`badge ${colors.badge}`}>{service.subtitle}</span>
      </div>

      <p className={styles.description}>{service.description}</p>

      <ul className={styles.features} role="list">
        {service.features.map((f) => (
          <li key={f} className={styles.feature}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`btn ${service.highlighted ? "btn--primary" : "btn--secondary"} ${styles.ctaBtn}`}
        id={`service-cta-${service.id}`}
      >
        {service.cta}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </motion.div>
  );
}
