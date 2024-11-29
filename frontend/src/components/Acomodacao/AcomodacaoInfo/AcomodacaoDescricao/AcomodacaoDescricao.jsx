import React from "react";
import Text from "src/components/Text/Text";

const AcomodacaoDescricao = ({ data, titulo }) => {
  return (
    <div>
      <Text fontFamily="bold" color="dark-gray">
        {titulo}
      </Text>
      <div style={{ display: "flex", gap: "5px" }}>
        <img src="/src/assets/images/icon-i.svg" alt="" />
        <Text type="Subtitle">
          Camas Solteiro:
          {" "+data.camas_solteiros}
        </Text>
        <Text type="Subtitle">-</Text>
        <Text type="Subtitle">
          Camas Casais:
          {" "+data.cama_casais}
        </Text>
      </div>
    </div>
  );
};

export default AcomodacaoDescricao;
