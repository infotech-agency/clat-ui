import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Student Results & NLU Selections',

  description:
    'Explore CLAT Scholars student results and selections in National Law Universities. See our students’ achievements in CLAT and AILET entrance exams.',

  alternates: {
    canonical: 'https://www.clatscholars.com/placements',
  },
};

export default function PlacementsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}