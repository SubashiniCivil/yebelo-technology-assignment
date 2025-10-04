import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Enable listening on all interfaces
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;

