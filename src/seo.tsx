import { siteConfig } from './content';
import { ServiceOffer } from './types';

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        description:
          'WebNexus designs and builds custom web applications, mobile apps, business dashboards and AI-assisted software.',
        slogan: siteConfig.tagline,
        email: 'webnexuus@gmail.com',
        areaServed: ['Karachi', 'Pakistan', 'Worldwide'],
        serviceType: [
          'Custom web application development',
          'Mobile app development',
          'Dashboard development',
          'Custom software development',
          'AI-assisted software development',
        ],
      }}
    />
  );
}

export function ServiceSchema({ service }: { service: ServiceOffer }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.seoDescription,
        serviceType: service.shortTitle,
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.siteUrl,
        },
        areaServed: ['Karachi', 'Pakistan', 'Worldwide'],
        url: `${siteConfig.siteUrl}/services/${service.slug}`,
      }}
    />
  );
}

export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        email: 'webnexuus@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Karachi',
          addressCountry: 'PK',
        },
        areaServed: ['Karachi', 'Pakistan', 'Worldwide'],
        priceRange: '$80+',
      }}
    />
  );
}
