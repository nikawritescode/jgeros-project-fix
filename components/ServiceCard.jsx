import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
export default function ServiceCard({ service, selected, onToggle, popularity }) {
  let level = 'Low';
  if (popularity > 10) level = 'Hot';
  else if (popularity > 3) level = 'Medium';

  return (
    <Card onClick={onToggle} className={`cursor-pointer ${selected ? 'border-2 border-m-blue' : ''}`}>
      <CardContent>
        <div className="flex justify-between items-start">
          <h3 className="font-semibold">{service.name}</h3>
          <Badge>{level}</Badge>
        </div>
        <p className="text-sm mt-2 h-12 overflow-hidden">{service.description}</p>
        <div className="mt-2 text-right font-bold">₾{service.price}</div>
      </CardContent>
    </Card>
  );
}
