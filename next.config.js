/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.100.225', '192.168.*.*'],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
