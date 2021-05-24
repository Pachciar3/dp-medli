import React from "react";
import classNames from "classnames";

import './Button.scss';

function Button({ children, type = "button", handleClick, smallOnDesktop, small }) {
  const buttonClassName = classNames("a-button", { "a-button--smallOnDesktop": smallOnDesktop }, {
    "a-button--small": small
  });
  return (
    <button type={type} className={buttonClassName} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
