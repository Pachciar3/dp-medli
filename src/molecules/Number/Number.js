import React from "react";

import Heading from "../../atoms/Headings/Heading";
import Description from "../../atoms/Descriptions/Description";
import './Number.scss';

function Number({ header, description }) {
  return (
    <article className="m-number">
      <div className="m-number__el">
        <Heading size="huge" center primary><h3>{header}</h3></Heading>
      </div>
      <div className="m-number__el">
        <Description size="big" center><p>{description}</p></Description>
      </div>
    </article>
  );
}

export default Number;
