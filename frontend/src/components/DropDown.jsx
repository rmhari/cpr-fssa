import React from "react";

function DropDown({ listItems }) {
  return (
    <select>
      {listItems.map((item) => (
        <option key={item.id}>{item.name}</option>
      ))}
    </select>
  );
}

export default DropDown;
