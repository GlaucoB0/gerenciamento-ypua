import React from "react";
import AcomodacaoRoot from "./AcomodacaoRoot/AcomodacaoRoot";
import AcomodacaoInfo from "./AcomodacaoInfo/AcomodacaoInfo";
import AcomodacaoDescricao from "./AcomodacaoInfo/AcomodacaoDescricao/AcomodacaoDescricao";
import AcomodacaoAmenidades from "./AcomodacaoInfo/AcomodacaoAmenidades/AcomodacaoAmenidades";
import AcomodacaoButton from "./AcomodacaoButton/AcomodacaoButton";
import AcomodacaoImagem from "./AcomodacaoImagem/AcomodacaoImagem";

const Acomodacao = {
  Root: AcomodacaoRoot,
  Imagem: AcomodacaoImagem,
  Info: {
    Root: AcomodacaoInfo,
    Descricao: AcomodacaoDescricao,
    Amenidades: AcomodacaoAmenidades,
  },
  Button: AcomodacaoButton,
};

export default Acomodacao;
