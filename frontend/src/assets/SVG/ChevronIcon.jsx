import React from "react";

function ChevronIcon({ isOpen, className = "" }) {
  return (
    <svg
      className={`ml-2 h-3.5 w-3.5 md:h-4 md:w-4 transition-transform duration-200 ${
        isOpen ? "rotate-180" : "rotate-0"
      } ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default ChevronIcon;
