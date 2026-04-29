import type { Metadata } from 'next';
import './globals.css';
import LayoutShell from '@/components/LayoutShell';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import MetaPixel from '@/components/MetaPixel';
import CookieConsent from '@/components/CookieConsent';
import { SITE } from '@/lib/seo';
import {
  localBusinessSchema,
  organizationSchema,
  webSiteSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    // Child pages that set `title: '...'` render that title verbatim (no template).
    // Per-page titles already include "Orange Rooms" in their keyword phrasing.
    default: `${SITE.name} | ${SITE.tagline}`,
    template: '%s',
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  generator: 'Next.js',
  keywords: [
    'Orange Rooms',
    'Orange Rooms Southampton',
    'Southampton cocktail bar',
    'bottomless brunch Southampton',
    'Vernon Walk Southampton',
    'Southampton nightlife',
    'private venue hire Southampton',
    'corporate events Southampton',
    'Tiki lounge Southampton',
  ],
  referrer: 'origin-when-cross-origin',
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: SITE.defaultOgImage,
        width: SITE.defaultOgImageWidth,
        height: SITE.defaultOgImageHeight,
        alt: SITE.defaultOgImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [SITE.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Combine site-wide schemas into a single @graph for efficient parsing.
  // LocalBusiness, Organization, and WebSite appear on every page because
  // they describe the entity as a whole — per-page schemas layer on top.
  const siteGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      localBusinessSchema(),
      organizationSchema(),
      webSiteSchema(),
    ],
  };

  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Inter:wght@300;400;500;600;700;800&family=Mrs+Saint+Delafield&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://onsass.designmynight.com/?theme=dark&body-text-color=%23ffffff&primary-color=%23f29100&background-color=%231a1919"
        />
      </head>
      <body>
        <GoogleAnalytics />
        <MetaPixel />
        <script
          type="application/ld+json"
          // JSON is generated at build time from typed constants — not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }}
        />
        <LayoutShell>{children}</LayoutShell>
        <CookieConsent />
      </body>
    </html>
  );
}
