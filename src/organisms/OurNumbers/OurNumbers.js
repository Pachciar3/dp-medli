import React from "react";

import "./OurNumbers.scss";
import Number from "../../molecules/Number/Number";

function OurNumbers({ ourNumbers }) {
  const numbers = ourNumbers.map(({ number, text, id }) => (
    <div className="o-ourNumbers__el"
      key={`numberEl-${id}`}>
      <Number header={number} description={text} />
    </div>)
  );
  return (
    <div className="o-ourNumbers">
      {numbers}
    </div>
  );
}

export default OurNumbers;
