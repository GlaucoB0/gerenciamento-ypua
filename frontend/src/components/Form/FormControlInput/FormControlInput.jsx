import $ from './FormControlInput.module.sass'
import FormControlContext from 'hooks/contexts/FormControlContext';
import { useContext } from 'react';

const FormControlInput = ({type, placeholder, iconSrc}) => {
  let {name} = useContext(FormControlContext)

  return (
    <input 
      className={$.input}
      type={type} 
      name={name} 
      placeholder={placeholder}
      style={{
        backgroundImage: `url(${iconSrc})`
      }} />
  )
}

export default FormControlInput