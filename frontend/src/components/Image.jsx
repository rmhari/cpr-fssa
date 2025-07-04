import React from "react";
import { twMerge } from "tailwind-merge";

function Image({ imageSrc, altName, width, height, className = "" }) {
  return (
    <img
      src={imageSrc}
      alt={altName}
      width={width}
      height={height}
      className={twMerge(className)}
    />
  );
}

export default Image;
