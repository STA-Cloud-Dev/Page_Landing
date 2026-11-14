import type { Metadata } from 'next';
import { HomePage } from '@/components/home/homepage';
import { sitePath } from '@/lib/site-path';
import { alternateNames, siteDescription, siteImage, siteName, siteServices, siteTitle, siteUrl } from '@/lib/site-seo';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: sitePath('/') },
  keywords: [
    'free hosting bot discord',
    'free web hosting sinh viên',
    'free hosting project nhỏ',
    'Node Test miễn phí',
    'hosting miễn phí Việt Nam',
    'VPS Singapore',
    'game server hosting',
    'Cloud VPS STACloud',
    'STACloud',
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: sitePath('/'),
    siteName,
    locale: 'vi_VN',
    images: [siteImage],
    type: 'website',
  },
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      alternateName: alternateNames,
      url: `${siteUrl}/`,
      logo: { '@type': 'ImageObject', url: siteImage.url, width: 500, height: 500 },
      description: siteDescription,
      mainEntityOfPage: `${siteUrl}/about/`,
      sameAs: ['https://github.com/STA-Cloud-Dev'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'VPS, hosting Việt Nam và Singapore tại STA Cloud',
        itemListElement: siteServices.map((service) => ({
          '@type': 'OfferCatalog',
          name: service.name,
          itemListElement: [{
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              description: service.description,
              url: `${siteUrl}${service.path}`,
              provider: { '@id': `${siteUrl}/#organization` },
            },
          }],
        })),
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: 'https://discord.gg/nq8B4JXmnm',
        availableLanguage: ['vi'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: siteName,
      alternateName: alternateNames,
      url: `${siteUrl}/`,
      inLanguage: 'vi',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: siteTitle,
      description: siteDescription,
      inLanguage: 'vi',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#node-test`,
      name: 'STACloud Node Test Free Hosting',
      provider: { '@id': `${siteUrl}/#organization` },
      serviceType: 'Free hosting cho bot Discord, web nhỏ và project sinh viên',
      description: 'Node Test Free Forever với 75% CPU, 2 GB RAM và 0 Credit mỗi lần tạo plan.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'VND',
        url: `${siteUrl}/#free-hosting`,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema).replace(/</g, '\\u003c') }}
      />
      <HomePage />
    </>
  );
}
