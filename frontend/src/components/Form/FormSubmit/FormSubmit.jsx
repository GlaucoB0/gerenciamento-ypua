import $ from './FormSubmit.module.sass'

const FormSubmit = ({value, isEnabled}) => {
  return (
    <input
      className={$.input}
      type="submit" 
      value={value}
      disabled={!isEnabled} />
  )
}

export default FormSubmit;