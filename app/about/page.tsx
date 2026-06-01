import type { Metadata } from 'next';
import { seoMap } from '../../src/content';
import { buildMetadata } from '../../src/metadata';
import { AboutPage } from '../../src/pages';

export const metadata: Metadata = buildMetadata(seoMap['/about']);

export default function Page() {
  return <AboutPage />;
}
