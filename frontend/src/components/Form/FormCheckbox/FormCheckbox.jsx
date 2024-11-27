import React from "react";
import Text from "src/components/Text/Text";
import $ from './FormCheckBox.module.sass'

const FormCheck = ({ img, text }) => {
  return (
    <div style={{display: 'flex', gap: '15px'}}>
      <input className={$.input} type="checkbox" />
      <img src={`/public/amenidades/${img}`} alt="" />
      <Text type="Title2" fontFamily="light" color="gray">{text}</Text>
    </div>
  );
};

export default FormCheck;
