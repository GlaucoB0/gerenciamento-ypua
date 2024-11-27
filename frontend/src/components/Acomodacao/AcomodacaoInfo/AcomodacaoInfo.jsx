import React from 'react'
import $ from './AcomodacaoInfo.module.sass'

const AcomodacaoInfo = ({children}) => {
  return (
    <div className={$.containerInfo}>{children}</div>
  )
}

export default AcomodacaoInfo