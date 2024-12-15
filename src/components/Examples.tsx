'use client';

import { useEffect } from 'react';

import { useWebAppStore } from '@/components/WebAppStoreProvider';

export default function Examples() {
  const { WebApp } = useWebAppStore((state) => state);

  useEffect(() => {
    if (!WebApp) return;

    WebApp.setHeaderColor('#e2e8f0');
    WebApp.setBottomBarColor('#0f172a');

    const BackButton = WebApp.BackButton;
    BackButton.show();
    BackButton.onClick(() => window.history.back());

    const MainButton = WebApp.MainButton;
    MainButton.setText('Submit');
    MainButton.show();
    MainButton.onClick(() => alert('submitted'));

    const SecondaryButton = WebApp.SecondaryButton;
    SecondaryButton.setParams({ text: 'Cancel', position: 'right', color: '#ef4444', text_color: '#fff' });
    SecondaryButton.show();
    SecondaryButton.onClick(() => alert('cancelled'));
  }, [WebApp]);

  if (!WebApp) return null;
}
