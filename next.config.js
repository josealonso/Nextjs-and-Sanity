/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
    // "react/no-unescaped-entities": "off",
  }
}

module.exports = nextConfig
