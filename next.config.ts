import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Required for Cloudflare Pages static site generation
  images: {
    unoptimized: true, // Required for static export
  }
};

export default nextConfig;
