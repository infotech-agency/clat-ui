/** @type {import('next').NextConfig} */
const nextConfig = {
   typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // images: { unoptimized: true },
   images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // sab domains allow, agar exact domain pata nahi
      },
    ],
  },
};

module.exports = nextConfig;
