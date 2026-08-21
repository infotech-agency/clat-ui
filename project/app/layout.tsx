import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { EnquiryPopup } from '@/components/layout/EnquiryPopup';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const SITE_URL = 'https://www.clatscholars.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'CLAT Scholars | Best CLAT Coaching in Delhi NCR - Noida, Indirapuram, Karkardooma',
    template: '%s | CLAT Scholars',
  },
  description:
    'CLAT Scholars offers expert CLAT, AILET & law entrance coaching with personal mentorship, small batches, and top NLU faculty. Centres in Noida, Indirapuram & Delhi (East). Online & offline batches available.',
  keywords: [
    'CLAT coaching',
    'CLAT coaching Noida',
    'CLAT coaching Delhi',
    'AILET coaching',
    'law entrance exam coaching',
    'best CLAT institute',
    'CLAT Scholars',
    'NLU coaching',
  ],
  authors: [{ name: 'CLAT Scholars' }],
  creator: 'CLAT Scholars',
  publisher: 'CLAT Scholars',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'CLAT Scholars',
    title: 'CLAT Scholars | Best CLAT Coaching in Delhi NCR',
    description:
      'Expert CLAT, AILET & law entrance coaching with personal mentorship, small batches, and top NLU faculty. Centres in Noida, Indirapuram & Delhi.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CLAT Scholars' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLAT Scholars | Best CLAT Coaching in Delhi NCR',
    description:
      'Expert CLAT, AILET & law entrance coaching with personal mentorship, small batches, and top NLU faculty.',
    images: ['/og-image.jpg'],
  },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'CLAT Scholars',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [
    'https://www.facebook.com/clatscholars',
    'https://www.instagram.com/clatscholars',
    'https://www.linkedin.com/company/clatscholars',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9810112345',
      contactType: 'admissions',
      areaServed: 'IN',
    },
  ],
  location: [
    {
      '@type': 'Place',
      name: 'Noida Centre',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sector 18',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN',
      },
      telephone: '+91-9810112345',
    },
    {
      '@type': 'Place',
      name: 'Indirapuram Centre',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Indirapuram',
        addressLocality: 'Ghaziabad',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN',
      },
      telephone: '+91-9810112346',
    },
    {
      '@type': 'Place',
      name: 'Karkardooma Delhi Centre',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Karkardooma',
        addressLocality: 'Delhi',
        addressRegion: 'Delhi',
        addressCountry: 'IN',
      },
      telephone: '+91-9810112347',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <EnquiryPopup />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
