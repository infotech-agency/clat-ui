import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Student Testimonials & Reviews',

  description:
    'Read student testimonials and reviews of CLAT Scholars. Learn about their experiences with CLAT and AILET coaching, faculty and personal mentorship.',

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