import React from "react";
import Text from "src/components/Text/Text";

const AcomodacaoDescricao = ({text = 'Sem mais informações', titulo}) => {
  return (
    <div>
      <Text type="Bold" color="dark-gray">
        {titulo}
      </Text>
      <Text type="Subtitle">{text}</Text>
    </div>
  );
};

export default AcomodacaoDescricao;
