import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const stocks = [
  {
    symbol: "TCS",
    company: "Tata Consultancy Services",
    price: "₹3,890",
    change: "+2.3%",
    volume: "2.3M",
    up: true,
  },
  {
    symbol: "RELIANCE",
    company: "Reliance Industries Ltd.",
    price: "₹2,156",
    change: "+1.8%",
    volume: "1.8M",
    up: true,
  },
  {
    symbol: "INFY",
    company: "Infosys Limited",
    price: "₹1,645",
    change: "-0.5%",
    volume: "1.2M",
    up: false,
  },
  {
    symbol: "WIPRO",
    company: "Wipro Limited",
    price: "₹430",
    change: "+3.1%",
    volume: "890K",
    up: true,
  },
  {
    symbol: "HDFCBANK",
    company: "HDFC Bank Limited",
    price: "₹1,789",
    change: "+0.9%",
    volume: "2.1M",
    up: true,
  },
  {
    symbol: "ICICIBANK",
    company: "ICICI Bank Limited",
    price: "₹1,245",
    change: "-1.2%",
    volume: "1.5M",
    up: false,
  },
];

function StockTable() {
  return (
    <div className="max-w-6xl pl-15 mx-auto mb-20">
      {/* DESKTOP TABLE */}
      <div className="hidden md:block rounded-2xl bg-white shadow-sm border border-gray-200 ">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-600 font-medium">
              <th className="pb-4 pl-10 pt-5">Symbol</th>
              <th className="pb-4 pl-10 pt-5">Company</th>
              <th className="pb-4 pl-10 pt-5">Price</th>
              <th className="pb-4 pl-10 pt-5">Change</th>
              <th className="pb-4 pl-10 pt-5">Volume</th>
            </tr>
          </thead>

          <tbody>
            {stocks.map((stock, index) => (
              <tr
                key={index}
                className=" even:bg-[#FFFFFF]  odd:bg-[#F0FAF9] border-b border-gray-200 last:border-none odd:rounded-br-2xl"
              >
                <td className="py-5 font-bold pl-10">{stock.symbol}</td>
                <td className="py-5 text-gray-700 pl-10">{stock.company}</td>
                <td className="py-5 font-semibold pl-10">{stock.price}</td>

                <td className="py-5 pl-10 flex items-center gap-2">
                  {stock.up ? (
                    <TrendingUp size={20} color="#0A7CFF" />
                  ) : (
                    <TrendingDown size={20} color="red" />
                  )}
                  <span
                    className={`font-medium ${
                      stock.up ? "text-blue-600" : "text-red-600"
                    }`}
                  >
                    {stock.change}
                  </span>
                </td>

                <td className="py-5 text-gray-700 pl-10 ">{stock.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARD VIEW */}
      <div className="md:hidden flex flex-col gap-4 px-4">
        {stocks.map((stock, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <div className="flex justify-between">
              <h3 className="font-bold text-lg">{stock.symbol}</h3>
              <div className="flex items-center gap-1">
                {stock.up ? (
                  <TrendingUp size={20} color="#0A7CFF" />
                ) : (
                  <TrendingDown size={20} color="red" />
                )}
                <span
                  className={`font-medium ${
                    stock.up ? "text-blue-600" : "text-red-600"
                  }`}
                >
                  {stock.change}
                </span>
              </div>
            </div>

            <p className="text-gray-700 mt-1">{stock.company}</p>

            <div className="flex justify-between mt-3">
              <span className="font-semibold">{stock.price}</span>
              <span className="text-gray-600">{stock.volume}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StockTable;
