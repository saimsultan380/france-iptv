import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/contact-iptv-france",
        destination: "/contact-us/",
        permanent: true,
      },
      {
        source: "/contact-iptv-france/",
        destination: "/contact-us/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
