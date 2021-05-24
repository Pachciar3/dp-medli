import React from "react";

import './Heading.scss';

function Heading({ children }) {
  return (
    <div className="a-footerHeading">
      {children}
    </div>
  );
}

export default Heading;
