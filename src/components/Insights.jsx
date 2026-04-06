function Insights({ transactions }) {
  const exp = transactions.filter(t => t.type === "expense");

  const map = {};
  exp.forEach(t => {
    map[t.category] = (map[t.category] || 0) + t.amount;
  });

  const top = Object.keys(map).reduce((a,b)=> map[a] > map[b] ? a : b);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-4">
      <h2 className="font-bold mb-2">Insights</h2>

      <p>Top Spending Category: <b>{top}</b></p>
      <p>Total Transactions: {transactions.length}</p>
    </div>
  );
}

export default Insights;