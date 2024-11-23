import $ from './FormSubmit.module.sass'

const FormSubmit = ({isEnabled, children}) => {
  return (
    <button
      className={$.input}
      type="submit" 
      disabled={!isEnabled}>
      {children}
    </button>
  )
}

export default FormSubmit;