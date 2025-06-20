import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <Navbar />
      <div className="w-full px-0 overflow-y-auto z-0 flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
