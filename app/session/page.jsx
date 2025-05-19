'use client';
import { useState } from 'react';
import { useStore } from '../../store/useStore';
import { useRouter } from 'next/navigation';
import { loadReports, saveReports } from '../../utils/storage';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function SessionPage() {
  const session = useStore(s => s.session);
  const addRpt = useStore(s => s.addReport);
  const reset = useStore(s => s.resetSession);
  const router = useRouter();
  const [payment, setPayment] = useState('cash');
  const [status, setStatus] = useState('Completed');

  if (!session) { router.push('/new'); return null; }

  const sub = session.services.reduce((a, b) => a + b.price, 0);
  const discount = session.affiliateId ? +(sub * 0.2).toFixed(2) : 0;
  const total = sub - discount;

  const finish = () => {
    const rpt = {
      id: uuidv4(),
      date: new Date().toISOString(),
      ...session,
      discount, total, payment, status
    };
    const all = loadReports();
    all.push(rpt);
    saveReports(all);
    addRpt(rpt);
    reset();
    router.push('/summary');
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Confirm & Pay</h2>
      <ul className="list-disc ml-6">
        {session.services.map(s => (
          <li key={s.name}>{s.name} — ₾{s.price}</li>
        ))}
      </ul>
      <p><strong>Subtotal:</strong> ₾{sub}</p>
      {discount > 0 && <p><strong>Discount:</strong> -₾{discount}</p>}
      <p><strong>Total:</strong> ₾{total}</p>
      <RadioGroup value={payment} onValueChange={setPayment} className="flex gap-4">
        <label><RadioGroupItem value="cash" /> Cash</label>
        <label><RadioGroupItem value="card" /> Card</label>
      </RadioGroup>
      <RadioGroup value={status} onValueChange={setStatus} className="flex gap-4">
        <label><RadioGroupItem value="Completed" /> Completed</label>
        <label><RadioGroupItem value="Error" /> Error</label>
      </RadioGroup>
      <Button onClick={finish}>Finish & Save</Button>
    </div>
  );
}
