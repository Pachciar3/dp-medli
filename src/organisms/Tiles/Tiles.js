import React from "react";

import "./Tiles.scss";
import Tile from "../../molecules/Tile/Tile";

function Wrapper({ data }) {
  const tiles = data.map(({ title, desc, id, image }) => (
    <Tile key={id} header={title} description={desc} imageUrl={image} imageAlt={title} />)
  );
  return (
    <div className="o-tiles">
      {tiles}
    </div>
  );
}

export default Wrapper;
