import type { Metadata } from 'next';
import { seoMap } from '../../src/content';
import { buildMetadata } from '../../src/metadata';
import { PricingPage } from '../../src/pages';

export const metadata: Metadata = buildMetadata(seoMap['/pricing']);

export default function Page() {
  return <PricingPage />;
}
