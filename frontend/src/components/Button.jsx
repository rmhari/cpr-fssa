import React from "react";

function Button({
  children,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-black text-white rounded-lg px-4 py-2 font-medium transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 ${
        disabled ? "opacity-50 cursor-not-allowed hover:bg-black" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
