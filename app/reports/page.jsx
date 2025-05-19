'use client';
import { useEffect, useState } from 'react';
import { loadReports } from '../../utils/storage';
import SearchBar from '../../components/SearchBar';
import Link from 'next/link';

export default function ReportsPage() {
  const [reports, setReports] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setReports(loadReports());
  }, []);

  const filtered = reports.filter(r =>
    r.license.includes(filter) || r.id.includes(filter)
  );

  return (
    <div className="max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">All Sessions</h2>
      <SearchBar value={filter} onChange={setFilter} placeholder="Search ID or Plate" />
      <ul className="divide-y divide-gray-300">
        {filtered.map(r => (
          <li key={r.id} className="py-2">
            <Link legacyBehavior href={`/reports/${r.id}`}>
              <a className="text-m-blue hover:underline">
                {new Date(r.date).toLocaleDateString()} — {r.license} — ₾{r.total} — {r.status}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
