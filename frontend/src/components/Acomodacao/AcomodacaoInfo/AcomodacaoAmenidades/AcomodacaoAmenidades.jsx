import React from "react";
import $ from "./AcomodacaoAmenidades.module.sass";
import Text from "src/components/Text/Text";

import _tv from '/amenidades/tv.svg'
import _wifi from '/amenidades/wifi.svg'
import _ducha from '/amenidades/ducha.svg'
import _cozinha from '/amenidades/cozinha.svg'
import _toalhas from '/amenidades/toalhas.svg'
import _banheira from '/amenidades/banheira.svg'
import _geladeira from '/amenidades/geladeira.svg'
import _arCondicionado from '/amenidades/arCondicionado.svg'

const AcomodacaoAmenidades = ({ amenidades = {} }) => {
  return (
    <div className={$.container}>
      <Text fontFamily="bold" color="dark-gray">
        Amenidades
      </Text>
      <div className={$.amenidades}>
        {amenidades.tv && <img src={_tv}/>}
        {amenidades.wifi && <img src={_wifi}/>}
        {amenidades.ducha && <img src={_ducha}/>}
        {amenidades.cozinha && <img src={_cozinha}/>}
        {amenidades.toalhas && <img src={_toalhas}/>}
        {amenidades.banheira && <img src={_banheira}/>}
        {amenidades.geladeira && <img src={_geladeira}/>}
        {amenidades.arCondicionado && <img src={_arCondicionado}/>}
      </div>
      {Object.values(amenidades).length == 0 && <Text color="gray">Não há amenidades.</Text>}
    </div>
  );
};

export default AcomodacaoAmenidades;
