import type { Metadata } from 'next';
import Script from 'next/script';

import { WebAppStoreProvider } from '@/components/WebAppStoreProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Telegram WebApp',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <WebAppStoreProvider>{children}</WebAppStoreProvider>
        <Script id="TelegramWebApp" src="/telegram-web-app.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
