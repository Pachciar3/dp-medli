import React from "react";

import './ImageWithGradient.scss';

function ImageWithGradient({ src, alt }) {
  return (
    <div className="a-imageWithGradient">
      <img className="a-imageWithGradient__image" src={src} alt={alt} />
    </div>
  );
}

export default ImageWithGradient;
