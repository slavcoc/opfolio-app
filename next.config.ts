import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath:isProduction ? '/opfolio-app' : '',
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
