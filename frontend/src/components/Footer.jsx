import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-footer-black">
      <div className="footer_container ">
        <div className="upper_part border-gray-400 flex flex-col md:flex-row justify-between gap-10 md:gap-20 px-8 md:px-20 py-8 max-w-8xl mx-auto border-t">
          <div className="column_1 md:w-1/3 md:ml-20">
            <h3 className="text-lg mr-2 font-outfit font-bold text-white">
              <div className="bs  text-black inline text-xl mx-2 bg-white p-2 rounded-lg shadow-md">
                BS
              </div>
              BharatStocks
            </h3>
            <p className="text-sm m-2 mt-5 font-nunito font-color-footer font-bold ">
              Real-time stock monitoring for Indian markets
            </p>
          </div>
          <div className="column_2 md:w-1/3 md:ml-20">
            <h2 className="font-outfit font-color-footer text-lg font-extrabold m-2">
              Product
            </h2>
            <h3 className="text-sm font-medium font-color-footer  font-nunito m-2">
              <Link to="/">Home</Link>
            </h3>
            <h3 className="text-sm font-medium font-color-footer font-nunito m-2">
              <Link to="/features">Features</Link>
            </h3>
            <h3 className="text-sm font-medium font-color-footer font-nunito m-2">
              <Link to="/pricing">Pricing</Link>
            </h3>
            <h3 className="text-sm ffont-medium font-color-footer font-nunito m-2">
              <Link to="/contact">Contact</Link>
            </h3>
          </div>
          <div className="column_3 md:w-1/3 md:ml-20">
            <h2 className="font-outfit font-medium font-color-footer text-lg  m-2">
              Legal
            </h2>
            <h3 className="text-sm  font-medium font-color-footer font-nunito m-2">
              <Link to="/">Privacy Policy</Link>
            </h3>
            <h3 className="text-sm font-medium font-color-footer font-nunito m-2">
              <Link to="/about">Terms of Service</Link>
            </h3>
          </div>
        </div>
        <div className="below_container flex justify-center items-center pb-10 text-gray-500 mt-8 w-10/12 border-t border-gray-300 pt-4 text-center mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-copyright"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
          </svg>
          <div className="text_copyright ml-2 text-sm font-medium font-color-footer">
            2025 BharatStocks. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
