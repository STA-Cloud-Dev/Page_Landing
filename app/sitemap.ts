import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/about/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/vps-hosting/`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/free-server/`, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${siteUrl}/egg/`, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/partner/`, changeFrequency: 'monthly', priority: 0.55 },
    { url: `${siteUrl}/history/`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${siteUrl}/sla/`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/terms/`, changeFrequency: 'monthly', priority: 0.45 },
    { url: `${siteUrl}/privacy/`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${siteUrl}/refund/`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${siteUrl}/security/`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${siteUrl}/cookies/`, changeFrequency: 'monthly', priority: 0.4 },
  ];
}
