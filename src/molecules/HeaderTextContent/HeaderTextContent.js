import React from "react";

import Heading from "../../atoms/Headings/Heading";
import Description from "../../atoms/Descriptions/Description";
import Link from "../../atoms/Buttons/Link";
import './HeaderTextContent.scss';

function HeaderTextContent({ header, description, linkText, linkUrl }) {
  return (
    <div className="m-headerTextContent">
      <div className="m-headerTextContent__el">
        <Heading size="big"><h1>{header}</h1></Heading>
      </div>
      <div className="m-headerTextContent__el">
        <Description size="big"><p>{description}</p></Description>
      </div>
      <div className="m-headerTextContent__el">
        <Link href={linkUrl}>{linkText}</Link>
      </div>
    </div>
  );
}

export default HeaderTextContent;
