'use client';

import WebApp from '@twa-dev/sdk';
import { MainButton, SecondaryButton } from '@twa-dev/sdk/react';
import { useEffect } from 'react';

export default function FooterTWA() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    WebApp.setBottomBarColor('#0f172a');
  }, []);

  return (
    <>
      <MainButton text="Continue" onClick={() => alert('continue')} />
      <SecondaryButton text="Cancel" position="bottom" onClick={() => alert('cancelled')} />
    </>
  );
}
