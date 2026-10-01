import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import DynamicTitle from '@/components/ui/DynamicTitle';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bizleap.in'),
  title: {
    default: 'Bizleap | Digital Marketing & Website Development Company Nagpur',
    template: '%s | Bizleap'
  },
  description: 'Bizleap is a premium digital marketing and website development agency in Nagpur. We build scalable web apps, custom software, and data-driven marketing campaigns.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.bizleap.in',
    siteName: 'Bizleap',
    images: [{
      url: '/images/bizleap_laptop_mockup.jpg',
      width: 1200,
      height: 630,
      alt: 'Bizleap Digital Services'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bizleap | Digital Marketing & Website Development Company Nagpur',
    description: 'Bizleap is a premium digital marketing and website development agency in Nagpur. We build scalable web apps, custom software, and data-driven marketing campaigns.',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Bizleap',
    image: 'https://www.bizleap.in/images/bizleap_laptop_mockup.jpg',
    '@id': 'https://www.bizleap.in',
    url: 'https://www.bizleap.in',
    telephone: '',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nagpur',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN'
    },
    description: 'Digital marketing, website development, and technology company based in Nagpur, Maharashtra.',
    areaServed: ['Nagpur', 'Pune', 'Mumbai', 'Maharashtra']
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <DynamicTitle />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
