import type { Metadata } from 'next';

import ProviderSDK from '@/components/ProviderSDK';

import './globals.css';

export const metadata: Metadata = {
  title: 'Telegram WebApp',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ProviderSDK>{children}</ProviderSDK>
      </body>
    </html>
  );
}
