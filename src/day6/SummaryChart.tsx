import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function SummaryChart({ data }: { data: any[] }) {
  const chartData = data.map((item, index) => ({
    name: item.name,
    id: index + 1,
  }));

  return (
    <div className="w-full h-64 bg-white p-4 shadow rounded">
      <h2 className="mb-4 font-bold">Submission Summary</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="id" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
