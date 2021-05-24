import React from "react";

import './Button.scss';

function RoundButtonWithIco({ children, type = "button", handleClick }) {
  return (
    <button type={type} className="a-button a-buttonRoundWithIco" onClick={handleClick}>
      <span>{children}</span>
    </button>
  );
}

export default RoundButtonWithIco;
