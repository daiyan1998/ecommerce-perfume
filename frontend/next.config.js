/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL;
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    reactRoot: true,
  },
};

module.exports = nextConfig;
