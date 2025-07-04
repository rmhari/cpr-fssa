import React from "react";

function PencilIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 3.487a2.25 2.25 0 1 1 3.182 3.182L7.5 19.213l-4.182.464a.75.75 0 0 1-.82-.82l.464-4.182L16.862 3.487z"
      />
    </svg>
  );
}

export default PencilIcon;
