import React from "react";
import { DEFAULT_TRANSITION } from "../config/transitions";
import { twMerge } from "tailwind-merge";

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
      className={twMerge(
        `px-3 py-2 border border-black rounded-lg bg-white text-black placeholder-gray-500 w-full focus:border-transparent resize-none max-h-48 ${DEFAULT_TRANSITION}`,
        className
      )}
    />
  );
}

export default TextArea;
