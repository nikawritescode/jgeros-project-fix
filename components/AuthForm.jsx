'use client';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
export default function AuthForm() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const { login } = useAuth();

  const submit = () => {
    login({ user, pass });
  };

  return (
    <div className="max-w-sm mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Login</h2>
      <Input placeholder="Username" value={user} onChange={e => setUser(e.target.value)} />
      <Input type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} />
      <Button onClick={submit}>Login</Button>
    </div>
  );
}
