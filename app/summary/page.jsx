'use client';
import { useEffect, useState } from 'react';
import { loadReports } from '../../utils/storage';
import { generatePDF } from '../../utils/pdfGenerator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SummaryPage() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const all = loadReports();
    setReport(all[all.length - 1] || null);
  }, []);

  if (!report) return <p>No session found.</p>;

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Session Summary</h2>
      <p><strong>Service count:</strong> {report.services.length}</p>
      <p><strong>Total:</strong> ₾{report.total}</p>
      <Button onClick={() => generatePDF(report)}>Download PDF</Button>
      <Link legacyBehavior href="/reports"><a className="text-m-blue">All Sessions →</a></Link>
    </div>
  );
}
