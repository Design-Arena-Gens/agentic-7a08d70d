"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Overview' },
  { href: '/acquisition', label: 'Acquisition' },
  { href: '/engagement', label: 'Engagement' },
  { href: '/monetization', label: 'Monetization' },
  { href: '/retention', label: 'Retention' },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:gap-2 lg:border-r lg:border-slate-200 lg:bg-white lg:p-4">
      <div className="px-2 py-4 text-xl font-semibold text-slate-800">Insightly</div>
      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors ' +
                (active
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900')
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-500">
        Demo data for illustrative purposes.
      </div>
    </aside>
  );
}
