import sitemap from '@/app/sitemap';
export const dynamic = 'force-static';
// Minimal XML fallback shares the canonical inventory with the multilingual sitemap.
export function GET() {
  const escapeXml = (value: string) => value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[char]!));
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap().map(page => `  <url><loc>${escapeXml(page.url)}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
