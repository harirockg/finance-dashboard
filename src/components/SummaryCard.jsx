import { FaRupeeSign } from "react-icons/fa";

function SummaryCard({ title, amount }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 hover:shadow-lg transition duration-300">
      <h2 className="text-gray-400">{title}</h2>
      <p className="text-xl font-bold flex items-center gap-1">
        <FaRupeeSign /> {amount}
      </p>
    </div>
  );
}

export default SummaryCard;