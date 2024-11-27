import React from 'react'
import Button from '../Button/Button'
import Text from '../Text/Text'
import $ from './Model.module.sass'

const Model = ({text, setModel}) => {
  return (
    <>
    <div className={$.containerModel}>
      {text}
      <Button height={'50px'} onClick={()=> {window.location.reload()}}>Ok</Button>
    </div>

    <div className={$.overlay}/>
    </>
  )
}

export default Model
