// src/data/profile.ts
// Central data source for the entire portfolio site

export const profile = {
  name: "Muhammad Ashraf Ali",
  shortName: "M. Ashraf Ali",
  initials: "MA",
  titles: [
    "Business Analyst",
    "Database Architect",
    "Full-Stack Developer",
    "Solution Architect",
    "Vibe Coder",
  ],
  tagline: "Bridging Business Logic with Technical Excellence",
  summary:
    "Results-driven Business Analyst and Solution Architect with 10+ years of experience bridging business requirements with technical implementation. Proven track record in SQL-based reporting, database architecture (PostgreSQL, Oracle), and vibe-coded full-stack application development — building production-ready websites, web apps, desktop tools, and automation scripts using AI-assisted development workflows.",
  contact: {
    email: "onlinedevapps@gmail.com",
    phone: "+92 336 4568688",
    usPhone: "+1 818 732 0442",
    location: "Karachi, Pakistan",
    linkedin: "https://linkedin.com/in/muhammad-ashraf-ali",
    github: "https://github.com/onlinedevapps",
  },
  availability: {
    status: "open",
    label: "Available for Remote & Relocation",
    visas: ["AEWV (New Zealand)", "H-1B (USA)", "UK Skilled Worker", "Canada LMIA", "Australia TSS 482"],
  },
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Employee Records Managed" },
    { value: "40%", label: "Reporting Efficiency Gain" },
    { value: "3", label: "Countries Worked" },
  ],
};

export const skillGroups = [
  {
    category: "Business Analysis",
    icon: "📊",
    skills: [
      "Requirements Gathering",
      "BRD Authoring",
      "UAT & Test Case Design",
      "Data Reconciliation",
      "Financial Reporting",
      "Stakeholder Communication",
    ],
  },
  {
    category: "Data & Databases",
    icon: "🗄️",
    skills: [
      "SQL Query Design & Optimization",
      "PostgreSQL",
      "Oracle DB",
      "TOAD for Oracle",
      "Business Objects (BO)",
      "Oracle ALM",
    ],
  },
  {
    category: "Full-Stack Development",
    icon: "💻",
    skills: [
      "HTML / CSS / JavaScript",
      "React",
      "Next.js",
      "Python",
      "PostgreSQL Schema Design",
      "API Integration",
      "Windows Desktop Apps",
    ],
  },
  {
    category: "BI & Reporting",
    icon: "📈",
    skills: ["Power BI", "Tableau", "Dashboard Development", "KPI Reporting", "Data Visualization"],
  },
  {
    category: "AI & Automation",
    icon: "🤖",
    skills: [
      "Vibe Coding",
      "Prompt Engineering",
      "GitHub Copilot",
      "Cursor IDE",
      "Claude AI",
      "PowerShell Scripting",
    ],
  },
  {
    category: "Video & Content",
    icon: "🎬",
    skills: [
      "DaVinci Resolve",
      "Color Grading",
      "Audio Sync",
      "Motion Graphics",
      "Social Media Content",
      "Reel Production",
    ],
  },
];

export const services = [
  {
    id: "contract",
    icon: "🤝",
    title: "Contract / Freelance",
    subtitle: "Short-term · Outcome-focused",
    description:
      "Bring me in for a defined project or sprint. I deliver fast, quality work — from SQL reporting systems and database architecture to full-stack web apps and automation scripts.",
    features: [
      "Fixed-scope deliverables",
      "Transparent milestone billing",
      "NDA-ready & compliance-aware",
      "Rapid onboarding",
    ],
    cta: "Start a Project",
    color: "indigo" as const,
  },
  {
    id: "remote",
    icon: "🌍",
    title: "Remote Full-time",
    subtitle: "Fully Remote · Async-friendly",
    description:
      "Available for full-time remote positions globally. Experienced in distributed teams, async communication, and delivering enterprise-grade results without being in the same timezone.",
    features: [
      "Available immediately",
      "Fluent in English & Urdu",
      "Tools: Slack, Jira, Notion, GitHub",
      "Overlap with US / EU / APAC hours",
    ],
    cta: "Hire Remote",
    color: "cyan" as const,
    highlighted: true,
  },
  {
    id: "relocation",
    icon: "✈️",
    title: "Full-time + Relocation",
    subtitle: "Open to Relocate Worldwide",
    description:
      "Actively seeking visa-sponsored full-time positions. Eligible and prepared to relocate to New Zealand (AEWV), USA (H-1B), UK, Canada, or Australia immediately upon visa processing.",
    features: [
      "AEWV / H-1B / UK Skilled Worker ready",
      "Available immediately post-visa",
      "No relocation package required",
      "Global culture adaptability",
    ],
    cta: "Sponsor & Hire",
    color: "amber" as const,
  },
];

export const experiences = [
  {
    title: "Business / Report Analyst",
    company: "UBC RAGS INC",
    location: "Houston, TX (Remote)",
    period: "Mar 2023 – Present",
    current: true,
    bullets: [
      "Develop and optimize complex SQL queries against inventory databases to generate critical operational reports",
      "Produce Timesheet Reports for warehouse payroll, ensuring data accuracy and integrity across 500+ employee records",
      "Perform Data Reconciliation and QA on employee salary reports, identifying and resolving discrepancies",
      "Automate recurring reporting workflows, reducing manual effort by 40%",
    ],
  },
  {
    title: "Business Analyst",
    company: "Union Bank of California",
    location: "Remote (3rd Party Contract)",
    period: "Jun 2021 – May 2023",
    current: false,
    bullets: [
      "Developed and maintained complex SQL reports using TOAD for Oracle for business intelligence and project documentation",
      "Conducted UAT and authored detailed Test Cases based on business requirements to ensure software quality",
      "Utilized Business Objects (BO) for data extraction and stakeholder communication on profitability trends",
      "Collaborated across teams using Oracle ALM throughout the full application development lifecycle",
    ],
  },
  {
    title: "Customer Service Representative – Fraud & Operations",
    company: "Majid Al Futtaim (MAF) Finance",
    location: "Dubai, UAE",
    period: "Jun 2013 – Oct 2020",
    current: false,
    bullets: [
      "Investigated fraudulent transactions by analyzing database records and transaction logs, reducing fraud risk",
      "Supported back-office operations and trained clients on advanced banking systems",
      "Provided data-backed financial risk assessments to management and compliance teams",
    ],
  },
  {
    title: "Operations Executive",
    company: "Dynamic Freight & Logistics",
    location: "Sharjah, UAE",
    period: "Dec 2011 – Jun 2013",
    current: false,
    bullets: [
      "Coordinated logistics operations, handling RFQs and documenting data requirements for freight systems",
      "Conducted risk assessments to ensure timely delivery execution, relying on operational database accuracy",
    ],
  },
];

export const projects = [
  {
    id: "payroll-system",
    title: "AI-Powered Attendance & Payroll System",
    subtitle: "Full-Stack Web App",
    type: "webapp" as const,
    year: "2024",
    status: "live" as const,
    description:
      "Designed full system architecture for employee attendance tracking and payroll calculation. Vibe-coded complete application using AI-assisted tools (Cursor, Claude) — delivered from architecture to deployment with automated payroll calculations, audit trails, and reporting dashboards.",
    tech: ["PostgreSQL", "React", "Python", "Claude AI", "Cursor IDE"],
    highlights: ["500+ employee records", "Automated payroll calc", "Audit trail & dashboards"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "bank-cashflow",
    title: "Bank Cash Flow Management App",
    subtitle: "Full-Stack Web App",
    type: "webapp" as const,
    year: "2023–2024",
    status: "live" as const,
    description:
      "Architected a financial tracking system for multi-branch bank transaction management. Delivered real-time cash flow visibility dashboard that reduced manual reporting effort by ~35%.",
    tech: ["PostgreSQL", "React", "SQL", "Power BI"],
    highlights: ["Multi-branch tracking", "Real-time dashboard", "35% effort reduction"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "windows-tools",
    title: "Windows Desktop Automation Suite",
    subtitle: "Windows Application",
    type: "desktop" as const,
    year: "2023–2025",
    status: "live" as const,
    description:
      "A suite of Windows desktop applications for data processing, file management, and workflow automation. Built Python/PowerShell scripts for recurring operational tasks, reducing manual effort significantly.",
    tech: ["Python", "PowerShell", "Windows API", "SQLite"],
    highlights: ["File management tools", "Workflow automation", "Data processing pipelines"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "website-1",
    title: "Business Portfolio Website",
    subtitle: "Website",
    type: "website" as const,
    year: "2024",
    status: "prototype" as const,
    description:
      "A responsive business portfolio website built with modern HTML/CSS/JS. Features smooth animations, dark mode, and a contact form — serving as a template for client projects.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    highlights: ["Dark mode", "Contact form", "Fully responsive"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "website-2",
    title: "Corporate Services Landing Page",
    subtitle: "Website",
    type: "website" as const,
    year: "2024",
    status: "prototype" as const,
    description:
      "A modern landing page for a corporate services company. Includes service sections, testimonials, pricing, and animated call-to-action components.",
    tech: ["React", "CSS Modules", "Framer Motion"],
    highlights: ["Services showcase", "Animated sections", "Lead generation form"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "website-3",
    title: "Analytics Dashboard UI",
    subtitle: "Website / UI Prototype",
    type: "website" as const,
    year: "2025",
    status: "prototype" as const,
    description:
      "A sophisticated analytics dashboard UI prototype featuring real-time chart visualizations, KPI cards, and drill-down reporting — built as a front-end template for BI projects.",
    tech: ["React", "Chart.js", "CSS", "REST APIs"],
    highlights: ["KPI cards", "Chart visualizations", "Drill-down reports"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const testimonials = [
  {
    name: "John Martinez",
    title: "Operations Manager",
    company: "UBC RAGS INC",
    quote:
      "Muhammad's SQL optimization work was outstanding. He reduced our reporting time by 40% and brought clarity to data that had been messy for years. Highly recommend him for any data-heavy project.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    title: "Project Lead",
    company: "Union Bank of California",
    quote:
      "A rare combination of business acumen and technical depth. Muhammad delivered UAT documentation and SQL reports that exceeded our quality standards every sprint.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashidi",
    title: "VP Finance",
    company: "MAF Finance",
    quote:
      "Muhammad's fraud investigation analysis was instrumental in reducing our risk exposure. His database analytical skills are exceptional.",
    rating: 5,
  },
];
