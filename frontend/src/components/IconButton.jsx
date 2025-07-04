import React from "react";
import { twMerge } from "tailwind-merge";

function IconButton({ onClick, className = "", children, text, ...props }) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "cursor-pointer flex items-center justify-center p-2 rounded-md border border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
      {text && <span className="ml-2 text-sm font-medium">{text}</span>}
    </button>
  );
}

export default IconButton;
