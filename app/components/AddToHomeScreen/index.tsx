'use client';

import { useState, useEffect } from 'react';
import { setCookie, getCookie } from 'cookies-next';
import dynamic from 'next/dynamic';

const ModuleLoading = () => (
  <p className="animate-bounce text-white font-bold">Loading...</p>
);
const AddToIosSafari = dynamic(() => import('./AddToHomeScreenModal'), {
  loading: () => <ModuleLoading />,
});
const AddToMobileChrome = dynamic(() => import('./AddToHomeScreenModal'), {
  loading: () => <ModuleLoading />,
});
const AddToMobileFirefox = dynamic(() => import('./AddToHomeScreenModal'), {
  loading: () => <ModuleLoading />,
});
const AddToMobileFirefoxIos = dynamic(() => import('./AddToHomeScreenModal'), {
  loading: () => <ModuleLoading />,
});
const AddToMobileChromeIos = dynamic(() => import('./AddToHomeScreenModal'), {
  loading: () => <ModuleLoading />,
});
const AddToSamsung = dynamic(() => import('./AddToHomeScreenModal'), {
  loading: () => <ModuleLoading />,
});
const AddToOtherBrowser = dynamic(() => import('./AddToHomeScreenModal'), {
  loading: () => <ModuleLoading />,
});

import useUserAgent from '@/app/hooks/useUserAgent';
import AddToHomeScreenModal from './AddToHomeScreenModal';

type AddToHomeScreenPromptType =
  | 'safari'
  | 'chrome'
  | 'firefox'
  | 'other'
  | 'firefoxIos'
  | 'chromeIos'
  | 'samsung'
  | '';
const COOKIE_NAME = 'addToHomeScreenPrompt';

export default function AddToHomeScreen() {
  const [displayPrompt, setDisplayPrompt] = useState(false);
  const { userAgent, isMobile, isStandalone, isIOS } = useUserAgent();

  const closePrompt = () => {
    setDisplayPrompt(false);
  };

  const doNotShowAgain = () => {
    // Create date 1 year from now
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    setCookie(COOKIE_NAME, 'dontShow', { expires: date }); // Set cookie for a year
    setDisplayPrompt(false);
  };

  useEffect(() => {
    const addToHomeScreenPromptCookie = getCookie(COOKIE_NAME);

    if (addToHomeScreenPromptCookie !== 'dontShow') {
      // Only show prompt if user is on mobile and app is not installed
      if (isMobile && !isStandalone) {
        setDisplayPrompt(true);
      }
    }
  }, [userAgent, isMobile, isStandalone, isIOS]);

  return (
    <>
      {displayPrompt && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/70 z-50"
          onClick={closePrompt}
        >
          <AddToHomeScreenModal
            isOpen={displayPrompt}
            closePrompt={closePrompt}
            doNotShowAgain={doNotShowAgain}
          />
        </div>
      )}
    </>
  );
}
