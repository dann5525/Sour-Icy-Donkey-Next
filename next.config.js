/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  distDir: 'out',
  // swcMinify: true,
}

module.exports = nextConfig
