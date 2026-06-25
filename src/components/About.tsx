"use client";

import AnimatedSection, { StaggerContainer } from "./ui/AnimatedSection";
import { profile, experiences } from "@/data/profile";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`section section--alt`} id="about" aria-label="About">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-eyebrow">// about me</span>
            <h2 className="section-title">
              The Person Behind the <span className="gradient-text">Code</span>
            </h2>
            <p className="section-subtitle">
              A decade of turning complex business problems into elegant technical solutions.
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {/* Left: Avatar + Quick Info */}
          <AnimatedSection direction="left" className={styles.avatarCol}>
            <div className={styles.avatarCard}>
              <div className={styles.avatarWrapper}>
                {/* Abstract avatar / monogram */}
                <div className={styles.avatar}>
                  <span>MA</span>
                </div>
                <div className={styles.avatarRing} aria-hidden="true" />
                <div className={styles.avatarRing2} aria-hidden="true" />
              </div>

              <div className={styles.quickInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <span className={styles.infoLabel}>Location</span>
                    <span className={styles.infoValue}>Karachi, Pakistan</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>✈️</span>
                  <div>
                    <span className={styles.infoLabel}>Relocation</span>
                    <span className={styles.infoValue}>Open Worldwide</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>🌐</span>
                  <div>
                    <span className={styles.infoLabel}>Languages</span>
                    <span className={styles.infoValue}>English · Urdu</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>⚡</span>
                  <div>
                    <span className={styles.infoLabel}>Availability</span>
                    <span className={`${styles.infoValue} ${styles.available}`}>
                      <span className="pulse-dot" style={{ display: "inline-block", marginRight: 6 }} />
                      Immediately Available
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="/cv.pdf"
                download="Muhammad_Ashraf_Ali_CV.pdf"
                className={`btn btn--primary ${styles.downloadBtn}`}
                id="about-download-cv"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Full CV
              </a>
            </div>
          </AnimatedSection>

          {/* Right: Bio + Experience Timeline */}
          <AnimatedSection direction="right" className={styles.bioCol}>
            {/* Bio */}
            <div className={styles.bio}>
              <p>{profile.summary}</p>
              <p style={{ marginTop: "1rem" }}>
                My development style — <strong>Vibe Coding</strong> — leverages AI-assisted tools like{" "}
                <strong>Cursor IDE, GitHub Copilot, and Claude AI</strong> to rapidly deliver
                production-ready applications. I also bring creative value as a{" "}
                <strong>DaVinci Resolve video editor</strong>, producing corporate and social media content.
              </p>
            </div>

            {/* Visa / Sponsorship badges */}
            <div className={styles.visaBadges}>
              <span className={styles.visaLabel}>Open to visa sponsorship:</span>
              <div className={styles.visaList}>
                {profile.availability.visas.map((v) => (
                  <span key={v} className="badge badge--indigo">{v}</span>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className={styles.timeline}>
              <h3 className={styles.timelineTitle}>Professional Journey</h3>
              {experiences.map((exp, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot}>
                    {exp.current && <span className={styles.currentDot} />}
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <div>
                        <h4 className={styles.jobTitle}>{exp.title}</h4>
                        <span className={styles.company}>{exp.company}</span>
                        <span className={styles.location}>{exp.location}</span>
                      </div>
                      <span className={`badge ${exp.current ? "badge--green" : "badge--indigo"}`}>
                        {exp.period}
                      </span>
                    </div>
                    <ul className={styles.bullets}>
                      {exp.bullets.slice(0, 2).map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className={styles.education}>
              <span className={styles.eduIcon}>🎓</span>
              <div>
                <h4>Bachelor of Commerce (B.Com)</h4>
                <span>University of Karachi · 2005</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
