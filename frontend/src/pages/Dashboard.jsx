import React, { useState, useEffect } from "react";
import { Settings, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../axios";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks/");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await api.post("/tasks/", {
        title,
        user: user._id,
      });
      setTitle("");
      fetchTasks();
    } catch (err) {
      console.log("Add Task Error:", err.response?.data || err.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  // LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user from localStorage
    navigate("/login"); // Redirect to login page
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const staticStocks = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      quantity: 10,
      buyPrice: 150,
      currentPrice: 175,
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      quantity: 5,
      buyPrice: 600,
      currentPrice: 720,
    },
    {
      symbol: "AMZN",
      name: "Amazon.com",
      quantity: 2,
      buyPrice: 3200,
      currentPrice: 3400,
    },
  ];

  return (
    <div>
      {/* HEADER */}
      <div className="first_container flex flex-col md:flex-row md:m-20 m-8 justify-between items-center bg-[#f2fbf9] border border-gray-300 rounded-xl p-7 shadow-lg md:w-[90%] w-[85%]">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full grid place-items-center text-white font-bold text-3xl bg-[radial-gradient(circle_at_top_left,_#0a4d78,_#f3a8a0)]">
            {user?.name
              ? user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
              : "U"}
          </div>

          <div className="flex flex-col">
            <div className="text-3xl font-semibold font-outfit">
              {user?.name || "User"}
            </div>
            <div className="text-gray-700 text-lg">
              {user?.email || "user@example.com"}
            </div>
            <div className="text-gray-600 text-lg">
              Premium Member since Oct 2022
            </div>
          </div>
        </div>

        {/* LOGOUT BUTTON */}
        <div className="mt-5 md:mt-0">
          <div
            className="border border-gray-300 rounded-lg px-5 py-2 cursor-pointer hover:bg-gray-100 transition"
            onClick={handleLogout}
          >
            <Settings size={18} className="inline-block mr-2 mb-1" />
            Logout
          </div>
        </div>
      </div>

      {/* TASK SECTION */}
      <div className="task_section md:m-20 m-8 mt-10 bg-[#f2fbf9] p-6 rounded-xl border border-gray-300 shadow-lg">
        <h2 className="text-2xl font-bold font-nunito mb-4">
          Your Dream Stock List
        </h2>

        <form onSubmit={addTask} className="flex gap-3 flex-col md:flex-row">
          <input
            type="text"
            placeholder="Enter stock name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full md:w-3/4 h-12 rounded-lg border bg-white border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-900 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
          >
            Add
          </button>
        </form>

        <div className="mt-6">
          {tasks.length === 0 ? (
            <div className="text-gray-500 font-nunito">
              No Stocks added yet...
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {tasks.map((task) => (
                <li
                  key={task._id}
                  className="flex justify-between items-center bg-white p-4 rounded-lg border border-gray-300 shadow-sm"
                >
                  <div className="font-nunito text-lg">{task.title}</div>

                  <Trash2
                    size={20}
                    className="text-red-500 cursor-pointer hover:text-red-700"
                    onClick={() => deleteTask(task._id)}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* STATIC STOCK TABLE */}
      <div className="stock_table md:m-20 m-8 mt-10 bg-white p-6 rounded-xl border border-gray-300 shadow-lg">
        <h2 className="text-2xl font-bold font-nunito mb-4">
          Portfolio Overview
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border-b border-gray-300">Symbol</th>
                <th className="p-3 border-b border-gray-300">Company</th>
                <th className="p-3 border-b border-gray-300">Quantity</th>
                <th className="p-3 border-b border-gray-300">Buy Price</th>
                <th className="p-3 border-b border-gray-300">Current Price</th>
                <th className="p-3 border-b border-gray-300">Current Value</th>
                <th className="p-3 border-b border-gray-300">Gain/Loss</th>
              </tr>
            </thead>
            <tbody>
              {staticStocks.map((stock) => {
                const currentValue = stock.quantity * stock.currentPrice;
                const gainLoss = currentValue - stock.quantity * stock.buyPrice;
                const gainColor =
                  gainLoss >= 0 ? "text-green-600" : "text-red-600";

                return (
                  <tr key={stock.symbol} className="hover:bg-gray-50">
                    <td className="p-3 border-b border-gray-200 font-semibold">
                      {stock.symbol}
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      {stock.name}
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      {stock.quantity}
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      ₹{stock.buyPrice}
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      ₹{stock.currentPrice}
                    </td>
                    <td className="p-3 border-b border-gray-200 font-bold">
                      ₹{currentValue}
                    </td>
                    <td
                      className={`p-3 border-b border-gray-200 font-bold ${gainColor}`}
                    >
                      {gainLoss >= 0 ? "+" : "-"}₹{Math.abs(gainLoss)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
