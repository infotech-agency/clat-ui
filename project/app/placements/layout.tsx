import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'CLAT Results & NLU Selections | CLAT Scholars Success Stories',

  description:
    'Explore CLAT Scholars student success stories and selections at National Law Universities and leading law colleges across India. Meet our successful alumni.',

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