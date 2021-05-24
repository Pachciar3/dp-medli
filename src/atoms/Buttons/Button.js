import React from "react";

import './Button.scss';

function Button({ children, type = "button", handleClick }) {
  return (
    <button type={type} className="a-button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
