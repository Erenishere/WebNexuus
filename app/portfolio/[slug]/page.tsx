import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '../../../src/metadata';
import { PortfolioDetailPage } from '../../../src/pages';
import { portfolioItems, portfolioSeoPaths } from '../../../src/content';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const seo = portfolioSeoPaths[`/portfolio/${slug}`];
  return buildMetadata(seo || portfolioSeoPaths[`/portfolio/${portfolioItems[0].slug}`]);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = portfolioItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return <PortfolioDetailPage item={item} />;
}
