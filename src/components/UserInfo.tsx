'use client';

import { useWebAppStore } from '@/components/WebAppStoreProvider';

export default function UserInfo() {
  const { WebApp } = useWebAppStore((state) => state);

  if (!WebApp) return <div className="my-[14px]">Loading...</div>;

  return (
    <div className="grid grid-flow-row items-start my-[14px]">
      <b>User info:</b>
      <div>ID: {WebApp.initDataUnsafe.user?.id ?? 0}</div>
      <div>First Name: {WebApp.initDataUnsafe.user?.first_name ?? 'Empty'}</div>
      <div>Last Name: {WebApp.initDataUnsafe.user?.last_name ?? 'Empty'}</div>
    </div>
  );
}
