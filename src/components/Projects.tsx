"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import { projects } from "@/data/profile";
import styles from "./Projects.module.css";

type FilterType = "all" | "webapp" | "desktop" | "website";

const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "webapp" },
  { label: "Desktop", value: "desktop" },
  { label: "Websites", value: "website" },
];

const techColors: Record<string, string> = {
  PostgreSQL: "badge--cyan",
  React: "badge--indigo",
  Python: "badge--amber",
  SQL: "badge--cyan",
  "Power BI": "badge--amber",
  "Claude AI": "badge--indigo",
  "Next.js": "badge--indigo",
  "Chart.js": "badge--amber",
  HTML: "badge--indigo",
  CSS: "badge--cyan",
  JavaScript: "badge--amber",
  PowerShell: "badge--indigo",
  SQLite: "badge--cyan",
  "Windows API": "badge--amber",
  "Framer Motion": "badge--indigo",
  "CSS Modules": "badge--cyan",
  "REST APIs": "badge--amber",
  "Cursor IDE": "badge--indigo",
  "Responsive Design": "badge--cyan",
  "Oracle DB": "badge--amber",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filtered =
    activeFilter === "all" ? projects : projects.filter((p) => p.type === activeFilter);

  return (
    <section className="section" id="projects" aria-label="Projects">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-eyebrow">// portfolio</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              A selection of production apps, prototypes, and tools — all built through AI-assisted vibe coding.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1}>
          <div className={styles.filters} role="tablist" aria-label="Project filters">
            {filters.map((f) => (
              <button
                key={f.value}
                role="tab"
                aria-selected={activeFilter === f.value}
                className={`${styles.filterBtn} ${activeFilter === f.value ? styles.filterActive : ""}`}
                onClick={() => setActiveFilter(f.value)}
                id={`filter-${f.value}`}
              >
                {f.label}
                <span className={styles.filterCount}>
                  {f.value === "all"
                    ? projects.length
                    : projects.filter((p) => p.type === f.value).length}
                </span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const typeIcons: Record<string, string> = {
    webapp: "🌐",
    desktop: "🖥️",
    website: "🎨",
  };

  return (
    <motion.article
      className={styles.card}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      aria-label={project.title}
    >
      {/* Card top: type icon + status */}
      <div className={styles.cardMeta}>
        <span className={styles.typeIcon} role="img" aria-label={project.type}>
          {typeIcons[project.type]}
        </span>
        <div className={styles.metaRight}>
          <span className={`badge ${project.status === "live" ? "badge--green" : "badge--amber"}`}>
            {project.status === "live" ? "● Live" : "◐ Prototype"}
          </span>
          <span className={styles.year}>{project.year}</span>
        </div>
      </div>

      {/* Title */}
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <p className={styles.description}>{project.description}</p>
      </div>

      {/* Highlights */}
      <div className={styles.highlights}>
        {project.highlights.map((h) => (
          <span key={h} className={styles.highlight}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden="true">
              <circle cx="12" cy="12" r="8" />
            </svg>
            {h}
          </span>
        ))}
      </div>

      {/* Tech stack */}
      <div className={styles.tech}>
        {project.tech.map((t) => (
          <span key={t} className={`badge ${techColors[t] ?? "badge--indigo"}`}>
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className={styles.links}>
        <a
          href={project.liveUrl}
          className={`btn btn--primary ${styles.linkBtn}`}
          id={`project-live-${project.id}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} live`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          className={`btn btn--secondary ${styles.linkBtn}`}
          id={`project-github-${project.id}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </motion.article>
  );
}
