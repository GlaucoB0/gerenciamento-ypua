import React from "react";
import Text from "src/components/Text/Text";
import $ from './HospedeInfo.module.sass'

const HospedeInfo = ({titulo, data}) => {
  return (
    <div className={$.containerInfo}>
      <Text color="light-gray" fontFamily="bold">{titulo}</Text>
      <Text color="light-gray">{data}</Text>
    </div>
  );
};

export default HospedeInfo;
