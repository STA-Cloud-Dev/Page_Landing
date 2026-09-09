const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const basePath = configuredBasePath === '/' ? '' : configuredBasePath.replace(/\/$/, '');

export function sitePath(pathname = '/') {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${basePath}${normalizedPath}` || '/';
}

export { basePath };
