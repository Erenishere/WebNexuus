import { useEffect } from 'react';
import { siteConfig } from './content';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath: string;
}

const ensureMeta = (selector: string, create: () => HTMLMetaElement) => {
  const existing = document.head.querySelector<HTMLMetaElement>(selector);
  if (existing) {
    return existing;
  }

  const node = create();
  document.head.appendChild(node);
  return node;
};

export function Seo({ title, description, canonicalPath }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const metaDescription = ensureMeta('meta[name="description"]', () => {
      const meta = document.createElement('meta');
      meta.name = 'description';
      return meta;
    });
    metaDescription.content = description;

    const ogTitle = ensureMeta('meta[property="og:title"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      return meta;
    });
    ogTitle.content = title;

    const ogDescription = ensureMeta('meta[property="og:description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      return meta;
    });
    ogDescription.content = description;

    const ogType = ensureMeta('meta[property="og:type"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:type');
      return meta;
    });
    ogType.content = 'website';

    const canonicalHref = `${siteConfig.siteUrl}${canonicalPath}`;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;

    const ogUrl = ensureMeta('meta[property="og:url"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      return meta;
    });
    ogUrl.content = canonicalHref;
  }, [canonicalPath, description, title]);

  return null;
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description:
      'WebNexus designs and builds custom web applications, mobile apps, business dashboards and AI-assisted software.',
    slogan: siteConfig.tagline,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
