import type { Metadata } from 'next';
import { seoMap } from '../src/content';
import { buildMetadata } from '../src/metadata';
import { HomePage } from '../src/pages';

export const metadata: Metadata = buildMetadata(seoMap['/']);

export default function Page() {
  return <HomePage />;
}
