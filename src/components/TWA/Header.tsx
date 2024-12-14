'use client';

import WebApp from '@twa-dev/sdk';
import { BackButton } from '@twa-dev/sdk/react';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    WebApp.setHeaderColor('#e2e8f0');
  }, []);

  return <BackButton onClick={() => window.history.back()} />;
}
