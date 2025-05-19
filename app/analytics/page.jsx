'use client';
import { useStore } from '../../store/useStore';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

export default function AnalyticsPage() {
  const reports = useStore(s => s.reports);
  const byDate = {};
  reports.forEach(r => {
    const d = new Date(r.date).toLocaleDateString();
    byDate[d] = (byDate[d] || 0) + 1;
  });
  const data = Object.entries(byDate).map(([date, count]) => ({ date, count }));

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Analytics</h2>
      <div className="w-full h-64 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="mb-2">Sessions Over Time</h3>
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#0066cc" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
