import $ from './FormControlLabel.module.sass'
import FormControlContext from 'hooks/contexts/FormControlContext';
import { useContext } from 'react';

const FormControlLabel = () => {
  let { name, label } = useContext(FormControlContext)

  return (
    <label 
      className={$.label}
      htmlFor={name}>
      {label}
    </label>
  )
}

export default FormControlLabel