import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ashraf Ali | Business Analyst · Full-Stack Developer · Database Architect",
  description:
    "Results-driven Business Analyst and Solution Architect with 10+ years of experience. Available for remote & relocation opportunities worldwide. Expert in SQL, PostgreSQL, React, and AI-assisted full-stack development.",
  keywords: [
    "Business Analyst",
    "Database Architect",
    "Full-Stack Developer",
    "SQL Expert",
    "PostgreSQL",
    "React Developer",
    "Remote Work",
    "Visa Sponsorship",
    "Muhammad Ashraf Ali",
    "Vibe Coder",
  ],
  authors: [{ name: "Muhammad Ashraf Ali", url: "mailto:onlinedevapps@gmail.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadashrafali.dev",
    title: "Muhammad Ashraf Ali | Business Analyst · Full-Stack Developer",
    description:
      "10+ years bridging business logic with technical excellence. Open to remote & relocation worldwide.",
    siteName: "Muhammad Ashraf Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ashraf Ali | Portfolio & Services",
    description: "Business Analyst · Database Architect · Full-Stack Developer. Open to remote & relocation.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
