/* eslint-disable max-len */
import React from "react";

import "./ImageText.scss";

function ImageText({ children }) {
  return (
    <span className="imageText">
      <span>{children}</span>
      <svg width="43" height="32" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43 21.3145C43 33.0862 33.3741 31.9718 21.5 31.9718C9.62588 31.9718 0 33.0862 0 21.3145C0 9.54283 9.62588 0 21.5 0C33.3741 0 43 9.54283 43 21.3145Z" fill="#FABD20" />
      </svg>
    </span>
  );
}

export default ImageText;