'use client';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

export default function DarkModeToggle() {
  const [mode, setMode] = useState('light');
  useEffect(() => {
    const m = localStorage.theme || 'light';
    setMode(m);
    document.documentElement.classList.toggle('dark', m === 'dark');
  }, []);
  const toggle = () => {
    const m = mode === 'light' ? 'dark' : 'light';
    setMode(m);
    document.documentElement.classList.toggle('dark', m === 'dark');
    localStorage.theme = m;
  };
  return (
    <button onClick={toggle} className="p-2">
      {mode === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
