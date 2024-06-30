import React from "react";
import { Link } from "react-router-dom";

const Empty = ({ message, address, label }) => {
  return (
    <div className="min-h-[calc(100vh-116px)] gap-5 flex flex-col justify-center items-center pb-16 ">
      <p>{message}</p>
      <Link
        to={address}
        className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
      >
        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#8c7ae6]  rounded-md group-hover:mt-0 group-hover:ml-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#8c7ae6]  rounded-md opacity-0 group-hover:opacity-100 "></span>
        <span className="relative text-[#8c7ae6]  transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
          {label}
        </span>
      </Link>
    </div>
  );
};

export default Empty;
