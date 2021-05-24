import React from "react";

import './HamburgerButton.scss';

function HamburgerButton({ handleClick }) {
  return (
    <button type="button" className="a-hamburger" onClick={handleClick}>
      <span></span><span></span><span></span>
    </button>
  );
}

export default HamburgerButton;
