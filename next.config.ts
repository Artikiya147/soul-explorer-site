import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { dev }) => {
    // This project lives under ~/Documents, which iCloud Drive syncs live.
    // iCloud races webpack's persistent cache writes in .next/cache (rapid
    // temp-file renames), corrupting the dev build. Disabling the cache in
    // dev avoids that entirely; production builds on Vercel are unaffected.
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
