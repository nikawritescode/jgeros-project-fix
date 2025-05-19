'use client';

import { useState, useEffect } from 'react';

export default function useOffline() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setOnline(navigator.onLine);

      const handleOnline = () => setOnline(true);
      const handleOffline = () => setOnline(false);

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  return online;
}
