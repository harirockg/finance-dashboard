import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function ChartSection({ transactions }) {
  const data = transactions.map(t => ({
    date: t.date,
    amount: t.amount
  }));

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow my-4">
      <h2 className="font-bold mb-2">Spending Trend</h2>

      
      <div className="flex justify-center overflow-x-auto">
        <LineChart width={400} height={250} data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#3b82f6" />
        </LineChart>
      </div>
    </div>
  );
}

export default ChartSection;