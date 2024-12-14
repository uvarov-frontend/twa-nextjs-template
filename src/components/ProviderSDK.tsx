'use client';

import dynamic from 'next/dynamic';

const InitTWA = dynamic(() => import('@/components/InitTWA'), { ssr: false });

export default function ProviderSDK({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InitTWA />
      {children}
    </>
  );
}
