'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '../contexts/ToastContext';

export default function FeedbackForm() {
  const [rating, setRating] = useState(5);
  const [note, setNote] = useState('');
  const { addToast } = useToast();

  const submit = () => {
    console.log({ rating, note });
    addToast('Thanks for your feedback!', 'info');
    setNote('');
    setRating(5);
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Feedback</h2>
      <div>
        <label>Rating (1–5):</label>
        <Input type="number" min="1" max="5" value={rating} onChange={e => setRating(+e.target.value)} />
      </div>
      <div>
        <label>Notes:</label>
        <Input value={note} onChange={e => setNote(e.target.value)} />
      </div>
      <Button onClick={submit}>Submit Feedback</Button>
    </div>
  );
}
