/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/profile': { page: '/profile' },
      // Add more custom routes here
    };
  },
  distDir: 'out',
  // swcMinify: true,
}

module.exports = nextConfig
