'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ServiceCard from '../../components/ServiceCard';
import services from '../../data/services';
import { useStore } from '../../store/useStore';
import { loadReports } from '../../utils/storage';

export default function SelectPage() {
  const session = useStore(s => s.session);
  const setSession = useStore(s => s.setSession);
  const [selected, setSelected] = useState({});
  const [pop, setPop] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (!session) return router.push('/new');
    const counts = {};
    loadReports().forEach(r => {
      r.services.forEach(s => {
        counts[s.name] = (counts[s.name] || 0) + 1;
      });
    });
    setPop(counts);
  }, [session, router]);

  if (!session) return null;
  const list = services[session.sessionType];

  const toggle = svc => {
    setSelected(prev => {
      const nxt = { ...prev };
      if (nxt[svc.name]) delete nxt[svc.name];
      else nxt[svc.name] = svc;
      return nxt;
    });
  };

  const proceed = () => {
    if (!Object.keys(selected).length) {
      alert('Select at least one service.');
      return;
    }
    setSession({ ...session, services: Object.values(selected) });
    router.push('/session');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Select Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[60vh] overflow-y-auto">
        {list.map(svc => (
          <ServiceCard
            key={svc.name}
            service={svc}
            selected={!!selected[svc.name]}
            onToggle={() => toggle(svc)}
            popularity={pop[svc.name] || 0}
          />
        ))}
      </div>
      <button className="mt-4 btn-primary" onClick={proceed}>Continue →</button>
    </div>
  );
}
