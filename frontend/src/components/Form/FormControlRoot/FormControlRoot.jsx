import $ from './FormControlRoot.styles.sass'

const FormControlRoot = ({ children }) => {
  return (
    <div className={$.label_wrapper}>
      {children}
    </div>
  )
}

export default FormControlRoot