import sitemap from '@/app/sitemap';

export const dynamic = 'force-static';

// Google also accepts a UTF-8 plain text sitemap, one absolute URL per line.
// Use the same source as XML so discovery fallbacks cannot drift.
export function GET() {
  return new Response(`${sitemap().map(page => page.url).join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
