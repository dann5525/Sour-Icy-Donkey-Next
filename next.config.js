/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  distDir: 'build',
  // swcMinify: true,
}

module.exports = nextConfig
