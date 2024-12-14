import type { Metadata } from 'next';

import ProviderTWA from '@/components/TWA/Provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Telegram WebApp',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ProviderTWA>{children}</ProviderTWA>
      </body>
    </html>
  );
}
