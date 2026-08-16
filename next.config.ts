import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Hides the floating dev badge that overlaps the sidebar controls in local dev.
  devIndicators: false,
};

export default nextConfig;
