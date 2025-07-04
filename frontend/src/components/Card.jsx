import React from "react";
import { COLOR_MAP } from "../config/colors";
import { twMerge } from "tailwind-merge";

function Card({
  studentName,
  studentId,
  staffcomments,
  colorCode,
  className = "",
}) {
  const bgColor = COLOR_MAP[colorCode] || "bg-white";
  return (
    <div
      className={twMerge(
        `w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ${bgColor} border border-gray-400 cursor-pointer rounded-md shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-4 sm:p-6`,
        className
      )}
    >
      {studentId && (
        <h3 className="text-base font-bold text-black mb-2">{studentId}</h3>
      )}
      {studentName && (
        <h4 className="text-xl text-black mb-2">{studentName}</h4>
      )}

      {staffcomments && (
        <p className="text-sm text-[#71717A] mb-3">{staffcomments}</p>
      )}
    </div>
  );
}

export default Card;
