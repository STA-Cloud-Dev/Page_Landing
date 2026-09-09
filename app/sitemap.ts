import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const siteUrl = 'https://stacloud.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/free-server`, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${siteUrl}/egg`, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/partner`, changeFrequency: 'monthly', priority: 0.55 },
    { url: `${siteUrl}/sla`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/terms`, changeFrequency: 'monthly', priority: 0.45 },
    { url: `${siteUrl}/privacy`, changeFrequency: 'monthly', priority: 0.4 },
  ];
}
