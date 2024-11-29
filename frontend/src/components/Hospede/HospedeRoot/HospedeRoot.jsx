import React from "react";
import $ from "./HospedeRoot.module.sass";

const HospedeRoot = ({ children, onClick}) => {
  return <div className={$.containerHospede} onClick={onClick}>{children}</div>;
};

export default HospedeRoot;
