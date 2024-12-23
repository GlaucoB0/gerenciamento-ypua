import React from "react";
import Text from "../Text/Text";
import $ from './Titulo.module.sass'
import Seta from '../../assets/images/icon-seta.png'

const Titulo = ({ links }) => {
  return (
    <div className={$.titulo}>
      <Text type="Title">Dashboard</Text>
      {links.map((a) => {
        return (
          <>
            <img src={Seta} alt="" />
            <Text color="gray">{a}</Text>
          </>
        );
      })}
    </div>
  );
};

export default Titulo;
