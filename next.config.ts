import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is fully static: Cloudflare Workers serves `out/` as assets (see
  // wrangler.jsonc). Without this, `next build` writes only `.next/` and the
  // deploy has nothing to publish.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
