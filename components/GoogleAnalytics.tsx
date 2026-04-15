import Script from 'next/script';
import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';

/**
 * Google Analytics 4 wrapper with:
 * - Production-only loading (no dev traffic leaks to GA4 property)
 * - Google Consent Mode v2 defaults set to 'denied' before GA loads
 * - SPA page_view tracking via @next/third-parties (handles App Router client navigation)
 *
 * Consent is granted/denied by the CookieConsent banner via gtag('consent', 'update', ...).
 * The GA_ID must be provided via NEXT_PUBLIC_GA_ID env var in production.
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (process.env.NODE_ENV !== 'production' || !gaId) {
    return null;
  }

  return (
    <>
      {/*
        Consent Mode v2 defaults — must run BEFORE gtag.js loads.
        `wait_for_update: 500` holds hits briefly so early Accepts are honored.
      */}
      <Script id="google-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>
      <NextGoogleAnalytics gaId={gaId} />
    </>
  );
}
