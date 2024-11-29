import React from "react";
import Button from "src/components/Button/Button";

const FiltroRoot = ({children, setter, value, type, color}) => {
    let newValue = value
    if(type == 'Disponiveis'){
        newValue = value.filter((a)=>a.disponivel === true)
    }
  return <Button height={'20px'} style={{display: 'flex', marginBottom: '10px', gap: '10px',width:'fit-content', padding: '10px 30px', alignItems: 'center'}} color={color} onClick={()=>{setter(newValue)}}>{children}</Button>;
};

export default FiltroRoot;
