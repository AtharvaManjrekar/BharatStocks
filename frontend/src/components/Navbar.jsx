import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 bg-white shadow-md fixed top-0 w-full z-50 ">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold text-black font-calistoga text-shadow-lg flex items-center"
        >
          <div className="bs  text-white text-xl mx-2 bg-blue-900 p-2 rounded-lg shadow-md">
            BS
          </div>
          BharatStocks
        </Link>

        {/* Desktop Links (hidden on mobile) */}
        <div className="hidden md:flex gap-8 text-gray-700 font-semibold font-nunito">
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Desktop Buttons (hidden on mobile) */}
        <div className="hidden md:flex gap-6">
          <Link
            to="/register"
            className="text-black px-4 py-3 border border-black rounded-xl w-28 text-center"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-blue-900 text-white font-bold px-4 py-3 rounded-lg w-28 text-center"
          >
            Login
          </Link>
        </div>

        {/* Hamburger (visible only on mobile) */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#000" size={25} />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-left gap-8 py-8 px-8 bg-gray-100 shadow-md md:hidden mt-24 transition-all duration-300">
          <Link to="/features" onClick={() => setOpen(false)}>
            Features
          </Link>

          <Link to="/pricing" onClick={() => setOpen(false)}>
            Pricing
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="text-black px-4 py-3 border border-black rounded-xl w-full text-center"
          >
            Register
          </Link>
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="bg-blue-900 text-white font-bold px-4 py-3 rounded-lg w-full text-center"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
