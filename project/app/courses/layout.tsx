import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'CLAT & AILET Coaching Courses',

  description:
    'Explore CLAT and AILET coaching courses for Class 11, Class 12 and droppers at CLAT Scholars. Choose from online, offline and weekend batches.',

  alternates: {
    canonical: 'https://www.clatscholars.com/courses',
  },
};

export default function CoursesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}