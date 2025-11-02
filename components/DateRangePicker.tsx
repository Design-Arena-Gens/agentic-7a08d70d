"use client";

import { useState } from 'react';

export type DateRange = {
  start: string; // yyyy-mm-dd
  end: string;   // yyyy-mm-dd
};

export default function DateRangePicker({
  initial,
  onChange,
}: {
  initial: DateRange;
  onChange: (range: DateRange) => void;
}) {
  const [start, setStart] = useState(initial.start);
  const [end, setEnd] = useState(initial.end);

  return (
    <div className="flex w-full flex-wrap items-center gap-2">
      <input
        type="date"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        className="w-40 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none"
      />
      <span className="text-slate-500">to</span>
      <input
        type="date"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        className="w-40 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none"
      />
      <button
        onClick={() => onChange({ start, end })}
        className="rounded-md bg-brand-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-700"
      >
        Apply
      </button>
    </div>
  );
}
