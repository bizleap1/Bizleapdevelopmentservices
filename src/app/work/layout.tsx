import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Portfolio of Bizleap Development',
  description: 'Explore our portfolio of custom websites, scalable e-commerce platforms, and high-performance web applications built for ambitious brands across India.',
  alternates: {
    canonical: '/work',
  }
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
