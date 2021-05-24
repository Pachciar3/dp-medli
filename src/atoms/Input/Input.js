import React from "react";

import './Input.scss';

function Input({ children, type, name, placeholder, id }) {
  return (
    <input type={type} name={name} id={id} placeholder={placeholder} className="a-input">
      {children}
    </input>
  );
}

export default Input;
