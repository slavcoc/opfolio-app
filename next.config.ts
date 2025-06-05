import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.PAGES_BASE_PATH,
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
