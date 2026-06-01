import type { Metadata } from 'next';
import { seoMap } from '../../src/content';
import { buildMetadata } from '../../src/metadata';
import { LocalBusinessSchema } from '../../src/seo';
import { ContactPage } from '../../src/pages';

export const metadata: Metadata = buildMetadata(seoMap['/contact']);

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <ContactPage />
    </>
  );
}
