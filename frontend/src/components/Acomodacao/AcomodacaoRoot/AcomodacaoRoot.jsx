import React from "react";
import Text from "src/components/Text/Text";
import AcomodacaoButton from "../AcomodacaoButton/AcomodacaoButton";
import AcomodacaoAmenidades from "../AcomodacaoInfo/AcomodacaoAmenidades/AcomodacaoAmenidades";
import $ from "./AcomodacaoRoot.module.sass";
import AcomodacaoImagem from "../AcomodacaoImagem/AcomodacaoImagem";
import AcomodacaoDescricao from "../AcomodacaoInfo/AcomodacaoDescricao/AcomodacaoDescricao";
import AcomodacaoInfo from "../AcomodacaoInfo/AcomodacaoInfo";

const AcomodacaoRoot = ({ children }) => {
  return (
    <div className={$.containerAcomodacao}>
      {children}
    </div>
  );
};

export default AcomodacaoRoot;
