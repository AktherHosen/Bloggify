import React from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
      <HashLoader size={50} color="#8c7ae6" />
    </div>
  );
};

export default Loader;
