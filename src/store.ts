import { type WebApp } from '@twa-dev/types';
import { createStore } from 'zustand';

export type WebAppState = {
  WebApp: null | WebApp;
};

export type WebAppActions = {
  updateWebApp: (WebApp: WebApp) => void;
};

export type WebAppStore = WebAppState & WebAppActions;

export const defaultInitWebAppState: WebAppState = {
  WebApp: null,
};

export const createWebAppStore = (initState: WebAppState = defaultInitWebAppState) => {
  return createStore<WebAppStore>()((set) => ({
    ...initState,
    updateWebApp: (WebApp) => set(() => ({ WebApp })),
  }));
};
