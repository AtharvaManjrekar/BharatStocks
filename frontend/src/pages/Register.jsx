// import React from "react";
// import { Link } from "react-router-dom";

// function Register() {
//   return (
//     <div>
//       <div className="registration_container pb-20 bg-[#f8f8f8]">
//         <div className="text font-nunito font-bold text-center text-3xl md:m-0 mx-5 md:text-5xl pt-25">
//           Create Your Account
//         </div>
//         <div className="below_text text-center font-nunito text-xl md:m-0 mx-5 text-gray-600 mt-4 mb-10">
//           Join BharatStocks today and take control of your financial future.
//         </div>
//         <div className="form bg-white md:w-4/9 mt-10 mx-3 md:mx-auto md:p-10 rounded-xl shadow-lg border border-gray-200 ">
//           <form className="grid place-items-center md:gap-y-2 ">
//             <div className="my-3 md:m-0">
//               <label className="block mb-2">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 className=" w-[85vw] md:w-96 h-12 rounded-lg border bg-gray-100 border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="md:my-3 md:m-0">
//               <label className="block mb-2">Email ID</label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className=" w-[85vw] md:w-96 h-12 rounded-lg border bg-gray-100 border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="md:my-3 md:m-0">
//               <label className="block mb-2">Password</label>
//               <input
//                 type="password"
//                 placeholder="••••••••"
//                 className="w-[85vw] md:w-96 h-12 rounded-lg border bg-gray-100 border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <div className="text-sm text-gray-600 font-medium mt-1 md:mb-2">
//                 Must be at least 6 characters
//               </div>
//             </div>

//             <div className="mb-5 my-3 md:m-0">
//               <label className="block mb-2">Confirm Password</label>
//               <input
//                 type="password"
//                 placeholder="••••••••"
//                 className="w-[85vw] md:w-96 h-12 rounded-lg border bg-gray-100 border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="button bg-blue-900 text-white font-bold px-6 py-4 rounded-xl w-[85vw] md:w-96 text-center shadow-lg hover:bg-blue-800 transition duration-300 cursor-pointer mb-5 mt-10">
//               Create Account
//             </div>
//             <div className="text-gray-400 border-t-2 w-8/9 m-5"></div>
//             <div className="mb-15">
//               Already have an account?{" "}
//               <span className="text-blue-700 font-semibold font-nunito">
//                 <Link to="/login">Sign in</Link>
//               </span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../axios";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await api.post("/auth/signup", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      alert("Account created successfully!");
      console.log(res.data);

      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <div className="registration_container pb-20 bg-[#f8f8f8]">
        <div className="text font-nunito font-bold text-center text-3xl md:m-0 mx-5 md:text-5xl pt-25">
          Create Your Account
        </div>
        <div className="below_text text-center font-nunito text-xl md:m-0 mx-5 text-gray-600 mt-4 mb-10">
          Join BharatStocks today and take control of your financial future.
        </div>

        <div className="form bg-white md:w-4/9 mt-10 mx-3 md:mx-auto md:p-10 rounded-xl shadow-lg border border-gray-200 ">
          <form
            className="grid place-items-center md:gap-y-2"
            onSubmit={handleSubmit}
          >
            <div className="my-3 md:m-0">
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="w-[85vw] md:w-96 h-12 rounded-lg border bg-gray-100 border-gray-300 px-4 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:my-3 md:m-0">
              <label className="block mb-2">Email ID</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-[85vw] md:w-96 h-12 rounded-lg border bg-gray-100 border-gray-300 px-4 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:my-3 md:m-0">
              <label className="block mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className="w-[85vw] md:w-96 h-12 rounded-lg border bg-gray-100 border-gray-300 px-4 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-sm text-gray-600 font-medium mt-1 md:mb-2">
                Must be at least 6 characters
              </div>
            </div>

            <div className="mb-5 my-3 md:m-0">
              <label className="block mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-[85vw] md:w-96 h-12 rounded-lg border bg-gray-100 border-gray-300 px-4 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="button bg-blue-900 text-white font-bold px-6 py-4 rounded-xl w-[85vw] 
              md:w-96 text-center shadow-lg hover:bg-blue-800 transition duration-300 cursor-pointer mb-5 mt-10"
            >
              Create Account
            </button>

            <div className="text-gray-400 border-t-2 w-8/9 m-5"></div>

            <div className="mb-15">
              Already have an account?{" "}
              <span className="text-blue-700 font-semibold font-nunito">
                <Link to="/login">Sign in</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
