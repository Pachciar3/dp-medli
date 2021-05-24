import React from "react";

import "./FooterLink.scss";

function FooterLink({ children, href = "/" }) {
  return <a className="a-footerLink" href={href}>{children}</a>;
}

export default FooterLink;