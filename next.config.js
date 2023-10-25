/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  ignoreDuringBuilds: true,
};

module.exports = nextConfig;
