import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing & Website Development Services',
  description: 'Bizleap provides high-end full stack website development, app development, UI/UX design, and enterprise e-commerce solutions in Nagpur and Maharashtra.',
  alternates: {
    canonical: '/services',
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
