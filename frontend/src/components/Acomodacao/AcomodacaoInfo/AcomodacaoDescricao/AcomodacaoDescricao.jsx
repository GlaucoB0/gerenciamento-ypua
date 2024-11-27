import React from "react";
import Text from "src/components/Text/Text";

const AcomodacaoDescricao = ({text = 'Sem mais informações', titulo}) => {
  return (
    <div>
      <Text fontFamily="bold" color="dark-gray">
        {titulo}
      </Text>
      <Text type="Subtitle">{text}</Text>
    </div>
  );
};

export default AcomodacaoDescricao;
