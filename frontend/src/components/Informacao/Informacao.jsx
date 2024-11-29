import React from "react";
import $ from "./Informacao.module.sass";

const Informacao = ({ text, width, id }) => {
  return (
    <div className={$.input_wrapper} style={{ width }}>
      <div id={id} className={$.input}>
        {text}
      </div>
    </div>
  );
};

export default Informacao;
