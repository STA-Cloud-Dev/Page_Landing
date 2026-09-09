import type { Metadata } from 'next';
import { HomePage } from '@/components/home/homepage';

export const metadata: Metadata = {
  title: 'Free Hosting Bot Discord, Web & Project Sinh Viên | STACloud',
  description:
    'Node Test STACloud 100% free cho bot Discord, web nhỏ và project sinh viên: 75% CPU, 2 GB RAM, nhận 10.000 Credit qua Verify Account.',
  alternates: { canonical: '/' },
  keywords: [
    'free hosting bot discord',
    'free web hosting sinh viên',
    'free hosting project nhỏ',
    'Node Test miễn phí',
    'hosting miễn phí Việt Nam',
    'STACloud',
  ],
  openGraph: {
    title: 'Node Test 100% Free | STACloud',
    description: 'Free host bot Discord, web nhỏ và project sinh viên với 75% CPU, 2 GB RAM.',
    url: '/',
    type: 'website',
  },
};

const freeHostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'STACloud Node Test Free Hosting',
  provider: { '@type': 'Organization', name: 'STACloud', url: 'https://stacloud.dev/' },
  serviceType: 'Free hosting cho bot Discord, web nhỏ và project sinh viên',
  description: 'Node Test với 75% CPU, 2 GB RAM và 10.000 Credit dành cho tài khoản đủ điều kiện.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'VND',
    availability: 'https://schema.org/InStock',
    url: 'https://stacloud.dev/#free-hosting',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(freeHostingSchema) }}
      />
      <HomePage />
    </>
  );
}
