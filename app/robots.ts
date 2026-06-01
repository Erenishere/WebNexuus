import type { MetadataRoute } from 'next';
import { siteConfig } from '../src/content';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/drafts'],
      },
      ...['GPTBot', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Applebot-Extended'].map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
