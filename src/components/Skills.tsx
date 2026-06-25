"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./ui/AnimatedSection";
import { skillGroups } from "@/data/profile";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className="section" id="skills" aria-label="Skills">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-eyebrow">// expertise</span>
            <h2 className="section-title">
              Skills &amp; <span className="gradient-text">Technologies</span>
            </h2>
            <p className="section-subtitle">
              A versatile toolkit spanning business analysis, database architecture, full-stack development, and creative production.
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {skillGroups.map((group, gi) => (
            <SkillCard key={group.category} group={group} index={gi} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  group,
  index,
}: {
  group: (typeof skillGroups)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={`card ${styles.card}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.icon} role="img" aria-label={group.category}>
          {group.icon}
        </span>
        <h3 className={styles.categoryTitle}>{group.category}</h3>
      </div>
      <div className={styles.skills}>
        {group.skills.map((skill, si) => (
          <motion.span
            key={skill}
            className={`badge badge--indigo ${styles.skillBadge}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.3,
              delay: index * 0.08 + si * 0.05,
              ease: "backOut",
            }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
