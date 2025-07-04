import React, { useState } from "react";
import ChevronIcon from "../assets/SVG/ChevronIcon";
import { twMerge } from "tailwind-merge";
import TextArea from "./TextArea";

function Accordion({
  title,
  className = "",
  buttonClassName = "",
  contentClassName = "",
  placeholder = "Enter Comments",
  textAreaValue,
  onTextAreaChange,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((pv) => !pv);

  return (
    <div className={twMerge("border rounded-md mb-2", className)}>
      <div
        className={twMerge(
          "w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-lg text-black rounded-t-md focus:outline-none border-b cursor-pointer",
          buttonClassName
        )}
        onClick={handleOpen}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronIcon isOpen={isOpen} />
      </div>
      <div
        className={twMerge(
          `bg-transparent text-gray-700 rounded-b-md overflow-hidden transition-all ease-in duration-300 ${
            isOpen ? "max-h-32" : "max-h-0"
          }`,
          contentClassName
        )}
        aria-hidden={!isOpen}
      >
        <TextArea
          value={textAreaValue}
          onChange={onTextAreaChange}
          placeholder={placeholder}
          className="my-2"
        />
      </div>
    </div>
  );
}

export default Accordion;
