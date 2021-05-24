import React from "react";

import Heading from "../../atoms/Headings/Heading";
import Description from "../../atoms/Descriptions/Description";
import Image from "../../atoms/Image/Image";
import './Tile.scss';

function Tile({ imageUrl, imageAlt, header, description }) {
  return (
    <article className="m-tile">
      <div className="m-tile__image">
        <Image src={imageUrl} alt={imageAlt} />
      </div>
      <div className="m-tile__head">{<Heading size="small" center><h3>{header}</h3></Heading>}</div>
      <div className="m-tile__desc">
        <Description size="small" center><p>{description}</p>
        </Description>
      </div>
    </article>
  );
}

export default Tile;
