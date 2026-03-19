import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import LayoutShell from '@/components/LayoutShell';

export const metadata: Metadata = {
  title: "The Orange Room | Southampton's Legendary Venue",
  description: "Southampton's legendary sanctuary for good vibes. Award-winning cocktail bar, bottomless brunches, private hire, and unforgettable events since 2001.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z9N56D6PE"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z9N56D6PE');
          `}
        </Script>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
