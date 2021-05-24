import React from "react";

import Logo from "../../atoms/Logo/Logo";
import Menu from "../../molecules/Menu/Menu";
import HamburgerButton from "../../atoms/HamburgerButton/HamburgerButton";
import './Navbar.scss';

function Navbar({ logoUrl, links }) {
  return (
    <div className="o-navbar">
      <div className="o-navbar__con">
        <Logo url={logoUrl} />
        <div className="o-navbar__menu">
          <Menu links={links} />
        </div>
        <div className="o-navbar__btn">
          <HamburgerButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
