import React from "react";

import "./Footer.scss";
import Logo from "../../atoms/Logo/Logo";

function Footer({ logoUrl }) {
  return (
    <footer className="o-footer">
      <Logo url={logoUrl} />
    </footer>
  );
}

export default Footer;
