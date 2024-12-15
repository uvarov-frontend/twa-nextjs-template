'use client';

import type { Telegram } from '@twa-dev/types';
import { createContext, useContext, useEffect, useRef } from 'react';
import { useStore } from 'zustand';

import { createWebAppStore, type WebAppStore } from '@/store';

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

export type WebAppStoreApi = ReturnType<typeof createWebAppStore>;

export const WebAppStoreContext = createContext<WebAppStoreApi | undefined>(undefined);

export interface WebAppStoreProviderProps {
  children: React.ReactNode;
}

export const WebAppStoreProvider = ({ children }: WebAppStoreProviderProps) => {
  const storeRef = useRef<WebAppStoreApi>(null);
  if (!storeRef.current) storeRef.current = createWebAppStore();

  useEffect(() => {
    if (!storeRef.current || typeof window === 'undefined') return;
    storeRef.current.setState({ WebApp: window.Telegram.WebApp });
  }, []);

  return <WebAppStoreContext.Provider value={storeRef.current}>{children}</WebAppStoreContext.Provider>;
};

export const useWebAppStore = <T,>(selector: (store: WebAppStore) => T): T => {
  const webAppStoreContext = useContext(WebAppStoreContext);
  if (!webAppStoreContext) throw new Error(`useWebAppStore must be used within WebAppStoreProvider`);
  return useStore(webAppStoreContext, selector);
};
