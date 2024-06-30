import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero -mt-16">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold">
              Welcome to
              <span className="px-2 font-bold bg-gradient-to-r from-[#8c7ae6] via-blue-500 to-[#bbb1ef] text-transparent bg-clip-text animate-gradient bg-300%">
                Bloggify
              </span>
            </h1>
            <p className="py-6">
              Insights, Ideas, and Inspiration for Your Next Big Move:
              Empowering You with Expert Advice, Trend Analysis, and Practical
              Tips to Elevate Your Journey
            </p>
            <div className="flex gap-2 justify-center">
              <Link
                to="/blogs"
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#8c7ae6]  rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#8c7ae6]  rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-[#8c7ae6]  transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Read Blogs
                </span>
              </Link>
              <Link
                to="/bookmarks"
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Bookmarks
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
