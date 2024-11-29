import React from 'react'
import $ from './HospedeButton.module.sass'

const HospedeButton = ({onClick}) => {
  return (
    <button className={$.btn} onClick={onClick}>
        <img src="/src/assets/images/icon-x.svg" alt="" />
    </button>
  )
}

export default HospedeButton