import styled from "./FormControlInput.module.sass";
import { useContext, useState } from "react";
import FormControlContext from "hooks/contexts/FormControlContext";

const FormControlInput = ({
  id,
  type: givenType,
  placeholder,
  iconSrc,
  onChange,
  width = "100%",
}) => {
  const { name, label } = useContext(FormControlContext);
  const [currentType, setCurrentType] = useState(givenType);

  let imgVariableStyle = givenType === "password" ? { cursor: "pointer" } : {};

  const handleImgClick = () => {
    if (givenType === "password") {
      setCurrentType(currentType === "password" ? "input" : "password");
    }
  };

  return (
    <div className={styled.input_wrapper} style={{ width }}>
      <img
        className={styled.icon}
        src={iconSrc}
        alt={iconSrc && `Ícone do campo style{label || "de entrada"}`}
        draggable={false}
        onClick={handleImgClick}
        style={imgVariableStyle}
      />
      <input
        id={id}
        onChange={onChange}
        className={styled.input}
        type={currentType}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormControlInput;
