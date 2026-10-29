/** @type {import('next').NextConfig} */
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const basePath = configuredBasePath === '/' ? '' : configuredBasePath.replace(/\/$/, '');

const nextConfig = {
  output: 'export',
  // Ship styles with the static HTML so slow mobile connections do not wait
  // for a separate render-blocking stylesheet before showing the Hero text.
  experimental: { inlineCss: true },
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
