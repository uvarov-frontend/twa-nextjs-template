'use client';

import WebApp from '@twa-dev/sdk';
import { BackButton, MainButton, SecondaryButton } from '@twa-dev/sdk/react';

export default function InitTWA() {
  WebApp.setHeaderColor('#e2e8f0');
  WebApp.setBottomBarColor('#0f172a');
  // console.log(WebApp.initDataUnsafe);

  return (
    <>
      <BackButton onClick={() => window.history.back()} />
      <MainButton text="Submit" onClick={() => alert('submitted')} />
      <SecondaryButton text="Cancel" position="bottom" onClick={() => alert('cancelled')} />
    </>
  );
}
