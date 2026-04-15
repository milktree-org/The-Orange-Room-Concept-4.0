import type { MetadataRoute } from 'next';
import { ROUTES, absoluteUrl } from '@/lib/seo';

/**
 * Generates /sitemap.xml at build time.
 * Submit this URL in Google Search Console → Sitemaps.
 *
 * Source of truth: lib/seo.ts → ROUTES.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
