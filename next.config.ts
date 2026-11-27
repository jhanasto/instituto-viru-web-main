import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep local dev output separate from production and any stale dev server cache.
  distDir: process.env.NEXT_LOCAL_DIST_DIR
    ?? (process.env.NODE_ENV === "development" ? ".next-dev" : ".next"),
};

export default nextConfig;
