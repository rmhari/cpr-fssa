import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="w-full h-screen bg-background m-0 p-0 flex flex-col">
      <Navbar />
      <div className="w-full flex-1 px-0 overflow-y-auto z-0 pt-16 bg-white text-black">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
