import React from "react";

function Image({ imageSrc, altName, width, height }) {
  return <img src={imageSrc} alt={altName} width={width} height={height} />;
}

export default Image;
