import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Check the shipped HTML, not just source metadata. Run after next build.
const output = fileURLToPath(new URL('../out/', import.meta.url));
const origin = 'https://stacloud.eu.cc';
const read = (file) => readFileSync(path.join(output, file), 'utf8');
const sitemap = read('sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(urls.length, 13, 'Review the public sitemap when routes change');
assert.ok(urls.includes(`${origin}/about/`), 'Missing factual brand/service page');
assert.ok(urls.includes(`${origin}/history/`), 'Missing brand history page');
assert.ok(urls.includes(`${origin}/vps-hosting/`), 'Missing VPS/hosting service page');
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
assert.deepEqual(read('sitemap.txt').trim().split(/\r?\n/), urls, 'Text sitemap must match XML exactly');
assert.equal(read('CNAME').trim(), 'stacloud.eu.cc');
assert.ok(read('robots.txt').includes(`Sitemap: ${origin}/sitemap.xml`));

for (const url of urls) {
  const parsed = new URL(url);
  assert.equal(parsed.origin, origin, `Wrong sitemap domain: ${url}`);
  assert.ok(parsed.pathname.endsWith('/'), `Noncanonical sitemap path: ${url}`);
  const html = read(path.join(parsed.pathname.slice(1), 'index.html'));
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `Expected one H1: ${url}`);
  const canonicals = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g)];
  assert.equal(canonicals.length, 1, `Expected one canonical: ${url}`);
  assert.equal(canonicals[0][1], url, `Canonical differs from sitemap: ${url}`);
  assert.ok(/<title>[^<]+<\/title>/.test(html), `Missing title: ${url}`);
  assert.ok(/<meta name="description" content="[^"]+"/.test(html), `Missing description: ${url}`);
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1];
  assert.ok(robots?.includes('index') && !robots.includes('noindex'), `Not indexable: ${url}`);
  // The support mailbox stacloud.dev@gmail.com is valid; only reject old web URLs.
  assert.ok(!/https?:\/\/(?:www\.)?stacloud\.dev(?:[\/"\s<]|$)/i.test(html), `Old domain URL in exported page: ${url}`);
}

const home = read('index.html');
const graph = [...home.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
  .flatMap((match) => JSON.parse(match[1])['@graph'] || []);
for (const type of ['Organization', 'WebSite', 'WebPage', 'Service']) {
  assert.equal(graph.filter((node) => node['@type'] === type).length, 1, `Missing/duplicate ${type}`);
}
const website = graph.find((node) => node['@type'] === 'WebSite');
assert.equal(website.url, `${origin}/`);
assert.equal(website.name, 'STACloud');
assert.ok(website.alternateName.includes('STA Cloud'));
assert.ok(website.alternateName.includes('STA Cloud Hosting'));
const ids = new Set(graph.map((node) => node['@id']));
function checkReferences(value) {
  if (!value || typeof value !== 'object') return;
  if (Object.keys(value).length === 1 && value['@id']) {
    assert.ok(ids.has(value['@id']), `Unresolved schema reference: ${value['@id']}`);
  }
  Object.values(value).forEach(checkReferences);
}
graph.forEach(checkReferences);
const heading = home.match(/<h1\b[^>]*>(.*?)<\/h1>/s)?.[1].replace(/<[^>]*>/g, ' ');
assert.match(heading, /STA Cloud/);
assert.match(heading, /VPS/);
console.log(`SEO export checks passed: ${urls.length} pages, canonical URLs, indexability, brand schema.`);

const about = read('about/index.html');
const aboutNodes = [...about.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
  .flatMap(match => JSON.parse(match[1])['@graph'] || []);
const aboutPage = aboutNodes.find(node => node['@type'] === 'AboutPage');
assert.equal(aboutPage?.url, `${origin}/about/`);
assert.equal(aboutPage?.mainEntity?.['@id'], `${origin}/#organization`);
assert.ok(about.includes('Gia hạn 0đ') && about.includes('CPU'), 'Missing visible service facts');
assert.ok(home.includes('href="/about/"'), 'Brand facts must be linked from home');
const llms = read('llms.txt');
assert.ok(llms.includes(`${origin}/about/`) && llms.includes(`${origin}/free-server/`), 'Missing public facts links in text index');
assert.ok(!/https?:\/\/(?:www\.)?stacloud\.dev(?:[\/\s]|$)/i.test(llms), 'Old web domain in text index');
const vpsHtml = read('vps-hosting/index.html');
const vpsService = [...vpsHtml.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
  .map(match => JSON.parse(match[1])).find(node => node['@type'] === 'Service');
assert.equal(vpsService?.provider?.['@id'], `${origin}/#organization`);
assert.equal(vpsService?.hasOfferCatalog?.itemListElement?.length, 19);
for (const offer of vpsService.hasOfferCatalog.itemListElement) {
  assert.ok(vpsHtml.includes(offer.name), `Schema offer must be visible: ${offer.name}`);
  const specification = offer.priceSpecification;
  assert.equal(specification.valueAddedTaxIncluded, false);
  assert.equal(specification.unitCode, 'MON');
  assert.equal(specification.priceCurrency, 'VND');
  assert.ok(vpsHtml.includes(`${specification.price.toLocaleString('vi-VN')} VNĐ`), `Schema price must match visible price: ${offer.name}`);
}
console.log('GEO checks passed: visible facts, AboutPage identity, public discovery links.');
