'use client';

import { useEffect, useState } from 'react';

const CONSENT_KEY = 'orange-rooms-cookie-consent';

type ConsentChoice = 'accepted' | 'rejected';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * GDPR/PECR cookie consent banner.
 *
 * Works in tandem with <GoogleAnalytics />, which sets Consent Mode v2 defaults
 * to 'denied'. This banner calls gtag('consent', 'update', ...) on user choice
 * and persists the decision in localStorage so it's not asked again.
 *
 * Only analytics_storage is surfaced — no ads, no remarketing on this site.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(CONSENT_KEY);
    } catch {
      // localStorage may be unavailable (private mode / blocked) — show banner.
    }

    if (!stored) {
      setVisible(true);
      return;
    }

    // Re-apply a previously-granted consent on each visit so GA is actually enabled.
    // (Default is 'denied' until an update call flips it.)
    if (stored === 'accepted') {
      window.gtag?.('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  }, []);

  const persist = (choice: ConsentChoice) => {
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // Ignore — user will be re-prompted next visit if storage is blocked.
    }
  };

  const handleAccept = () => {
    persist('accepted');
    window.gtag?.('consent', 'update', {
      analytics_storage: 'granted',
    });
    setVisible(false);
  };

  const handleReject = () => {
    persist('rejected');
    // Default is already 'denied', but be explicit so it's auditable.
    window.gtag?.('consent', 'update', {
      analytics_storage: 'denied',
    });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[9999] bg-[#1a1919]/95 backdrop-blur-sm border-t border-orange-500/30 px-4 py-4 sm:px-6 sm:py-5"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-white/90 flex-1 leading-relaxed">
          We use analytics cookies to understand how visitors use our site so we can make it better.
          You can accept or reject analytics cookies below. See our{' '}
          <a
            href="https://www.designmynight.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-orange-400 transition-colors"
          >
            privacy notice
          </a>{' '}
          for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={handleReject}
            className="px-5 py-2 text-sm font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-colors"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-5 py-2 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
