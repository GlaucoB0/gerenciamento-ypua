import React from "react";
import $ from "./Button.module.sass";

const Button = (props) => {
  return (
    <button className={$.button} style={{ height: props.height }} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
