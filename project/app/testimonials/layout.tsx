import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'CLAT Scholars Reviews | Student Video Testimonials',

  description:
    'Watch CLAT Scholars students share their preparation experiences, coaching feedback and journeys to National Law Universities through video testimonials.',

  alternates: {
    canonical: 'https://www.clatscholars.com/testimonials',
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}