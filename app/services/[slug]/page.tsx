import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '../../../src/metadata';
import { ServiceDetailPage } from '../../../src/pages';
import { serviceSeoPaths, services } from '../../../src/content';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const seo = serviceSeoPaths[`/services/${slug}`];
  return buildMetadata(seo || serviceSeoPaths[`/services/${services[0].slug}`]);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
