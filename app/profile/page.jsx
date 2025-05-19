'use client';
import { useState, useEffect } from 'react';
import { loadReports } from '../../utils/storage';
import SearchBar from '../../components/SearchBar';
import Link from 'next/link';

export default function ProfilePage() {
  const [filter, setFilter] = useState('');
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const all = loadReports();
    setSessions(all);
  }, []);

  const filtered = sessions.filter(r =>
    r.license.includes(filter) || r.owner.phone.includes(filter)
  );

  return (
    <div className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Customer Lookup</h2>
      <SearchBar value={filter} onChange={setFilter} placeholder="Search Plate or Phone" />
      <ul className="divide-y divide-gray-300">
        {filtered.map(r => (
          <li key={r.id} className="py-2">
            <Link legacyBehavior href={`/reports/${r.id}`}>
              <a className="text-m-blue hover:underline">
                {r.license} — {r.owner.first} {r.owner.last} — {new Date(r.date).toLocaleDateString()}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
