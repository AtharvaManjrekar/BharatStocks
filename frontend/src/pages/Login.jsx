import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="registration_container pb-20 bg-[#f8f8f8]">
        <div className="text font-nunito font-bold text-center text-3xl md:m-0 mx-5 md:text-5xl pt-25">
          Welcome Back
        </div>
        <div className="below_text text-center font-nunito text-xl md:m-0 mx-5 text-gray-600 mt-4 mb-10">
          Sign in to your TaskFlow account
        </div>
        <div className="form bg-white md:w-4/9 mt-10 mx-3 md:mx-auto md:p-10 rounded-xl shadow-lg border border-gray-200 ">
          <form className="grid place-items-center md:gap-y-2 ">
            <div className="md:my-3 md:m-0">
              <label className="block mb-2">Email ID</label>
              <input
                type="email"
                placeholder="you@example.com"
                className=" w-[85vw] md:w-96 h-12 rounded-lg border bg-gray-100 border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:my-3 md:m-0">
              <label className="block mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-[85vw] md:w-96 h-12 rounded-lg border bg-gray-100 border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-sm text-gray-600 font-medium mt-1 md:mb-2">
                Must be at least 6 characters
              </div>
            </div>

            <div className="button bg-blue-900 text-white font-bold px-6 py-4 rounded-xl w-[85vw] md:w-96 text-center shadow-lg hover:bg-blue-800 transition duration-300 cursor-pointer mb-5">
              Sign In
            </div>
            <div className="text-gray-400 border-t-2 w-8/9 m-5"></div>
            <div className="mb-15">
              Don't have an account?{" "}
              <span className="text-blue-700 font-semibold font-nunito">
                <Link to="/register">Register</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
