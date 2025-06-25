import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background m-0 p-0">
      <Navbar />
      <div className="w-full px-0 overflow-y-auto z-0 flex-grow pt-16">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
