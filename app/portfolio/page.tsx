import type { Metadata } from 'next';
import { seoMap } from '../../src/content';
import { buildMetadata } from '../../src/metadata';
import { PortfolioPage } from '../../src/pages';

export const metadata: Metadata = buildMetadata(seoMap['/portfolio']);

export default function Page() {
  return <PortfolioPage />;
}
