import $ from './FormControlRoot.module.sass'
import FormControlContext from 'src/hooks/contexts/FormControlContext'

const FormControlRoot = ({ name, label, children }) => {
  return (
    <div className={$.label_wrapper}>
      <FormControlContext.Provider value={{name, label}}>
        {children}
      </FormControlContext.Provider>
    </div>
  )
}

export default FormControlRoot