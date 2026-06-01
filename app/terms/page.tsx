import type { Metadata } from 'next';
import { seoMap } from '../../src/content';
import { buildMetadata } from '../../src/metadata';
import { TermsPage } from '../../src/pages';

export const metadata: Metadata = buildMetadata(seoMap['/terms']);

export default function Page() {
  return <TermsPage />;
}
