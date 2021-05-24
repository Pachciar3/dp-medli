import React from "react";
import classNames from "classnames";

import './MenuLink.scss';

function MenuLink({ to = "#", children, active = false }) {
  const className = classNames("a-menuLink", {
    "a-menuLink--active": active
  });

  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
}

export default MenuLink;
