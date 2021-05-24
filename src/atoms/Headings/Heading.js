import React from "react";
import classNames from "classnames";

import './Heading.scss';

function Heading({ children, size, center, primary }) {
  const mainClassName = "a-heading";
  const className = classNames(mainClassName,
    { [`${mainClassName}--center`]: center },
    { [`${mainClassName}--primary`]: primary },
    { [`${mainClassName}--big`]: size === "big" },
    { [`${mainClassName}--small`]: size === "small" },
    { [`${mainClassName}--huge`]: size === "huge" });
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Heading;
