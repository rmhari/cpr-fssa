import React from "react";

function Button({ content, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white rounded-lg px-4 py-2 cursor-pointer"
    >
      {content}
    </button>
  );
}

export default Button;
