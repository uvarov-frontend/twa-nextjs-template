'use client';

import dynamic from 'next/dynamic';

const HeaderTWA = dynamic(() => import('@/components/TWA/Header'), { ssr: false });
const FooterTWA = dynamic(() => import('@/components/TWA/Footer'), { ssr: false });

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderTWA />
      {children}
      <FooterTWA />
    </>
  );
}
