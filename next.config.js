/** @type {import('next').NextConfig} */
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const basePath = configuredBasePath === '/' ? '' : configuredBasePath.replace(/\/$/, '');

const nextConfig = {
  output: 'export',
  // GitHub Pages serves static routes as directories (for example /egg/).
  // This keeps links and refreshes working without server-side rewrites.
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.100.225', '192.168.*.*'],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
