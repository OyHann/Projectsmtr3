import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      domains: ['utfs.io'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sasai57lgq.ufs.sh",
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
