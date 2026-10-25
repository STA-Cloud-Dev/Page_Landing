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
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; script-src-attr 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https://portal.stacloud.eu.cc https://discord.gg https://zalo.me https://m.me; object-src 'none'; frame-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; manifest-src 'self'; worker-src 'self' blob:",
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

// Changes to source files and newly introduced policy pages must invalidate
// an existing static export even when the Git HEAD commit has not changed.
function hasNewerSourceThan(buildTime) {
  const inputs = ['app', 'components', 'lib', 'public', 'package.json', 'package-lock.json', 'next.config.js', 'server.js'];

  function scan(entryPath) {
    let stats;
    try {
      stats = fs.statSync(entryPath);
    } catch {
      return false;
    }

    if (stats.isFile()) return stats.mtimeMs > buildTime;
    if (!stats.isDirectory()) return false;

    return fs.readdirSync(entryPath, { withFileTypes: true }).some((entry) =>
      scan(path.join(entryPath, entry.name))
    );
  }

  return inputs.some((entry) => scan(path.join(__dirname, entry)));
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

  const indexPath = path.join(publicRoot, 'index.html');
  const policyPages = ['terms', 'privacy', 'sla', 'refund', 'security', 'cookies'];
  const buildTime = fs.existsSync(indexPath) ? fs.statSync(indexPath).mtimeMs : 0;
  const needsBuild = !buildTime ||
    policyPages.some((page) => !fs.existsSync(path.join(publicRoot, `${page}.html`))) ||
    hasNewerSourceThan(buildTime) ||
    (Boolean(currentCommit) && currentCommit !== builtCommit);

  if (!needsBuild) {
    return;
  }

  console.log('Production build missing or outdated. Running npm run build...');
  const isWindows = process.platform === 'win32';
  const buildCommand = isWindows ? process.env.ComSpec || 'cmd.exe' : 'npm';
  const buildArgs = isWindows ? ['/d', '/s', '/c', 'npm.cmd run build'] : ['run', 'build'];
  const result = childProcess.spawnSync(buildCommand, buildArgs, {
    cwd: __dirname,
    stdio: 'inherit',
  });

  if (result.error || result.status !== 0 || !fs.existsSync(indexPath)) {
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
  const isHttps = request.socket.encrypted ||
    request.headers['x-forwarded-proto']?.split(',')[0].trim() === 'https';
  const isVersionedAsset = filePath.includes(`${path.sep}_next${path.sep}static${path.sep}`);
  const isDocument = ['.html', '.xml', '.txt'].includes(extension);
  const headers = {
    ...securityHeaders,
    'Content-Security-Policy': securityHeaders['Content-Security-Policy'] +
      (isHttps ? '; upgrade-insecure-requests' : ''),
    ...(isHttps ? { 'Strict-Transport-Security': 'max-age=31536000' } : {}),
    'Cache-Control': isDocument ? 'no-cache' : isVersionedAsset
      ? 'public, max-age=31536000, immutable'
      : 'public, max-age=604800',
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
