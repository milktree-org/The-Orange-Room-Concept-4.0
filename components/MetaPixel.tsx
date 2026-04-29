'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

/**
 * Meta Pixel (Facebook Pixel) wrapper with:
 * - Production-only loading (no dev traffic leaks to the Pixel)
 * - Consent denied by default — `fbq('consent', 'revoke')` runs before init
 * - SPA PageView tracking on App Router client navigations
 *
 * The CookieConsent banner flips consent to 'grant' on Accept and re-fires
 * PageView at that moment. The pixel ID must be provided via the
 * NEXT_PUBLIC_META_PIXEL_ID env var in production.
 */

// Window.fbq is declared in CookieConsent.tsx — TypeScript merges them globally.

function MetaPixelRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initial pixel load fires PageView once. This effect handles every
    // subsequent SPA navigation. fbq itself respects the current consent
    // state, so we don't need to gate the call here.
    if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
      return;
    }
    window.fbq('track', 'PageView');
  }, [pathname, searchParams]);

  return null;
}

export default function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  if (process.env.NODE_ENV !== 'production' || !pixelId) {
    return null;
  }

  return (
    <>
      {/*
        Consent revoked by default — the pixel queues hits but doesn't send
        them until CookieConsent calls fbq('consent', 'grant').
        PageView fires once here; SPA navigations are handled by the tracker
        below.
      */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('consent', 'revoke');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </Script>
      {/* No-script fallback for users with JS disabled. */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      {/* SPA route-change tracker — wrapped in Suspense because useSearchParams suspends. */}
      <Suspense fallback={null}>
        <MetaPixelRouteTracker />
      </Suspense>
    </>
  );
}
