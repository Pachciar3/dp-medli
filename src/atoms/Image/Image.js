import React from "react";

import './Image.scss';

function Image({ src, alt }) {
  return (
    <img className="a-img" src={src} alt={alt} />
  );
}

export default Image;
