'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href:'/', label:'Dashboard' },
  { href:'/analytics', label:'Analytics' },
  { href:'/new', label:'New Session' },
  { href:'/reports', label:'Reports' },
  { href:'/settings', label:'Settings' },
  { href:'/profile', label:'Customers' },
  { href:'/help', label:'Help' },
];

export default function NavBar() {
  const path = usePathname();
  return (
    <nav className="w-48 bg-white dark:bg-gray-800 shadow-lg">
      {items.map(i => (
        <Link legacyBehavior key={i.href} href={i.href}>
          <a className={`block px-4 py-3 ${
            path === i.href
              ? 'bg-m-blue text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}>{i.label}</a>
        </Link>
      ))}
    </nav>
  );
}
