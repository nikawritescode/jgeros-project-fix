import { Card, CardTitle, CardContent } from "@/components/ui/card";

export default function StatCard({ title, value }) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardContent className="text-3xl">{value}</CardContent>
    </Card>
  );
}
