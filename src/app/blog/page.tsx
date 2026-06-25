import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Blog | Muhammad Ashraf Ali",
  description: "Thoughts on software architecture, database optimization, and the future of AI-assisted coding.",
};

export default function BlogIndex() {
  return (
    <div className="section" style={{ minHeight: "80vh", paddingTop: "calc(var(--nav-height) + var(--space-12))" }}>
      <div className="container">
        <AnimatedSection>
          <Link href="/" className="btn btn--ghost" style={{ marginBottom: "var(--space-8)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Home
          </Link>
          
          <div className="section-header" style={{ textAlign: "left" }}>
            <span className="section-eyebrow">// Insights & Articles</span>
            <h1 className="section-title">
              The <span className="gradient-text">Blog</span>
            </h1>
            <p className="section-subtitle" style={{ marginLeft: 0 }}>
              Writing about full-stack development, database architecture, and vibe coding.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="card" style={{ textAlign: "center", padding: "var(--space-16) var(--space-8)" }}>
            <h2 style={{ marginBottom: "var(--space-4)", fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Coming Soon</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto" }}>
              I am currently setting up the MDX blog infrastructure. Stay tuned for articles on SQL optimization, building apps with Cursor and Claude, and more.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
