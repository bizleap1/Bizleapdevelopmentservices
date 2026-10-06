import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bizdevelopment.in';

export const metadata: Metadata = {
  title: 'Our Work & Case Studies | Portfolio of Bizleap Development',
  description:
    'Explore our portfolio of custom websites, scalable e-commerce platforms, mobile applications, and web apps built for brands across Nagpur, Mumbai, Pune, and India.',
  keywords: [
    'Bizleap portfolio',
    'web development case studies',
    'ecommerce website portfolio',
    'nagpur web developer projects',
    'custom web application examples',
  ],
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Our Work & Portfolio | Bizleap Development Services',
    description:
      'Explore our curated showcase of high-performance websites, custom apps, and e-commerce platforms engineered for growth.',
    url: `${siteUrl}/work`,
    type: 'website',
    images: [
      {
        url: '/images/bizleap_laptop_mockup.jpg',
        width: 1200,
        height: 630,
        alt: 'Bizleap Development Portfolio & Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work & Portfolio | Bizleap Development Services',
    description:
      'Explore our curated showcase of high-performance websites, custom apps, and e-commerce platforms.',
    images: ['/images/bizleap_laptop_mockup.jpg'],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const workJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': siteUrl,
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Our Work',
            'item': `${siteUrl}/work`,
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/work/#portfolio`,
        'name': 'Bizleap Work Portfolio & Case Studies',
        'url': `${siteUrl}/work`,
        'description':
          'Curated portfolio of modern digital platforms, high-conversion e-commerce stores, and custom software engineered by Bizleap.',
        'creator': {
          '@type': 'Organization',
          'name': 'Bizleap Development Services',
          'url': siteUrl,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workJsonLd) }}
      />
      {children}
    </>
  );
}

