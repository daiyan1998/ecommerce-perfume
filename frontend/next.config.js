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
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: `${API_URL}/:path*`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
