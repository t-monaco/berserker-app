'use client';

import useUserAgent from '@/src/hooks/useUserAgent';
import { useEffect, useState } from 'react';
import AddToHomeScreenModal from './AddToHomeScreenModal';

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
