/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    domains: ['images.unsplash.com'],
    unoptimized: true 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  output: 'export',
  distDir: 'out',
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeFonts: true,
    optimizeImages: true
  }
};

module.exports = nextConfig;