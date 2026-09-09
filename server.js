const http = require('node:http');
const childProcess = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const { URL } = require('node:url');

const publicRoot = path.resolve(__dirname, 'out');
const port = Number.parseInt(process.env.SERVER_PORT || process.env.PORT || '3000', 10);

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
};

const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; script-src-attr 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https://portal.stacloud.dev https://discord.gg https://zalo.me https://m.me; object-src 'none'; frame-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; manifest-src 'self'; worker-src 'self' blob:; upgrade-insecure-requests",
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
};

function getGitCommit() {
  try {
    return childProcess.execFileSync('git', ['rev-parse', 'HEAD'], {
      cwd: __dirname,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return '';
  }
}

function ensureProductionBuild() {
  const markerPath = path.join(publicRoot, '.stacloud-build-commit');
  const currentCommit = getGitCommit();
  let builtCommit = '';

  try {
    builtCommit = fs.readFileSync(markerPath, 'utf8').trim();
  } catch {
    // A missing marker is normal for a manually uploaded build.
  }

  const needsBuild = !fs.existsSync(path.join(publicRoot, 'index.html')) ||
    (Boolean(currentCommit) && currentCommit !== builtCommit);

  if (!needsBuild) {
    return;
  }

  console.log('Production build missing or outdated. Running npm run build...');
  const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const result = childProcess.spawnSync(npmCommand, ['run', 'build'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  if (result.error || result.status !== 0 || !fs.existsSync(path.join(publicRoot, 'index.html'))) {
    if (result.error) {
      console.error(`Build command error: ${result.error.message}`);
    }
    console.error('Production build failed. Run npm run build and restart the server.');
    process.exit(1);
  }

  if (currentCommit) {
    fs.writeFileSync(markerPath, `${currentCommit}\n`, 'utf8');
  }
}

function getSafePath(pathname) {
  let decodedPath;

  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    return null;
  }

  const segments = decodedPath.split('/').filter(Boolean);
  if (segments.some((segment) => segment === '.' || segment === '..' || segment.includes('\0'))) {
    return null;
  }

  const candidate = path.resolve(publicRoot, ...segments);
  if (candidate !== publicRoot && !candidate.startsWith(`${publicRoot}${path.sep}`)) {
    return null;
  }

  return { candidate, segments, hasExtension: Boolean(path.extname(decodedPath)) };
}

function getCandidates(safePath) {
  const { candidate, segments, hasExtension } = safePath;
  const candidates = [];

  if (hasExtension) {
    candidates.push(candidate);
  } else {
    candidates.push(path.join(candidate, 'index.html'));
    candidates.push(`${candidate}.html`);
    candidates.push(path.join(candidate, 'index.htm'));
  }

  if (segments.length === 0) {
    candidates.unshift(path.join(publicRoot, 'index.html'));
  }

  return candidates;
}

function findFile(safePath) {
  for (const candidate of getCandidates(safePath)) {
    try {
      if (fs.statSync(candidate).isFile()) {
        return candidate;
      }
    } catch {
      // Continue to the next static export candidate.
    }
  }

  return null;
}

function sendFile(request, response, filePath, statusCode = 200) {
  const extension = path.extname(filePath).toLowerCase();
  const headers = {
    ...securityHeaders,
    'Cache-Control': extension === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
    'Content-Type': mimeTypes[extension] || 'application/octet-stream',
  };

  response.writeHead(statusCode, headers);
  if (request.method !== 'HEAD') {
    fs.createReadStream(filePath).pipe(response);
  } else {
    response.end();
  }
}

ensureProductionBuild();

const server = http.createServer((request, response) => {
  if (!['GET', 'HEAD'].includes(request.method || '')) {
    response.writeHead(405, { ...securityHeaders, Allow: 'GET, HEAD' });
    response.end('Method Not Allowed');
    return;
  }

  let pathname;
  try {
    pathname = new URL(request.url || '/', 'http://stacloud.local').pathname;
  } catch {
    response.writeHead(400, securityHeaders);
    response.end('Bad Request');
    return;
  }

  const safePath = getSafePath(pathname);
  if (!safePath) {
    response.writeHead(400, securityHeaders);
    response.end('Bad Request');
    return;
  }

  const filePath = findFile(safePath) || path.join(publicRoot, '_not-found.html');
  if (filePath.endsWith('_not-found.html') && !fs.existsSync(filePath)) {
    response.writeHead(404, { ...securityHeaders, 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not Found');
    return;
  }

  sendFile(request, response, filePath, filePath.endsWith('_not-found.html') ? 404 : 200);
});

server.listen(Number.isNaN(port) ? 3000 : port, '0.0.0.0', () => {
  console.log(`STACloud static server listening on port ${Number.isNaN(port) ? 3000 : port}`);
});

function shutdown() {
  server.close(() => process.exit(0));
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
