import React from "react";
import { DEFAULT_TRANSITION } from "../config/transitions";

function TextArea({
  placeholder = "Enter comments...",
  value,
  onChange,
  className = "",
  rows = 4,
  ...props
}) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`w-6/12 px-3 py-2 border border-black rounded-lg bg-white text-black placeholder-gray-500 focus:border-transparent resize-none max-h-48 ${className} ${DEFAULT_TRANSITION}`}
      {...props}
    />
  );
}

export default TextArea;
