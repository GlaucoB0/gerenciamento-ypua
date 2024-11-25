import $ from './FormControlInput.module.sass'
import { useContext, useState } from 'react'
import FormControlContext from 'hooks/contexts/FormControlContext';

const FormControlInput = ({type: givenType, placeholder, iconSrc}) => {
  const {name, label} = useContext(FormControlContext)
  const [currentType, setCurrentType] = useState(givenType)

  let imgVariableStyle = givenType === 'password' ? { cursor: 'pointer' } : {}

  const handleImgClick = () => {
    if (givenType === 'password') {
      setCurrentType(currentType === 'password' ? 'input' : 'password')
    }
  }

  return (
    <div className={$.input_wrapper}>
      <img 
        className={$.icon}
        src={iconSrc}
        alt={`Ícone do campo ${label || 'de entrada'}`}
        draggable={false}
        onClick={handleImgClick}
        style={imgVariableStyle} />
      <input 
        className={$.input}
        type={currentType} 
        name={name} 
        placeholder={placeholder} />
    </div>
  )
}

export default FormControlInput