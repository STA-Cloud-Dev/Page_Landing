import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Check the shipped HTML, not just source metadata. Run after next build.
const output = fileURLToPath(new URL("../out/", import.meta.url));
const origin = "https://stacloud.eu.cc";
const read = (file) => readFileSync(path.join(output, file), "utf8");
const sitemap = read("sitemap.xml");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => match[1],
);
assert.equal(urls.length, 32, "Review the public sitemap when routes change");
assert.ok(
  urls.includes(`${origin}/pricing/`) && urls.includes(`${origin}/network/`),
  "Missing dedicated catalog/map routes",
);
assert.ok(
  urls.includes(`${origin}/about/`),
  "Missing factual brand/service page",
);
assert.ok(urls.includes(`${origin}/history/`), "Missing brand history page");
assert.ok(urls.includes(`${origin}/vps/`), "Missing VPS/hosting service page");
assert.equal(new Set(urls).size, urls.length, "Duplicate sitemap URLs");
assert.deepEqual(
  read("sitemap.txt").trim().split(/\r?\n/),
  urls,
  "Text sitemap must match XML exactly",
);
assert.equal(read("CNAME").trim(), "stacloud.eu.cc");
assert.ok(read("robots.txt").includes(`Sitemap: ${origin}/sitemap.xml`));

for (const url of urls) {
  const parsed = new URL(url);
  assert.equal(parsed.origin, origin, `Wrong sitemap domain: ${url}`);
  assert.ok(parsed.pathname.endsWith("/"), `Noncanonical sitemap path: ${url}`);
  const html = read(path.join(parsed.pathname.slice(1), "index.html"));
  assert.equal(
    (html.match(/<h1\b/g) || []).length,
    1,
    `Expected one H1: ${url}`,
  );
  const canonicals = [
    ...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g),
  ];
  assert.equal(canonicals.length, 1, `Expected one canonical: ${url}`);
  assert.equal(canonicals[0][1], url, `Canonical differs from sitemap: ${url}`);
  assert.ok(/<title>[^<]+<\/title>/.test(html), `Missing title: ${url}`);
  assert.ok(
    /<meta name="description" content="[^"]+"/.test(html),
    `Missing description: ${url}`,
  );
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1];
  assert.ok(
    robots?.includes("index") && !robots.includes("noindex"),
    `Not indexable: ${url}`,
  );
  // The support mailbox stacloud.dev@gmail.com is valid; only reject old web URLs.
  assert.ok(
    !/https?:\/\/(?:www\.)?stacloud\.dev(?:[\/"\s<]|$)/i.test(html),
    `Old domain URL in exported page: ${url}`,
  );
}

const home = read("index.html");
const graph = [
  ...home.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs,
  ),
].flatMap((match) => JSON.parse(match[1])["@graph"] || []);
for (const type of ["Organization", "WebSite", "WebPage", "Service"]) {
  assert.equal(
    graph.filter((node) => node["@type"] === type).length,
    type === "Service" ? 2 : 1,
    `Missing/duplicate ${type}`,
  );
}
const website = graph.find((node) => node["@type"] === "WebSite");
assert.equal(website.url, `${origin}/`);
assert.equal(website.name, "STACloud");
assert.ok(website.alternateName.includes("STA Cloud"));
assert.ok(website.alternateName.includes("STA Cloud Hosting"));
const ids = new Set(graph.map((node) => node["@id"]));
function checkReferences(value) {
  if (!value || typeof value !== "object") return;
  if (Object.keys(value).length === 1 && value["@id"]) {
    assert.ok(
      ids.has(value["@id"]),
      `Unresolved schema reference: ${value["@id"]}`,
    );
  }
  Object.values(value).forEach(checkReferences);
}
graph.forEach(checkReferences);
const heading = home
  .match(/<h1\b[^>]*>(.*?)<\/h1>/s)?.[1]
  .replace(/<[^>]*>/g, " ");
assert.match(heading, /STA Cloud/);
assert.match(heading, /VPS/);
console.log(
  `SEO export checks passed: ${urls.length} pages, canonical URLs, indexability, brand schema.`,
);

const about = read("about/index.html");
const aboutNodes = [
  ...about.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs,
  ),
].flatMap((match) => JSON.parse(match[1])["@graph"] || []);
const aboutPage = aboutNodes.find((node) => node["@type"] === "AboutPage");
assert.equal(aboutPage?.url, `${origin}/about/`);
assert.equal(aboutPage?.mainEntity?.["@id"], `${origin}/#organization`);
assert.ok(
  about.includes("Gia hạn 0đ") && about.includes("CPU"),
  "Missing visible service facts",
);
assert.ok(
  home.includes('href="/about/"'),
  "Brand facts must be linked from home",
);
const llms = read("llms.txt");
assert.ok(
  llms.includes(`${origin}/about/`) && llms.includes(`${origin}/free/`),
  "Missing public facts links in text index",
);
assert.ok(
  !/https?:\/\/(?:www\.)?stacloud\.dev(?:[\/\s]|$)/i.test(llms),
  "Old web domain in text index",
);
const vpsHtml = read("vps/index.html");
const vpsCatalog = [
  ...vpsHtml.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs,
  ),
]
  .flatMap((match) => {
    const node = JSON.parse(match[1]);
    return node["@graph"] || [node];
  })
  .find((node) => node["@type"] === "ItemList");
assert.equal(vpsCatalog?.itemListElement?.length, 37);
for (const entry of vpsCatalog.itemListElement) {
  assert.ok(
    vpsHtml.includes(entry.item.name) ||
      vpsHtml.includes(entry.item.name.replace("ICS Oracle ", "")),
    `Catalog item must be visible: ${entry.item.name}`,
  );
  assert.equal(entry.item.provider.name, "ICS");
  assert.equal(entry.item.url, "https://oci.ics.vn/cloud/pricing");
}
console.log(
  "GEO checks passed: visible facts, AboutPage identity, public discovery links.",
);

const pricing = read("pricing/index.html");
assert.ok(
  pricing.includes("Dev 3") && pricing.includes("1536 MB RAM"),
  "Current Dev plans must be rendered in catalog HTML",
);
assert.ok(
  !pricing.includes("ICS Oracle VM.GPU"),
  "ICS products must remain separate from own hosting catalog",
);
assert.ok(
  read("network/index.html").includes("Canada Southeast (Toronto)"),
  "Region catalog must remain crawlable",
);
for (const anchor of [
  "plans",
  "network",
  "free-hosting",
  "openclaw",
  "benefits",
  "faq",
  "policies",
]) {
  assert.ok(
    home.includes(`id="${anchor}"`),
    `Preserve existing home anchor: ${anchor}`,
  );
}
assert.ok(
  home.includes('href="/pricing/"') && home.includes('href="/network/"'),
  "Missing home links to dedicated pages",
);
assert.ok(
  urls.includes(`${origin}/vps/`) && !urls.includes(`${origin}/vps-hosting/`),
  "Only new VPS canonical belongs in sitemap",
);
for (const group of ["standard", "premium", "enterprise", "gpu"]) {
  assert.ok(
    vpsHtml.includes(`id="${group}"`),
    `Missing VPS product group: ${group}`,
  );
}
const legacyVps = read("vps-hosting/index.html");
assert.ok(
  legacyVps.includes(`0;url=${origin}/vps/`),
  "Legacy VPS path must forward to new URL on static host",
);
assert.ok(
  legacyVps.includes("noindex"),
  "Legacy fallback must not create duplicate indexed content",
);

for (const file of [
  "index.html",
  "pricing/index.html",
  "free/index.html",
  "about/index.html",
  "llms.txt",
]) {
  assert.ok(
    !/node[ -]?test/i.test(read(file)),
    `Retired free plan mentioned: ${file}`,
  );
}
assert.ok(
  read("free/index.html").includes("Free Forever") &&
    read("free/index.html").includes("Cấu hình"),
  "Missing Free Forever policy",
);

// Language and migration checks use the exported documents Google will receive.
for (const url of urls) {
  const pathname = new URL(url).pathname;
  const english = pathname.startsWith("/en/");
  const viPath = english ? pathname.replace(/^\/en/, "") : pathname;
  const enPath = `/en${viPath}`;
  const html = read(path.join(pathname.slice(1), "index.html"));
  assert.ok(
    html.includes(`<html lang="${english ? "en" : "vi"}"`),
    `Wrong document language: ${url}`,
  );
  for (const [lang, translatedPath] of [
    ["vi", viPath],
    ["en", enPath],
    ["x-default", viPath],
  ]) {
    assert.ok(
      html.includes(`hrefLang="${lang}" href="${origin}${translatedPath}"`) ||
        html.includes(`hreflang="${lang}" href="${origin}${translatedPath}"`),
      `Missing language alternate ${lang}: ${url}`,
    );
  }
  assert.ok(
    !html.includes('href="/free-server/') &&
      !html.includes('href="https://stacloud.eu.cc/free-server/'),
    `Old free link in ${url}`,
  );
}
assert.ok(
  urls.includes(`${origin}/free/`) && !urls.includes(`${origin}/free-server/`),
);
const oldFree = read("free-server/index.html");
assert.ok(
  oldFree.includes(`0;url=${origin}/free/`) && oldFree.includes("noindex"),
  "Retired FREE URL must forward and remain noindex",
);
const enFree = read("en/free/index.html");
for (const fact of [
  "Free Forever",
  "75% CPU",
  "50% CPU",
  "2048 MB RAM",
  "1024 MB RAM",
  "Resources may change",
  "0 Credit",
])
  assert.ok(enFree.includes(fact), `Missing English FREE fact: ${fact}`);
console.log(
  "International SEO checks passed: 32 canonical pages, static VI/EN, reciprocal hreflang, legacy FREE forwarding.",
);

for (const prefix of ['', 'en/']) {
 const hub=read(`${prefix}policies/index.html`);
 const policySchema=[...hub.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1])).find(n=>n['@type']==='CollectionPage');
 assert.equal(policySchema?.mainEntity?.numberOfItems,7,'Policy hub must contain exactly seven documents');
 for(const [page,anchors]of Object.entries({terms:['fair-use','abuse','suspension-appeal','network-policy','renewal-expiration'],refund:['billing'],sla:['support'],security:['backup-restore'],privacy:['data-retention']})){
  const html=read(`${prefix}${page}/index.html`);
  for(const anchor of anchors){assert.ok(html.includes(`id="${anchor}"`),`Missing policy anchor ${prefix}${page}#${anchor}`);assert.ok(hub.includes(`/${prefix}${page}/#${anchor}`),`Missing policy discovery link ${anchor}`);}
 }
}
console.log('Policy checks passed: seven documents per language and all nine policy topics linked.');
