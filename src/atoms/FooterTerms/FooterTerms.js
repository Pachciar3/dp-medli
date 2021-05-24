import React from "react";

import "./FooterTerms.scss";

function FooterTerms({ children, href = "/" }) {
  return (
    <a className="a-footerTerms" href={href}>{children}</a>
  );
}

export default FooterTerms;