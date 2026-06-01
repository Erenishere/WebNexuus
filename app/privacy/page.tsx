import type { Metadata } from 'next';
import { seoMap } from '../../src/content';
import { buildMetadata } from '../../src/metadata';
import { PrivacyPage } from '../../src/pages';

export const metadata: Metadata = buildMetadata(seoMap['/privacy']);

export default function Page() {
  return <PrivacyPage />;
}
