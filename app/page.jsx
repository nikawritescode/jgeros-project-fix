'use client';
import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { loadReports } from '../utils/storage';
import StatCard from '../components/StatCard';
import { useRouter } from 'next/navigation';
import { Card, CardTitle, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  const setReports = useStore(s => s.setReports);
  const reports = useStore(s => s.reports);
  const router = useRouter();

  useEffect(() => {
    setReports(loadReports());
  }, [setReports]);

  const todayCount = reports.filter(
    r => new Date(r.date).toDateString() === new Date().toDateString()
  ).length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StatCard title="Total Sessions" value={reports.length.toString()} />
      <StatCard title="Today's Sessions" value={todayCount.toString()} />
      <Card>
        <CardTitle>Actions</CardTitle>
        <CardContent className="flex space-x-2">
          <button className="btn" onClick={() => router.push('/new')}>New Session</button>
          <button className="btn-outline" onClick={() => router.push('/reports')}>Reports</button>
        </CardContent>
      </Card>
    </div>
  );
}
