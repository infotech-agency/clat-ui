import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'CLAT & AILET Preparation Blog',

  description:
    'Read CLAT and AILET preparation tips, legal reasoning guides, study strategies and law entrance exam updates on the CLAT Scholars blog.',

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