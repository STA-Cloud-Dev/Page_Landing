import type { Metadata } from 'next';
import { HomePage } from '@/components/home/homepage';
import { sitePath } from '@/lib/site-path';

export const metadata: Metadata = {
  title: 'Cloud VPS, Game Server & Free Hosting tại Việt Nam | STACloud',
  description:
    'STACloud cung cấp Cloud VPS, Game Server và gói Node Test miễn phí cho bot Discord, website, project sinh viên. Khám phá cấu hình và nhận tư vấn triển khai.',
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
    title: 'Cloud VPS, Game Server & Node Test Free | STACloud',
    description: 'Triển khai VPS, game server, bot Discord và website trên STACloud. Có gói Node Test miễn phí cho nhu cầu trải nghiệm.',
    url: sitePath('/'),
    type: 'website',
  },
};

const freeHostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'STACloud Node Test Free Hosting',
  provider: { '@type': 'Organization', name: 'STACloud', url: 'https://stacloud.eu.cc/' },
  serviceType: 'Free hosting cho bot Discord, web nhỏ và project sinh viên',
  description: 'Node Test Free Forever với 75% CPU, 2 GB RAM và 0 Credit mỗi lần tạo plan.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'VND',
    url: 'https://stacloud.eu.cc/#free-hosting',
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
