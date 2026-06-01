import type { MetadataRoute } from 'next';
import { portfolioItems, seoMap, serviceSeoPaths, services, siteConfig } from '../src/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = Object.values(seoMap).map((entry) => entry.canonicalPath);
  const servicePaths = services.map((service) => serviceSeoPaths[`/services/${service.slug}`].canonicalPath);
  const portfolioPaths = portfolioItems.map((item) => `/portfolio/${item.slug}`);
  const now = new Date();

  return [...staticPaths, ...servicePaths, ...portfolioPaths].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.startsWith('/services') ? 0.85 : 0.7,
  }));
}
