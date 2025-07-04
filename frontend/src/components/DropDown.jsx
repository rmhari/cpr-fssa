import React, { useState, useEffect } from "react";
import ChevronIcon from "../assets/SVG/ChevronIcon";
import { DEFAULT_TRANSITION } from "../config/transitions";
import { twMerge } from "tailwind-merge";

function DropDown({
  listItems,
  placeholder = "Select Option",
  width = "w-36",
  value,
  ulClassName = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const toggleDropDown = () => setIsOpen(!isOpen);

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block ${width} md:w-40 text-left`}>
      <div
        onClick={toggleDropDown}
        className={`inline-flex justify-between items-center w-full rounded-lg border border-gray-300 bg-white px-2.5 py-2 md:px-3 md:py-2 text-xs md:text-sm font-medium text-gray-800 shadow-sm ${DEFAULT_TRANSITION}`}
      >
        <span>{selected?.name ?? placeholder}</span>
        <ChevronIcon isOpen={isOpen} />
      </div>

      {isOpen && (
        <ul
          className={twMerge(
            "absolute z-10 mt-1 w-full text-lg md:text-sm origin-top-right rounded-lg bg-white shadow-lg border border-gray-200 overflow-y-auto max-h-48 md:max-h-62 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full",
            ulClassName
          )}
        >
          {listItems.map((item) => (
            <li
              key={item.id}
              onMouseDown={() => handleSelect(item)}
              className={`px-2.5 py-1.5 md:px-3 md:py-2 mx-1 border-b-1 border-gray-300 transition-all duration-150 cursor-pointer md:text-xs hover:bg-gray-200 ${
                selected?.id === item.id
                  ? "bg-gray-200 text-gray-800 font-bold"
                  : "text-gray-600"
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
