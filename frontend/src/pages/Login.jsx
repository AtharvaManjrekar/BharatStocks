// import React from "react";
// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <div>
//       <div className="registration_container pb-20 bg-[#f8f8f8]">
//         <div className="text font-nunito font-bold text-center text-3xl md:m-0 mx-5 md:text-5xl pt-25">
//           Welcome Back
//         </div>
//         <div className="below_text text-center font-nunito text-xl md:m-0 mx-5 text-gray-600 mt-4 mb-10">
//           Sign in to your TaskFlow account
//         </div>
//         <div className="form bg-white md:w-4/9 mt-10 mx-3 md:mx-auto md:p-10 rounded-xl shadow-lg border border-gray-200 ">
//           <form className="grid place-items-center md:gap-y-2 ">
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

//             <div className="button bg-blue-900 text-white font-bold px-6 py-4 rounded-xl w-[85vw] md:w-96 text-center shadow-lg hover:bg-blue-800 transition duration-300 cursor-pointer mb-5">
//               Sign In
//             </div>
//             <div className="text-gray-400 border-t-2 w-8/9 m-5"></div>
//             <div className="mb-15">
//               Don't have an account?{" "}
//               <span className="text-blue-700 font-semibold font-nunito">
//                 <Link to="/register">Register</Link>
//               </span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../axios";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      alert("Login successful!");

      // ✅ Store token inside the user object
      localStorage.setItem(
        "user",
        JSON.stringify({ ...res.data.user, token: res.data.token })
      );

      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
