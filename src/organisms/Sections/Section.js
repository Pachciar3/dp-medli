import React from "react";
import classNames from "classnames";

import "./Section.scss";

function Section({ children, colored }) {
  const className = classNames("o-section", { "o-section--colored": colored });
  return (
    <section className={className}>
      {children}
    </section>
  );
}

export default Section;
