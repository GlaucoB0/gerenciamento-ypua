import FormRoot from './FormRoot/FormRoot'
import FormControlInput from './FormControlInput/FormControlInput'
import FormControlLabel from './FormControlLabel/FormControlLabel'
import FormControlRoot from './FormControlRoot/FormControlRoot'
import FormCheckbox from './FormCheckbox/FormCheckbox'
import FormSubmit from './FormSubmit/FormSubmit'

const Form = {
  Root: FormRoot,
  Control: {
    Root: FormControlRoot,
    Input: FormControlInput,
    Label: FormControlLabel
  },
  Checkbox: FormCheckbox,
  Submit: FormSubmit
}

export default Form;