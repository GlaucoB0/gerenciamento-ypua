import $ from './FormControlLabel.module.sass'

const FormControlLabel = () => {
  let name, label

  return (
    <label 
      className={$.label}
      htmlFor={name}>
      {label}
    </label>
  )
}

export default FormControlLabel