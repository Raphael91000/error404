/** @type {import('next').NextConfig} */
const nextConfig = {
  // Commenté temporairement pour le développement - décommentez pour le build de production
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Forcer l'utilisation de Webpack au lieu de Turbopack
  experimental: {
    turbo: undefined,
  },
};

module.exports = nextConfig;
