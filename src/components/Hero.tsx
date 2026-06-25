"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { profile } from "@/data/profile";
import styles from "./Hero.module.css";

const TYPING_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_BEFORE_DELETE = 2000;
const PAUSE_BEFORE_TYPE = 500;

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const title = profile.titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === title) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_BEFORE_DELETE);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % profile.titles.length);
      }, PAUSE_BEFORE_TYPE);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayText(title.slice(0, displayText.length - 1)),
        DELETE_SPEED
      );
    } else {
      timeout = setTimeout(
        () => setDisplayText(title.slice(0, displayText.length + 1)),
        TYPING_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Background orbs */}
      <div className={`bg-orb bg-orb--indigo ${styles.orb1}`} aria-hidden="true" />
      <div className={`bg-orb bg-orb--cyan ${styles.orb2}`} aria-hidden="true" />
      <div className={`bg-orb bg-orb--amber ${styles.orb3}`} aria-hidden="true" />

      {/* Mesh grid overlay */}
      <div className={styles.grid} aria-hidden="true" />

      <div className="container">
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className={styles.badgeRow}>
            <span className="badge badge--green">
              <span className="pulse-dot" />
              Available for Remote &amp; Relocation
            </span>
            <span className="badge badge--indigo">Open to Visa Sponsorship</span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants} className={styles.name}>
            Hi, I&apos;m{" "}
            <span className="gradient-text">Muhammad Ashraf Ali</span>
          </motion.h1>

          {/* Typewriter title */}
          <motion.div variants={itemVariants} className={styles.titleRow}>
            <span className={styles.titleLabel}>I am a </span>
            <span className={styles.typewriter} aria-live="polite" aria-atomic="true">
              {displayText}
              <span className={styles.cursor} aria-hidden="true">|</span>
            </span>
          </motion.div>

          {/* Summary */}
          <motion.p variants={itemVariants} className={styles.summary}>
            Results-driven analyst and developer with <strong>10+ years</strong> bridging business
            requirements with technical solutions. Expert in SQL, PostgreSQL, React, and AI-assisted
            full-stack development.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className={styles.ctas}>
            <a href="#projects" className="btn btn--primary" id="hero-view-work">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              View My Work
            </a>
            <a href="#contact" className="btn btn--secondary" id="hero-hire-me">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Hire Me
            </a>
            <a
              href="/cv.pdf"
              download="Muhammad_Ashraf_Ali_CV.pdf"
              className="btn btn--ghost"
              id="hero-download-cv"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className={styles.stats}>
            {profile.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          aria-hidden="true"
        >
          <span className={styles.scrollText}>Scroll</span>
          <motion.div
            className={styles.scrollDot}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
