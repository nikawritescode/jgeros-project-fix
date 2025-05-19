'use client';
import { useState, useEffect } from 'react';
import defaultServices from '../data/services';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '../contexts/ToastContext';

export default function SettingsPanel() {
  const [services, setServices] = useState(defaultServices);
  const { addToast } = useToast();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('customServices') || 'null');
    if (saved) setServices(saved);
  }, []);

  const save = () => {
    localStorage.setItem('customServices', JSON.stringify(services));
    addToast('Settings saved', 'info');
  };

  return (
    <div className="space-y-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold">Settings</h2>
      {Object.entries(services).map(([cat, list]) => (
        <div key={cat}>
          <h3 className="font-semibold capitalize">{cat}</h3>
          {list.map((svc, i) => (
            <div key={i} className="flex space-x-2 mb-2">
              <Input
                value={svc.price}
                onChange={e => {
                  const v = +e.target.value;
                  setServices(prev => {
                    const nxt = { ...prev };
                    nxt[cat][i].price = isNaN(v) ? 0 : v;
                    return nxt;
                  });
                }}
                placeholder="Price"
                className="w-24"
              />
              <span>₾</span>
              <Input
                value={svc.name}
                onChange={e => {
                  const v = e.target.value;
                  setServices(prev => {
                    const nxt = { ...prev };
                    nxt[cat][i].name = v;
                    return nxt;
                  });
                }}
                placeholder="Name"
              />
            </div>
          ))}
        </div>
      ))}
      <Button onClick={save}>Save Settings</Button>
    </div>
  );
}
