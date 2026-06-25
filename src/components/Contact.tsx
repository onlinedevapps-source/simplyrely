"use client";

import { useState } from "react";
import AnimatedSection from "./ui/AnimatedSection";
import { profile } from "@/data/profile";
import styles from "./Contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="section" id="contact" aria-label="Contact">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-eyebrow">// get in touch</span>
            <h2 className="section-title">
              Let&apos;s Build Something <span className="gradient-text">Great</span>
            </h2>
            <p className="section-subtitle">
              Whether you need a contract developer, a full-time remote team member, or are offering visa sponsorship — I&apos;m ready to talk.
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {/* Contact Info */}
          <AnimatedSection direction="left" className={styles.infoCol}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <p className={styles.infoDesc}>
                Fill out the form and I will get back to you within 24 hours. Alternatively, reach out directly via email or LinkedIn.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.detailItem}>
                  <div className={styles.iconWrapper}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.detailLabel}>Email</span>
                    <a href={`mailto:${profile.contact.email}`} className={styles.detailValue}>
                      {profile.contact.email}
                    </a>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <div className={styles.iconWrapper}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.detailLabel}>Phone</span>
                    <a href={`tel:${profile.contact.usPhone.replace(/\s+/g, '')}`} className={styles.detailValue}>
                      {profile.contact.usPhone} (US)
                    </a>
                    <br />
                    <a href={`tel:${profile.contact.phone.replace(/\s+/g, '')}`} className={styles.detailValue}>
                      {profile.contact.phone} (PK)
                    </a>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <div className={styles.iconWrapper}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.detailLabel}>Location</span>
                    <span className={styles.detailValue}>{profile.contact.location}</span>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <div className={styles.iconWrapper}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.detailLabel}>WhatsApp</span>
                    <a href={`https://wa.me/${profile.contact.usPhone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className={styles.detailValue}>
                      Direct Message (US)
                    </a>
                    <br />
                    <a href={`https://wa.me/${profile.contact.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className={styles.detailValue}>
                      Direct Message (PK)
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" className={styles.formCol}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className="grid-2">
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Full Name</label>
                  <input type="text" id="name" name="name" className={styles.input} required placeholder="John Doe" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input type="email" id="email" name="email" className={styles.input} required placeholder="john@example.com" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="engagementType" className={styles.label}>Engagement Type</label>
                <div className={styles.selectWrapper}>
                  <select id="engagementType" name="engagementType" className={styles.input} required defaultValue="">
                    <option value="" disabled>Select an option...</option>
                    <option value="contract">Contract / Freelance</option>
                    <option value="remote">Remote Full-time</option>
                    <option value="relocation">Full-time (with relocation / visa)</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" name="message" className={styles.textarea} required rows={5} placeholder="Tell me about your project or opportunity..."></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn--primary ${styles.submitBtn}`}
                disabled={status === "submitting" || status === "success"}
              >
                {status === "idle" && "Send Message"}
                {status === "submitting" && "Sending..."}
                {status === "success" && "Message Sent!"}
                {status === "error" && "Error. Try Again."}
              </button>

              {status === "success" && (
                <p className={styles.successMsg}>Thank you! I will get back to you shortly.</p>
              )}
              {status === "error" && (
                <p className={styles.errorMsg}>Something went wrong. Please email me directly.</p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
