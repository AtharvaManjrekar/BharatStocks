import React from "react";
import { ArrowRight } from "lucide-react";
import { Ellipsis } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Lock } from "lucide-react";
import { BarChart } from "lucide-react";
import StockTable from "../components/StockTable.jsx";

function HomePage() {
  return (
    <div>
      <div className="first_container flex flex-col md:flex-row mx-auto px-8 md:px-0 mb-20 md:mb-5">
        {/* LEFT SIDE */}
        <div className="left_container w-full md:w-3/5">
          <h1 className="md:text-6xl md:ml-15 text-5xl md:leading-20 font-bold font-outfit mb-5 mt-5 md:mt-12 md:tracking-wide ml-2 tracking-wide">
            Real-Time Stock <br className="hidden md:inline" /> Monitoring for{" "}
            <br className="hidden md:inline" /> Indian Markets
          </h1>

          <p className="font-color-footer font-nunito font-normal leading-8 mb-5 md:ml-15 text-xl tracking-wider ml-2">
            Track live prices, manage a custom watchlist, and{" "}
            <br className="hidden md:inline" />
            stay ahead with reliable market insights powered by{" "}
            <br className="hidden md:inline" />
            cutting-edge technology.
          </p>

          <div className="buttons flex gap-6 mt-6 md:ml-15 mb-15 flex-col md:flex-row ">
            <button className="bg-blue-900 text-white font-bold px-6 py-4 rounded-4xl md:w-60 text-center shadow-lg hover:bg-blue-800 transition duration-300 cursor-pointer">
              Start Tracking Now{" "}
              <ArrowRight className="inline align-middle" size={20} />
            </button>

            <button className="text-black px-6 py-4 border border-gray-400 rounded-4xl md:w-40 text-center shadow-lg hover:bg-orange-100 transition duration-300 cursor-pointer">
              View Demo
            </button>
          </div>

          <div className="stats flex gap-8 mt-10 md:ml-15 mb-20">
            <div className="font-outfit text-3xl font-extrabold text-blue-900">
              50K+{" "}
              <div className="font-light text-gray-700 text-lg mt-1">
                Active Traders
              </div>
            </div>
            <div className="font-outfit text-3xl font-extrabold text-blue-900">
              100M+{" "}
              <div className="font-light text-gray-700 text-lg mt-1">
                Trades Daily
              </div>
            </div>
            <div className="font-outfit text-3xl font-extrabold text-blue-900">
              99.9%{" "}
              <div className="font-light text-gray-700 text-lg mt-1">
                Uptime
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right_container w-full md:w-2/5 mt-2/5 md:mt-0 mr-20">
          <div className="box mr-20 bg-[#f2fbf9] p-5 w-full md:mt-30 border-gray-400 border rounded-2xl shadow-lg">
            <div className="flex flex-row items-center justify-between w-full text-xl text-black font-semibold font-nunito">
              Portfolio Overview <Ellipsis size={42} color="gray" />
            </div>
            <div className="second_line mt-10 flex flex-row gap-5 md:gap-30 md:pl-3">
              <div className="firstbox bg-white p-4 w-3/4">
                <div className="text flex flex-col text-gray-400 font-light font-nunito text-center">
                  Total value
                </div>
                <div className="text-xl font-black font-outfit mt-2 tracking-wider text-center">
                  ₹2,45,800
                </div>
              </div>
              <div className="secondbox bg-white p-4 w-3/4 ">
                <div className="text flex flex-col text-gray-400 font-light font-nunito text-center">
                  Today's Gain
                </div>
                <div className="text-xl font-black font-outfit text-blue-900 mt-2 tracking-wider text-center">
                  +3.2%
                </div>
              </div>
            </div>
            <div className="third">
              <div className="line_1 flex flex-row justify-between items-center mt-10">
                <div className="tcs text-base">TCS</div>
                <div className="paise text-base">₹3,890</div>
              </div>
              <div className="line_2 flex flex-row justify-between items-center mb-5 border-b border-gray-300 pb-4">
                <div className="tata text-sm text-gray-500">
                  Tata Consultancy
                </div>
                <div className="plus_rate text-gray-500">+2.3%</div>
              </div>
              {/* Second Line */}
              <div className="line_1 flex flex-row justify-between items-center ">
                <div className="tcs text-base">INFY</div>
                <div className="paise text-base">₹1,645</div>
              </div>
              <div className="line_2 flex flex-row justify-between items-center mb-5 border-b border-gray-300 pb-4">
                <div className="tata text-sm text-gray-500">
                  Infosys Limited
                </div>
                <div className="plus_rate text-gray-500">+0.9%</div>
              </div>
              {/* Third Line */}
              <div className="line_1 flex flex-row justify-between items-center ">
                <div className="tcs text-base">RELIANCE</div>
                <div className="paise text-base">₹2,516</div>
              </div>
              <div className="line_2 flex flex-row justify-between items-center mb-5">
                <div className="tata text-sm text-gray-500">
                  Reliance Industries
                </div>
                <div className="plus_rate text-gray-500">+1.8%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second_container bg-[#e8fffa] pb-5 md:pl-5">
        <h1 className="md:text-5xl text-3xl text-center font-outfit font-bold pt-10 mb-4 tracking-wide">
          Powerful Features for Traders
        </h1>
        <h4 className="text-lg text-center font-nunito text-gray-500 font-normal">
          Everything you need to make informed investment decisions
        </h4>
        <div className="cards flex flex-col md:flex-row gap-12 m-10">
          <div className="card1 py-5 px-6 rounded-2xl h-[300px] md:w-4/12 bg-white backdrop-blur-lg border border-gray-300 shadow-lg flex flex-col justify-start transition-all duration-300 hover:border-gray-600 hover:shadow-2xl">
            <div className="icons bg-gray-200 w-11 h-11 flex items-center justify-center rounded-lg mb-4">
              <TrendingUp size={28} strokeWidth={2} color="#003778" />
            </div>

            <h3 className="text-xl font-outfit font-bold my-4 mx-2 text-black">
              Real-Time Price Updates
            </h3>

            <p className="text-base my-2 mx-2 text-gray-800 font-normal">
              Get live price quotes updated every second with zero latency.
              Never miss a market opportunity.
            </p>
          </div>

          <div className="card2 py-5 px-6 rounded-2xl h-[300px] md:w-4/12 bg-white backdrop-blur-lg border border-gray-300 shadow-lg flex flex-col justify-start transition-all duration-300 hover:border-gray-600 hover:shadow-2xl">
            <div className="icons bg-gray-200 w-11 h-11 flex items-center justify-center rounded-lg mb-4">
              <Bookmark size={28} strokeWidth={2} color="#003778" />
            </div>

            <h3 className="text-xl font-outfit font-bold my-4 mx-2 text-black">
              Personalized Watchlist
            </h3>

            <p className="text-base my-2 mx-2 text-gray-800 font-normal">
              Create custom watchlists to track your favorite stocks and manage
              your portfolio efficiently.
            </p>
          </div>

          <div className="card3 py-5 px-6 rounded-2xl h-[300px] md:w-4/12 bg-white backdrop-blur-lg border border-gray-300 shadow-lg flex flex-col justify-start transition-all duration-300 hover:border-gray-600 hover:shadow-2xl">
            <div className="icons bg-gray-200 w-11 h-11 flex items-center justify-center rounded-lg mb-4">
              <Lock size={28} strokeWidth={2} color="#003778" />
            </div>

            <h3 className="text-xl font-outfit font-bold my-4 mx-2 text-black">
              Secure JWT Authentication
            </h3>

            <p className="text-base my-2 mx-2 text-gray-800 font-normal">
              Bank-grade security with JWT tokens ensures your account and
              portfolio data stays protected.
            </p>
          </div>

          <div className="card4 py-5 px-6 rounded-2xl h-[300px] md:w-4/12 bg-white backdrop-blur-lg border border-gray-300 shadow-lg flex flex-col justify-start transition-all duration-300 hover:border-gray-600 hover:shadow-2xl">
            <div className="icons bg-gray-200 w-11 h-11 flex items-center justify-center rounded-lg mb-4">
              <BarChart size={28} strokeWidth={2} color="#003778" />
            </div>

            <h3 className="text-xl font-outfit font-bold my-4 mx-2 text-black">
              Interactive Stock Charts
            </h3>

            <p className="text-base my-2 mx-2 text-gray-800 font-normal">
              Analyze trends with professional-grade charts supporting multiple
              timeframes and indicators.
            </p>
          </div>
        </div>
      </div>
      <div className="third_container">
        <h1 className="md:ml-15 text-4xl font-outfit text-center font-black mt-15 mb-1">
          Live Market Data
        </h1>
        <h3 className="md:ml-15 text-xl font-nunito font-light text-center text-gray-600">
          Track the top NSE stocks with real-time updates
        </h3>
        {/* Table */}
        <div className="table_container mb-20"></div>
        <StockTable />
      </div>
    </div>
  );
}

export default HomePage;
