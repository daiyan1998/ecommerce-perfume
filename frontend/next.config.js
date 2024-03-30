/** @type {import('next').NextConfig} */
const API_URL = "https://ecommerce-sabbir.vercel.app/";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
