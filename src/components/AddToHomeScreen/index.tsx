'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ModuleLoading = () => (
  <div className="w-screen h-screen grid place-items-center">
    <p className="animate-bounce text-white font-bold">Loading...</p>
  </div>
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

import useUserAgent from '@/src/hooks/useUserAgent';
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

export default function AddToHomeScreen() {
  const [displayPrompt, setDisplayPrompt] = useState(false);
  const { userAgent, isMobile, isStandalone, isIOS } = useUserAgent();

  const closePrompt = () => {
    setDisplayPrompt(false);
  };

  useEffect(() => {
    // Only show prompt if user is on mobile and app is not installed
    if (isMobile && !isStandalone) {
      setDisplayPrompt(true);
    }
  }, [userAgent, isMobile, isStandalone, isIOS]);

  return (
    <>
      {displayPrompt && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/70 z-50">
          <AddToHomeScreenModal
            isIOS={isIOS}
            isOpen={displayPrompt}
            closePrompt={closePrompt}
          />
        </div>
      )}
    </>
  );
}
