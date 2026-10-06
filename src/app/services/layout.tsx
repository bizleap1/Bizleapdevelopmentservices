import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bizdevelopment.in';

export const metadata: Metadata = {
  title: 'Digital Marketing & Website Development Services Nagpur',
  description:
    'Explore Bizleap’s end-to-end full-stack web development, mobile app engineering, enterprise e-commerce architectures, and high-converting UI/UX design in Nagpur and across India.',
  keywords: [
    'web development services nagpur',
    'full stack web development',
    'mobile app development nagpur',
    'ecommerce development company',
    'UI UX design services',
    'Next.js web development',
    'React development nagpur',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Digital Marketing & Website Development Services | Bizleap',
    description:
      'Explore Bizleap’s end-to-end full-stack web development, mobile app engineering, enterprise e-commerce architectures, and UI/UX design in Nagpur.',
    url: `${siteUrl}/services`,
    type: 'website',
    images: [
      {
        url: '/images/full_stack_final.png',
        width: 1200,
        height: 630,
        alt: 'Bizleap Full Stack Web Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing & Website Development Services | Bizleap',
    description:
      'High-performance full stack web development, mobile apps, e-commerce, and UI/UX design engineered for growth.',
    images: ['/images/full_stack_final.png'],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const servicesJsonLd = {
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
            'name': 'Services',
            'item': `${siteUrl}/services`,
          },
        ],
      },
      {
        '@type': 'Service',
        'name': 'Full-Stack Web Development',
        'provider': {
          '@type': 'Organization',
          'name': 'Bizleap Development Services',
          'url': siteUrl,
        },
        'description':
          'Highly scalable, blazingly fast, and completely custom web applications built with Next.js, React, and Node.js.',
        'areaServed': 'India',
        'serviceType': 'Web Development',
      },
      {
        '@type': 'Service',
        'name': 'Mobile App Development',
        'provider': {
          '@type': 'Organization',
          'name': 'Bizleap Development Services',
          'url': siteUrl,
        },
        'description':
          'Native and cross-platform mobile apps for iOS and Android with fluid animations and backend integrations.',
        'areaServed': 'India',
        'serviceType': 'App Development',
      },
      {
        '@type': 'Service',
        'name': 'Enterprise E-Commerce Development',
        'provider': {
          '@type': 'Organization',
          'name': 'Bizleap Development Services',
          'url': siteUrl,
        },
        'description':
          'Conversion-focused custom and Shopify e-commerce platforms with payment integrations and inventory systems.',
        'areaServed': 'India',
        'serviceType': 'E-Commerce Development',
      },
      {
        '@type': 'Service',
        'name': 'UI/UX Design & Branding',
        'provider': {
          '@type': 'Organization',
          'name': 'Bizleap Development Services',
          'url': siteUrl,
        },
        'description':
          'Modern UI/UX design, wireframing, interactive prototyping, and brand identity design that drives conversions.',
        'areaServed': 'India',
        'serviceType': 'UI/UX Design',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {children}
    </>
  );
}

