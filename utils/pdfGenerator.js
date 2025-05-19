import jsPDF from 'jspdf';

export function generatePDF(report) {
  const doc = new jsPDF();
  doc.setFontSize(14);
  doc.text('M-Tech Auto Session Report', 10, 10);
  doc.setFontSize(12);
  doc.text(`ID: ${report.id}`, 10, 20);
  doc.text(`Date: ${new Date(report.date).toLocaleString()}`, 10, 30);
  report.services.forEach((s, i) => {
    doc.text(`${i+1}. ${s.name} – ₾${s.price}`, 10, 40 + i * 8);
  });
  doc.text(`Total Paid: ₾${report.total}`, 10, 40 + report.services.length * 8 + 10);
  doc.save(`session-${report.id}.pdf`);
}
