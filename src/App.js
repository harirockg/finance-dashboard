import { useState, useEffect } from "react";
import { transactionsData } from "./data/mockData";
import SummaryCard from "./components/SummaryCard";
import TransactionList from "./components/TransactionList";
import RoleSwitcher from "./components/RoleSwitcher";
import ChartSection from "./components/ChartSection";
import Insights from "./components/Insights";
import { FaMoon } from "react-icons/fa";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("data");
    return saved ? JSON.parse(saved) : transactionsData;
  });

  const [role, setRole] = useState("viewer");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const income = transactions.filter(t => t.type === "income").reduce((a,b)=>a+b.amount,0);
  const expense = transactions.filter(t => t.type === "expense").reduce((a,b)=>a+b.amount,0);
  const balance = income - expense;

  return (
    <div className="min-h-screen transition bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <h1 className="text-2xl font-bold">Finance Dashboard</h1>

        <div className="flex gap-2 items-center">
          <RoleSwitcher role={role} setRole={setRole} />

          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 bg-blue-500 px-3 py-1 rounded text-white hover:scale-105 transition"
          >
            <FaMoon /> Mode
          </button>
        </div>
      </div>

      {/* 🔥 NEW: ADMIN INDICATOR */}
      {role === "admin" && (
        <p className="text-green-400 font-semibold mt-2">
          Admin Mode Active
        </p>
      )}

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
        <SummaryCard title="Balance" amount={balance} />
        <SummaryCard title="Income" amount={income} />
        <SummaryCard title="Expense" amount={expense} />
      </div>

      <ChartSection transactions={transactions} />

      <TransactionList
        transactions={transactions}
        setTransactions={setTransactions}
        role={role}
      />

      <Insights transactions={transactions} />
    </div>
  );
}

export default App;