import React from 'react'
import $ from './AcomodacaoButton.module.sass'

const AcomodacaoButton = ({text, onClick}) => {
  return (
    <button className={$.button} onClick={onClick}>{text}</button>
  )
}

export default AcomodacaoButton