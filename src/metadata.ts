import type { Metadata } from 'next';
import { siteConfig } from './content';
import { SeoEntry } from './types';

const defaultImage = '/service-web-development-generated.png';

export function buildMetadata(seo: SeoEntry): Metadata {
  const canonicalUrl = new URL(seo.canonicalPath, siteConfig.siteUrl);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: 'website',
      images: [
        {
          url: new URL(defaultImage, siteConfig.siteUrl),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} software development services`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      images: [new URL(defaultImage, siteConfig.siteUrl).toString()],
    },
  };
}
