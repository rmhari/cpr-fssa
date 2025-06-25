import React from "react";

function IconButton({ onClick, className = "", children, text, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center p-2 rounded border border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-150 ${className}`}
      {...props}
    >
      {children}
      {text && <span className="ml-2 text-sm font-medium">{text}</span>}
    </button>
  );
}

export default IconButton;
