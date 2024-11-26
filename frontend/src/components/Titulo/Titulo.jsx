import React from "react";
import Text from "../Text/Text";
import $ from './Titulo.module.sass'

const Titulo = ({ links }) => {
  return (
    <div className={$.titulo}>
      <Text type="Title">Dashboard</Text>
      {links.map((a) => {
        return (
          <>
            <Text type="Subtitle">{">"}</Text>
            <Text type="Subtitle">{a}</Text>
          </>
        );
      })}
    </div>
  );
};

export default Titulo;
