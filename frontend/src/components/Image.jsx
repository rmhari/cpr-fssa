import React from "react";

function Image({ imageSrc, altName, width, height, className = "" }) {
  return (
    <img
      src={imageSrc}
      alt={altName}
      width={width}
      height={height}
      className={className}
    />
  );
}

export default Image;
