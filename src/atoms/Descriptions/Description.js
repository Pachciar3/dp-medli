import React from "react";
import classNames from "classnames";

import './Description.scss';

function Description({ children, size, center }) {
  const mainClassName = "a-description";
  const className = classNames(mainClassName,
    { [`${mainClassName}--center`]: center },
    { [`${mainClassName}--big`]: size === "big" },
    { [`${mainClassName}--small`]: size === "small" });
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Description;
