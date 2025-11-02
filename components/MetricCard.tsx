type MetricCardProps = {
  title: string;
  value: string;
  delta?: string;
  trend?: 'up' | 'down' | 'flat';
};

export default function MetricCard({ title, value, delta, trend = 'flat' }: MetricCardProps) {
  const trendColor = trend === 'up' ? 'text-emerald-600' : trend === 'down' ? 'text-rose-600' : 'text-slate-500';
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="flex items-baseline gap-3">
          <div className="text-3xl font-semibold text-slate-900">{value}</div>
          {delta && <div className={`text-sm ${trendColor}`}>{delta}</div>}
        </div>
      </div>
    </div>
  );
}
