import React from "react";
import Image from "./Image";
import { NAVBAR_ITEMS, LOGO_ALT_NAME } from "../config";
import logo from "../assets/logo.svg";
import IconButton from "./IconButton";
import LogoutIcon from "../assets/SVG/LogoutIcon";
import PencilIcon from "../assets/SVG/PencilIcon";
import { useNavigate } from "react-router-dom";

function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between w-full px-4 py-2 sm:px-6">
        <div className="flex items-center space-x-3">
          <Image
            imageSrc={logo}
            altName={LOGO_ALT_NAME}
            width={420}
            height={420}
            className="h-5 w-25"
          />
          <span className="text-lg sm:text-xl font-semibold text-black whitespace-nowrap">
            {NAVBAR_ITEMS.title}
          </span>
        </div>
        <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center sm:space-x-2 sm:gap-0">
          <span className="text-lg sm:text-xl font-light text-gray-900 whitespace-nowrap">
            {NAVBAR_ITEMS.welcome}, &nbsp;
            {localStorage.getItem("name") ?? "Sreekala"}
          </span>
          {user && (
            <span className="hidden sm:inline text-sm text-gray-700">
              {user.firstName}
            </span>
          )}
          <IconButton
            onClick={() => navigate("/create")}
            className="bg-black text-white px-4 py-2 rounded-md"
            text="Fill CPR"
          >
            <PencilIcon className="h-5 w-5" />
          </IconButton>
          <IconButton onClick={onLogout} text={NAVBAR_ITEMS.logout}>
            <LogoutIcon className="h-5 w-5" />
          </IconButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
