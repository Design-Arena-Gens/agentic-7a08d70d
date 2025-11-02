"use client";

import Sidebar from '@/components/Sidebar';
import MetricCard from '@/components/MetricCard';
import TimeseriesChart, { TimeseriesPoint } from '@/components/TimeseriesChart';
import TrafficChannelsChart, { ChannelDatum } from '@/components/TrafficChannelsChart';
import TopPagesTable from '@/components/TopPagesTable';
import DateRangePicker, { DateRange } from '@/components/DateRangePicker';
import { useMemo, useState } from 'react';

function generateTimeseries(range: DateRange): TimeseriesPoint[] {
  const start = new Date(range.start);
  const end = new Date(range.end);
  const data: TimeseriesPoint[] = [];
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const day = new Date(d);
    const base = 800 + Math.sin(day.getTime() / (1000 * 60 * 60 * 24 * 3)) * 200;
    const users = Math.round(base + (Math.random() - 0.5) * 120);
    const sessions = Math.round(users * (1.25 + (Math.random() - 0.5) * 0.1));
    const ds = day.toISOString().slice(5, 10); // mm-dd
    data.push({ date: ds, users: Math.max(0, users), sessions: Math.max(0, sessions) });
  }
  return data;
}

function generateChannels(): ChannelDatum[] {
  const channels = ['Organic', 'Direct', 'Referral', 'Social', 'Email'];
  return channels.map((c) => ({ channel: c, users: Math.round(300 + Math.random() * 900) }));
}

function generatePages() {
  const pages = ['/','/pricing','/docs/getting-started','/blog/how-to-scale','/about','/contact'];
  return pages.map((p) => ({
    path: p,
    views: Math.round(1500 + Math.random() * 4000),
    users: Math.round(600 + Math.random() * 1800),
    avgTime: `${Math.floor(0 + Math.random()*2)}:${String(Math.floor(Math.random()*60)).padStart(2, '0')}`,
  }));
}

export default function Page() {
  const today = new Date();
  const thirtyDaysAgo = new Date(today);
  thirtyDaysAgo.setDate(today.getDate() - 29);
  const initial: DateRange = {
    start: thirtyDaysAgo.toISOString().slice(0, 10),
    end: today.toISOString().slice(0, 10),
  };

  const [range, setRange] = useState<DateRange>(initial);

  const series = useMemo(() => generateTimeseries(range), [range]);
  const channels = useMemo(() => generateChannels(), [range]);
  const pages = useMemo(() => generatePages(), [range]);

  const totalUsers = series.reduce((a, b) => a + b.users, 0);
  const totalSessions = series.reduce((a, b) => a + b.sessions, 0);
  const avgEngagement = Math.round((totalSessions / Math.max(totalUsers, 1)) * 100) / 100;
  const bounceRate = Math.round((40 + Math.random() * 15) * 100) / 100;

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="container-responsive flex h-16 items-center justify-between">
            <div className="text-lg font-semibold text-slate-800">Overview</div>
            <DateRangePicker initial={range} onChange={setRange} />
          </div>
        </header>

        <section className="container-responsive mt-6 flex flex-col gap-6 pb-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard title="Users" value={totalUsers.toLocaleString()} delta="+8.4% vs prev." trend="up" />
            <MetricCard title="Sessions" value={totalSessions.toLocaleString()} delta="+3.1% vs prev." trend="up" />
            <MetricCard title="Avg. engagement / user" value={`${avgEngagement.toFixed(2)}`} delta="+1.2%" trend="up" />
            <MetricCard title="Bounce rate" value={`${bounceRate.toFixed(1)}%`} delta="-0.6%" trend="down" />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TimeseriesChart data={series} />
            </div>
            <div className="lg:col-span-1">
              <TrafficChannelsChart data={channels} />
            </div>
          </div>

          <TopPagesTable rows={pages} />
        </section>
      </main>
    </div>
  );
}
