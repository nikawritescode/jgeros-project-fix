'use client';
import DarkModeToggle from './DarkModeToggle';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="bg-m-black text-white flex items-center justify-between px-4 py-2">
      <div className="flex-1 h-1 bg-gradient-to-r from-m-blue via-m-magenta to-m-red" />
      <h1 className="mx-4 text-xl font-bold">M-Tech Auto</h1>
      <div className="flex items-center space-x-4">
        {user && <span>👤 {user.name}</span>}
        {user && <button onClick={logout} className="text-sm">Logout</button>}
        <DarkModeToggle />
      </div>
      <div className="flex-1 h-1 bg-gradient-to-r from-m-blue via-m-magenta to-m-red" />
    </header>
  );
}
