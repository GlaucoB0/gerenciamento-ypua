import React from "react";
import $ from "./AcomodacaoAmenidades.module.sass";
import Text from "src/components/Text/Text";

const AcomodacaoAmenidades = ({ amenidades = {} }) => {
  return (
    <div className={$.container}>
      <Text fontFamily="bold" color="dark-gray">
        Amenidades
      </Text>
      <div className={$.amenidades}>
        {amenidades.tv && <img src={`/public/amenidades/tv.svg`}/>}
        {amenidades.wifi && <img src={`/public/amenidades/wifi.svg`}/>}
        {amenidades.ducha && <img src={`/public/amenidades/ducha.svg`}/>}
        {amenidades.cozinha && <img src={`/public/amenidades/cozinha.svg`}/>}
        {amenidades.toalhas && <img src={`/public/amenidades/toalhas.svg`}/>}
        {amenidades.banheira && <img src={`/public/amenidades/banheira.svg`}/>}
        {amenidades.geladeira && <img src={`/public/amenidades/geladeira.svg`}/>}
        {amenidades.arCondicionado && <img src={`/public/amenidades/arCondicionado.svg`}/>}
      </div>
      {Object.values(amenidades).length == 0 && <Text color="gray">Não há amenidades.</Text>}
    </div>
  );
};

export default AcomodacaoAmenidades;
