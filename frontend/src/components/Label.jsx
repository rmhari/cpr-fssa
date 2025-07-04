import React from "react";
import { twMerge } from "tailwind-merge";

function Label({ children, htmlFor = "", className = "" }) {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge("block mb-1 font-medium text-black", className)}
    >
      {children}
    </label>
  );
}

export default Label;
