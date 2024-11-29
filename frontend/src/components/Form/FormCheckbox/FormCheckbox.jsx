import React, { useContext } from "react";
import Text from "src/components/Text/Text";
import $ from "./FormCheckBox.module.sass";
import FormControlContext from "src/hooks/contexts/FormControlContext";

const FormCheck = ({ img, text }) => {
  const { name, label } = useContext(FormControlContext);
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <input className={$.input} type="checkbox" name={name} />
      <img src={`/public/amenidades/${img}`} alt="" />
      <Text type="Title2" fontFamily="light" color="gray">
        {text}
      </Text>
    </div>
  );
};

export default FormCheck;
