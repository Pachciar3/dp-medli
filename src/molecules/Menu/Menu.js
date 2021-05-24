import React from "react";

import MenuLink from "../../atoms/MenuLink/MenuLink";
import Button from "../../atoms/Buttons/Button";
import './Menu.scss';

function Menu({ links }) {

  const renderLinks = links.map(link => {
    if (link.active) {
      return (
        <MenuLink key={link.id} active>{link.text}</MenuLink>);
    }
    return (
      <MenuLink key={link.id}>{link.text}</MenuLink>);
  });

  return (
    <nav className="m-menu">
      <ul className="m-menu__list">
        {renderLinks}
      </ul>
      <Button small>Log in</Button>
    </nav>
  );
}

export default Menu;
