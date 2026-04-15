import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';

/**
 * Generates /robots.txt at build time.
 *
 * Policy:
 * - All mainstream search engines crawl everything (no disallows — this is a
 *   marketing site with no sensitive paths).
 * - AI crawlers are EXPLICITLY allowed. This is critical for GEO:
 *   ChatGPT / Perplexity / Claude / Google SGE read robots.txt and will skip
 *   sites that block them. We WANT the site cited in AI answers.
 * - Next.js internals (/_next/, /api/ if added later) are disallowed because
 *   they contain no user-facing content worth indexing.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/'],
      },
      // Explicit allows for the major AI crawlers. These override a site-wide
      // disallow if one is ever added later, and make intent auditable.
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'Meta-ExternalFetcher', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'DuckAssistBot', allow: '/' },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
