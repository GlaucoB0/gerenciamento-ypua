import React from "react";
import Text from "src/components/Text/Text";
import $ from './HospedeInfo.module.sass'

const HospedeInfo = ({titulo, data, onClick}) => {
  return (
    <div className={$.containerInfo} onClick={onClick}>
      <Text color="light-gray" fontFamily="bold">{titulo}</Text>
      <Text color="light-gray">{data}</Text>
    </div>
  );
};

export default HospedeInfo;
