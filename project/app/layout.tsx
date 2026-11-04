

import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
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
const GA_ID = 'G-11MVLGPL0Z';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      'Best CLAT Coaching in Delhi NCR | CLAT Preparation | CLAT Scholars',
    template: '%s | CLAT Scholars',
  },

  description:
    'Prepare for CLAT at CLAT Scholars in Delhi NCR with advocate-faculty, online, offline batches and personal mentoring. Book your free counselling session today.',

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

  // Next.js automatically adds this verification meta tag to <head>.
  verification: {
    google: 'q9Nl-sp9PjRBzht8hVM7KN74SLf50-s5Cj4cFzQDSkQ',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'CLAT Scholars',
    title: 'CLAT Scholars | Best CLAT Coaching in Delhi NCR',
    description:
      'Expert CLAT, AILET & law entrance coaching with personal mentorship, small batches, and top NLU faculty. Centres in Noida, Indirapuram & Delhi.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CLAT Scholars',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'CLAT Scholars | Best CLAT Coaching in Delhi NCR',
    description:
      'Expert CLAT, AILET & law entrance coaching with personal mentorship, small batches, and top NLU faculty.',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#organization`,
      name: 'CLAT Scholars',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.jpg`,
      sameAs: [
        'https://www.facebook.com/clatscholars',
        'https://www.instagram.com/clatscholars',
        'https://www.linkedin.com/company/clatscholars',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+918588890203',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
      location: [
        {
          '@type': 'Place',
          name: 'CLAT Scholars Noida Centre',
          telephone: '+918588890203',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Wave One, F20/15, opposite Radisson, Pocket G, Sector 18',
            addressLocality: 'Noida',
            addressRegion: 'Uttar Pradesh',
            postalCode: '201301',
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'Place',
          name: 'CLAT Scholars Indirapuram Centre',
          telephone: '+918588890202',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1st Floor, 333, Shakti Khand III, Indirapuram',
            addressLocality: 'Ghaziabad',
            addressRegion: 'Uttar Pradesh',
            postalCode: '201014',
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'Place',
          name: 'CLAT Scholars Karkardooma Delhi Centre',
          telephone: '+918588890201',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'SF 23 Aditya Mega Mall CBD, near Cross River Mall, Karkardooma',
            addressLocality: 'Shahdara, Delhi',
            addressRegion: 'Delhi',
            postalCode: '110032',
            addressCountry: 'IN',
          },
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'CLAT Scholars',
      url: `${SITE_URL}/`,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-IN',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />

        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      </head>

      <body className="font-sans">
        <AnnouncementBar />
        <Navbar />

        <main>{children}</main>

        <Footer />
        <FloatingButtons />
        <EnquiryPopup />

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(
              /</g,
              '\\u003c'
            ),
          }}
        />
      </body>
    </html>
  );
}