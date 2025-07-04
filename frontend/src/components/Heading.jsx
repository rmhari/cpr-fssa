import React from "react";
import { twMerge } from "tailwind-merge";

function Heading({ content, className }) {
  return (
    <h3 className={twMerge("pb-3 text-lg font-bold text-600 ", className)}>
      {content}
    </h3>
  );
}

export default Heading;
