import React from "react";

import MenuLink from "../../atoms/MenuLink/MenuLink";
import './Menu.scss';

function Menu({ links }) {

  const renderLinks = links.map(link => <MenuLink key={link.id}>{link.text}</MenuLink>);

  return (
    <nav className="m-menu">
      <ul className="m-menu__list">
        {renderLinks}
      </ul>
    </nav>
  );
}

export default Menu;
