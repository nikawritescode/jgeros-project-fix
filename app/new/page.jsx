'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '../../store/useStore';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function NewSessionPage() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [phone, setPhone] = useState('');
  const [plate, setPlate] = useState('');
  const [type, setType] = useState('reactive');
  const [affiliate, setAffiliate] = useState('');
  const setSession = useStore(s => s.setSession);
  const router = useRouter();

  const handleNext = () => {
    if (!first || !last || !phone || !plate) {
      alert('Fill all fields');
      return;
    }
    setSession({
      owner: { first, last, phone },
      license: plate,
      sessionType: type,
      affiliateId: affiliate,
      services: []
    });
    router.push('/select');
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">New Session</h2>
      <Input placeholder="First Name" value={first} onChange={e => setFirst(e.target.value)} />
      <Input placeholder="Last Name" value={last} onChange={e => setLast(e.target.value)} />
      <Input placeholder="Phone (555-513-531)" value={phone} onChange={e => setPhone(e.target.value)} />
      <Input placeholder="License Plate (GG-420-EZ)" value={plate} onChange={e => setPlate(e.target.value)} />
      <RadioGroup value={type} onValueChange={setType} className="flex space-x-4">
        <label><RadioGroupItem value="reactive" /> Diagnostics</label>
        <label><RadioGroupItem value="proactive" /> Upgrades</label>
        <label><RadioGroupItem value="combo" /> Combos</label>
      </RadioGroup>
      <Input placeholder="Affiliate ID (optional)" value={affiliate} onChange={e => setAffiliate(e.target.value)} />
      <Button onClick={handleNext}>Next →</Button>
    </div>
  );
}
