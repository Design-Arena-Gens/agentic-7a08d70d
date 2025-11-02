"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export type TimeseriesPoint = {
  date: string;
  users: number;
  sessions: number;
};

export default function TimeseriesChart({ data }: { data: TimeseriesPoint[] }) {
  return (
    <div className="card">
      <div className="card-header">Users & Sessions</div>
      <div className="card-body">
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorU" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5670ff" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#5670ff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorS" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} tickMargin={8} />
              <YAxis tick={{ fontSize: 12 }} allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="users" stroke="#5670ff" fill="url(#colorU)" name="Users" />
              <Area type="monotone" dataKey="sessions" stroke="#10b981" fill="url(#colorS)" name="Sessions" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
