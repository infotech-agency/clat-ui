import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'CLAT & AILET Coaching Courses | Online & Offline Classes',

  description:
    'Explore CLAT & AILET courses for Class 11, Class 12 and droppers at CLAT Scholars. Choose online, offline or weekend batches. Get free counselling.',

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