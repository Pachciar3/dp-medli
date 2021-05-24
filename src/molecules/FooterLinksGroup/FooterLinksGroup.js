import React from "react";

import FooterHeading from "../../atoms/Headings/FooterHeading";
import FooterLink from "../../atoms/FooterLink/FooterLink";
import './FooterLinksGroup.scss';

function FooterLinksGroup({ title, links }) {
  const renderLinks = links.map(({ href, id, name }) => <FooterLink
    href={href} key={`${id}-linkGroup`}>{name}</FooterLink>);

  return (
    <div className="m-footerLinksGroup">
      <div className="m-footerLinksGroup__title">
        <FooterHeading><h3>{title}</h3></FooterHeading>
      </div>
      <div className="m-footerLinksGroup__links">{renderLinks}</div>
    </div>
  );
}

export default FooterLinksGroup;
