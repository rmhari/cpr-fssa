import React from "react";

function Button({ content, onClick }) {
  return <button onClick={onClick}>{content}</button>;
}

export default Button;
