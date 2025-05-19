'use client';
import useOffline from '../hooks/useOffline';

export default function OfflineBanner() {
  const online = useOffline();
  if (online) return null;
  return (
    <div className="fixed top-0 w-full bg-red-600 text-white text-center py-1 z-50">
      Offline Mode — Data will sync when reconnected
    </div>
  );
}
