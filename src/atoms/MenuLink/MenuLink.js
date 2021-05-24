import React from "react";

import './MenuLink.scss';

function MenuLink({ to = "#", children }) {
  return (
    <a href={to} className="a-menuLink">
      {children}
    </a>
  );
}

export default MenuLink;
