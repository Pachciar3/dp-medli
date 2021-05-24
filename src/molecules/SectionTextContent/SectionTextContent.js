import React from "react";

import Heading from "../../atoms/Headings/Heading";
import Description from "../../atoms/Descriptions/Description";
import './SectionTextContent.scss';

function SectionTextContent({ header, description }) {
  return (
    <div className="m-sectionTextContent">
      <div className="m-sectionTextContent__head">
        <Heading size="big"><h1>{header}</h1></Heading>
      </div>
      <div className="m-headerTextContent__desc">
        <Description size="big"><p>{description}</p></Description>
      </div>
    </div>
  );
}

export default SectionTextContent;
