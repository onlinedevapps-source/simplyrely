"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="Home">
              <span className={styles.logoIcon}>MA</span>
              <span className={styles.logoText}>Ashraf Ali</span>
            </Link>
            <p className={styles.tagline}>{profile.tagline}</p>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Navigation</h4>
              <ul className={styles.linksList}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Resources</h4>
              <ul className={styles.linksList}>
                <li><Link href="/blog">Blog</Link></li>
                <li><a href="/cv.pdf" download="Muhammad_Ashraf_Ali_CV.pdf">Download CV</a></li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Connect</h4>
              <ul className={styles.linksList}>
                <li><a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href={profile.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href={`mailto:${profile.contact.email}`}>Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          
          <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
            Back to Top
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
