type PageRow = {
  path: string;
  views: number;
  users: number;
  avgTime: string;
};

export default function TopPagesTable({ rows }: { rows: PageRow[] }) {
  return (
    <div className="card">
      <div className="card-header">Top Pages</div>
      <div className="card-body">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-slate-500">
                <th className="py-2 pr-6">Page</th>
                <th className="py-2 pr-6">Views</th>
                <th className="py-2 pr-6">Users</th>
                <th className="py-2 pr-6">Avg time on page</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r) => (
                <tr key={r.path} className="text-slate-800">
                  <td className="py-3 pr-6 font-medium">{r.path}</td>
                  <td className="py-3 pr-6">{r.views.toLocaleString()}</td>
                  <td className="py-3 pr-6">{r.users.toLocaleString()}</td>
                  <td className="py-3 pr-6">{r.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
