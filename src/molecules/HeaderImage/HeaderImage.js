import React from "react";

import Image from "../../atoms/Image/Image";
import './HeaderImage.scss';

function HeaderImage({ src, alt }) {
  return (
    <div className="m-headerImage">
      <Image src={src} alt={alt} />
    </div>
  );
}

export default HeaderImage;
