import React from "react";
import classNames from "classnames";

import Heading from "../../atoms/Headings/Heading";
import Description from "../../atoms/Descriptions/Description";
import './SectionTextContent.scss';

function SectionTextContent({ header, description, center }) {
  const containerClassName = classNames("m-sectionTextContent",
    { "m-sectionTextContent--center": center });
  return (
    <div className={containerClassName}>
      <div className="m-sectionTextContent__head">
        <Heading size="big"><h1>{header}</h1></Heading>
      </div>
      <div className="m-sectionTextContent__desc">
        <Description size="big"><p>{description}</p></Description>
      </div>
    </div>
  );
}

export default SectionTextContent;
