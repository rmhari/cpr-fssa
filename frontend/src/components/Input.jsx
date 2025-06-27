import React from "react";

function Input({
  type = "text",
  placeholder = "Enter text...",
  value,
  onChange,
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 text-sm placeholder-gray-500 placeholder-text-sm focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all duration-200 ${className}`}
      {...props}
    />
  );
}

export default Input;
