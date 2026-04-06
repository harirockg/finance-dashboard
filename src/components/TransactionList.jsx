import { useState } from "react";

function TransactionList({ transactions, setTransactions, role }) {
  const [search, setSearch] = useState("");

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-4">
      <h2 className="font-bold mb-2">Transactions</h2>

      <input
        placeholder="Search category..."
        className="w-full p-2 mb-3 rounded bg-gray-100 dark:bg-gray-700"
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.length === 0 && <p>No transactions found</p>}

      {filtered.map(t => (
        <div key={t.id} className="flex justify-between border-b py-2 text-sm md:text-base">
          <div>
            <p className="font-medium">{t.category}</p>
            <p className="text-gray-400">{t.date}</p>
          </div>

          <p className={t.type === "income" ? "text-green-500" : "text-red-500"}>
            ₹{t.amount}
          </p>
        </div>
      ))}

      {role === "admin" && (
        <button
          onClick={() =>
            setTransactions([
              ...transactions,
              {
                id: Date.now(),
                date: "2026-04-06",
                amount: 1000,
                category: "Added",
                type: "expense"
              }
            ])
          }
          className="mt-3 bg-green-500 px-3 py-1 rounded text-white hover:scale-105 transition"
        >
          + Add Transaction
        </button>
      )}
    </div>
  );
}

export default TransactionList;