import React from 'react'
import $ from './AcomodacaoImagem.module.sass'

const AcomodacaoImagem = ({img}) => {
  return (
    <img className={$.img} src={`/public/quartos/${img}`} alt="" />
  )
}

export default AcomodacaoImagem