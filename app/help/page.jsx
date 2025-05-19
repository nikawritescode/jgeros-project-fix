export default function HelpPage() {
  return (
    <div className="max-w-lg mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Help & FAQ</h2>
      <h3 className="font-semibold">How to start a session?</h3>
      <p>Go to “New Session”, enter owner and car info, select services, then confirm & pay.</p>
      <h3 className="font-semibold">How to view past reports?</h3>
      <p>Navigate to “Reports” or “Customers” and click on any session.</p>
      <h3 className="font-semibold">What if I go offline?</h3>
      <p>You’ll see a banner; data is saved locally and syncs when you reconnect.</p>
      <h3 className="font-semibold">Need more help?</h3>
      <p>Contact your admin or refer to the user manual.</p>
    </div>
  );
}
