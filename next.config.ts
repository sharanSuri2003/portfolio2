import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // The dev-tools badge paints a stray dark disc into gauntlet captures — off.
  devIndicators: false,
};

export default nextConfig;
