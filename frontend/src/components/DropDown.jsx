import React, { useState } from "react";
import ChevronIcon from "../assets/SVG/ChevronIcon";

function DropDown({
  listItems,
  placeholder = "Select Option",
  width = "w-36",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleDropDown = () => setIsOpen(!isOpen);

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block ${width} md:w-40 text-left`}>
      <button
        onClick={toggleDropDown}
        className="inline-flex justify-between items-center w-full rounded-lg border border-gray-300 bg-white px-2.5 py-2 md:px-3 md:py-2 text-xs md:text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200"
      >
        <span className="truncate">{selected?.name ?? placeholder}</span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full text-xs md:text-sm origin-top-right rounded-lg bg-white shadow-lg border border-gray-200 overflow-y-auto max-h-48 md:max-h-56">
          {listItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelect(item)}
              className={`px-2.5 py-1.5 md:px-3 md:py-2 mx-1 my-0.5 transition-all duration-150 cursor-pointer text-xs md:text-sm rounded-md hover:bg-gray-200 ${
                selected?.id === item.id
                  ? "bg-gray-200 text-gray-800 font-medium"
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
