"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer } from "./ui/AnimatedSection";
import styles from "./Blog.module.css";

// Temporary placeholder data until MDX is implemented
const recentPosts = [
  {
    slug: "vibe-coding-ai-tools",
    title: "Vibe Coding: How I Build Production Apps with AI",
    date: "Coming Soon",
    category: "Development",
    excerpt: "An inside look into my workflow using Cursor IDE, Claude, and GitHub Copilot to accelerate full-stack development without compromising quality.",
    readTime: "5 min read",
  },
  {
    slug: "sql-optimization-techniques",
    title: "Advanced SQL Optimization for Financial Reporting",
    date: "Coming Soon",
    category: "Database",
    excerpt: "Techniques for reducing query execution time on large datasets, based on my experience optimizing timesheet and cash flow reports.",
    readTime: "8 min read",
  },
  {
    slug: "transitioning-to-nextjs-14",
    title: "Why Next.js 14 App Router is Perfect for Portfolios",
    date: "Coming Soon",
    category: "Architecture",
    excerpt: "Exploring the benefits of server components, static exports, and simplified routing in the latest Next.js release.",
    readTime: "4 min read",
  }
];

export default function Blog() {
  return (
    <section className="section" id="blog" aria-label="Blog">
      <div className="container">
        <AnimatedSection>
          <div className={styles.header}>
            <div className={styles.headerText}>
              <span className="section-eyebrow">// insights & articles</span>
              <h2 className="section-title">
                Latest from the <span className="gradient-text">Blog</span>
              </h2>
              <p className="section-subtitle">
                Thoughts on software architecture, database optimization, and the future of AI-assisted coding.
              </p>
            </div>
            <Link href="/blog" className="btn btn--secondary" id="blog-view-all">
              View All Posts
            </Link>
          </div>
        </AnimatedSection>

        <StaggerContainer className={styles.grid}>
          {recentPosts.map((post, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={`badge badge--indigo`}>{post.category}</span>
                <span className={styles.date}>{post.date}</span>
              </div>
              
              <h3 className={styles.title}>
                <Link href={`/blog/${post.slug}`} className={styles.link} id={`blog-post-${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              
              <p className={styles.excerpt}>{post.excerpt}</p>
              
              <div className={styles.cardFooter}>
                <span className={styles.readTime}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {post.readTime}
                </span>
                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
