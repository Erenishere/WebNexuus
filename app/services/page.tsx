import type { Metadata } from 'next';
import { seoMap } from '../../src/content';
import { buildMetadata } from '../../src/metadata';
import { ServicesPage } from '../../src/pages';

export const metadata: Metadata = buildMetadata(seoMap['/services']);

export default function Page() {
  return <ServicesPage />;
}
