import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local placeholder assets are SVG; allowed here because they are
    // trusted static files bundled with the app, not user uploads.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
