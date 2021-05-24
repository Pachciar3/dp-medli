import React from "react";

import HeaderImage from "../../molecules/HeaderImage/HeaderImage";
import HeaderTextContent from "../../molecules/HeaderTextContent/HeaderTextContent";
import "./Header.scss";

function Header({ image, textContent }) {
  return (
    <section className="o-header">
      <div className="o-header__container">
        <div className="o-header__right">
          <HeaderImage src={image.src} alt={textContent.alt} />
        </div>
        <div className="o-header__left">
          <HeaderTextContent
            header={textContent.head}
            description={textContent.desc}
            linkText={textContent.linkText} l
            inkUrl={textContent.linkUrl}
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
