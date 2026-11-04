import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'CLAT & AILET Preparation Tips & Exam Updates | CLAT Scholars',

  description:
    'Read CLAT & AILET preparation tips, study strategies and exam updates from CLAT Scholars faculty. Find practical guidance for your law entrance preparation.',

  alternates: {
    canonical: 'https://www.clatscholars.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}