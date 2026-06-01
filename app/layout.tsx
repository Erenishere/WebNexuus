import type { Metadata } from 'next';
import { AppShell } from '../src/components';
import { seoMap } from '../src/content';
import { buildMetadata } from '../src/metadata';
import '../src/styles.css';

export const metadata: Metadata = buildMetadata(seoMap['/']);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
