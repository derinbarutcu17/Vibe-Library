import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const isProd = process.env.NODE_ENV === 'production';
const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactCompiler: true,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
