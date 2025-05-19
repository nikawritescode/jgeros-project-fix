'use client';
import { useEffect, useState } from 'react';
import { loadReports } from '../../../utils/storage';
import { generatePDF } from '../../../utils/pdfGenerator';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function ReportDetailPage({ params }) {
  const [report, setReport] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const rpt = loadReports().find(r => r.id === params.id);
    setReport(rpt || null);
  }, [params.id]);

  if (!report) return <p>Not found.</p>;

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Session {report.id}</h2>
      <p><strong>Total:</strong> ₾{report.total}</p>
      <Button onClick={() => generatePDF(report)}>Download PDF</Button>
      <button className="text-m-blue" onClick={() => router.back()}>← Back</button>
    </div>
  );
}
