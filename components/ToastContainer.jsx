'use client';
import { useToast } from '../contexts/ToastContext';

export default function ToastContainer() {
  const { toasts } = useToast();
  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {toasts.map(t => (
        <div key={t.id} className={`px-4 py-2 rounded shadow ${t.type==='error'?'bg-red-500':'bg-blue-500'} text-white`}>
          {t.msg}
        </div>
      ))}
    </div>
  );
}
