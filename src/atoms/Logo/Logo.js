import React from "react";

import './Logo.scss';

function Logo({ href = "/", url, alt }) {
  return (
    <div className="a-logo">
      <a href={href}>
        <img className="a-logo__img" src={url} alt={alt} />
      </a>
    </div>
  );
}

export default Logo;
