import type { NextConfig } from "next";

// Set by .github/workflows/deploy.yml so links resolve under
// https://tbbrady33.github.io/FamReunionWebsite/. Empty locally, so
// `npm run dev` still serves from the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
