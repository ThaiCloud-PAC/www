import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is fully static and ships to Azure Static Web Apps, whose workflow
  // uploads `out/` — without this, `next build` writes only `.next/` and the
  // deploy has nothing to publish.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
