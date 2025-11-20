import React from "react";
import { Settings } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { Check, TrendingUp, Plus } from "lucide-react";

function ProfilePage() {
  return (
    <div>
      <div className="first_container flex flex-col md:flex-row md:m-20 m-8 justify-between items-center bg-[#f2fbf9] border border-gray-300 rounded-xl p-7 shadow-lg md:w-[90%] w-[85%]">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-5">
          {/* Avatar Circle */}
          <div className="w-20 h-20  rounded-full grid place-items-center text-white font-bold text-3xl bg-[radial-gradient(circle_at_top_left,_#0a4d78,_#f3a8a0)]">
            AM
          </div>

          {/* Name + Membership */}
          <div className="flex flex-col">
            <div className="text-3xl font-semibold font-outfit">
              Atharva Manjrekar
            </div>
            <div className="text-gray-600 text-lg">
              Premium Member since Oct 2022
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="mt-5 md:mt-0">
          <div className="border border-gray-300 rounded-lg px-5 py-2 cursor-pointer hover:bg-gray-100 transition">
            <Settings size={18} className="inline-block mr-2 mb-1" />
            Settings
          </div>
        </div>
      </div>
      <div className="second_container flex md:flex-row flex-col md:gap-20 gap-6 md:m-20 m-8 mt-10 justify-between">
        <div className="card1 md:w-4/5 bg-[#f2fbf9] p-4 rounded-xl shadow-lg border border-gray-300">
          <div className="first_line text-gray-400">
            <Mail size={20} className="inline-block mr-2 mb-1" />
            Email Address
          </div>
          <div className="second_line text-lg font-semibold mt-2 font-nunito">
            atharvamanjrekar078@gmail.com
          </div>
        </div>
        <div className="card2  md:w-4/5 bg-[#f2fbf9] p-4 rounded-xl shadow-lg border border-gray-300">
          <div className="first_line text-gray-400">
            <MapPin size={20} className="inline-block mr-2 mb-1" />
            Location
          </div>
          <div className="second_line text-lg font-semibold mt-2 font-nunito">
            Mumbai
          </div>
        </div>
        <div className="card3  md:w-4/5 bg-[#f2fbf9] p-4 rounded-xl shadow-lg border border-gray-300">
          <div className="first_line text-gray-400">
            <CalendarDays size={20} className="inline-block mr-2 mb-1" />
            Member Since
          </div>
          <div className="second_line text-lg font-semibold mt-2 font-nunito">
            Oct 5 2022
          </div>
        </div>
        <div className="card4  md:w-4/5 bg-[#f2fbf9] p-4 rounded-xl shadow-lg border border-gray-300">
          <div className="first_line text-gray-400">KYC Status</div>
          <div className="second_line text-lg text-orange-400 font-bold mt-2 font-nunito">
            Verified
            <Check size={20} className="inline-block mr-2 mb-1" />
          </div>
        </div>
      </div>
      <div className="third_container flex md:flex-row flex-col md:gap-20 gap-6 md:m-20 m-8 mt-10 justify-between">
        <div className="card1 md:w-4/5 bg-[#f2fbf9] p-4 rounded-xl shadow-lg border border-gray-300">
          <div className="upper_text m-2 text-gray-500 font-nunito text-base font-medium">
            Total Investment
          </div>
          <div className="amount m-2 text-4xl font-outfit font-semibold">
            ₹2,45,000
          </div>
          <div className="current_value text-gray-500 m-2 font-nunito">
            Current Value:
            <span className="text-black font-outfit font-bold ml-1">
              ₹2,78,450
            </span>
          </div>
        </div>
        <div className="card2 md:w-4/5 bg-[#f2fbf9] p-4 rounded-xl shadow-lg border border-gray-300">
          <div className="upper_text m-2 text-gray-500 font-nunito text-base font-medium">
            Portfolio Gain/Loss
          </div>
          <div className="second_line flex flex-row items-center  ">
            <Plus
              size={35}
              className="inline-block text-orange-300"
            />
            <div className="amount text-3xl font-bold text-orange-300 ">₹33,450</div>
            <div className="trending_up ml-20">
              <TrendingUp
                size={25}
                className="inline  text-orange-300"
              />
              <div className="inline text-orange-400 text-base"> 13.6%</div>
            </div>
          </div>
          
          <div className="today_change mt-4 text-sm font-nunito text-gray-400 ">Today's change: +₹1,240</div>
        </div>
        <div className="card3 md:w-4/5 bg-[#f2fbf9] p-4 rounded-xl shadow-lg border border-gray-300">
          <div className="first_line m-2 text-gray-500 font-nunito text-base font-medium">Holding overview</div>
          <div className="second_line m-2 text-gray-500 font-nunito text-base font-medium">
            Active Holdings <span className="float-end text-black font-bold">12</span>
          </div>
          <div className="third_line m-2 text-gray-500 font-nunito text-base font-medium">
            Sectors <span className="float-end text-black font-bold">6</span>
          </div>
          <div className="last_line m-2 text-gray-500 font-nunito text-base font-medium">
            Diversity Score <span className="float-end text-orange-400 font-bold">8.2/10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
