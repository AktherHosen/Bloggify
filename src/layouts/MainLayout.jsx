import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="h-[80px]">
        <Nav />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
