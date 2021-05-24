import React from "react";

import './Button.scss';

function Link({ children, href = "/" }) {
  return (
    <a className="a-button" href={href}>
      {children}
    </a>
  );
}

export default Link;
