import React from "react";
import $ from "./HospedeRoot.module.sass";

const HospedeRoot = ({ children }) => {
  return <div className={$.containerHospede}>{children}</div>;
};

export default HospedeRoot;
