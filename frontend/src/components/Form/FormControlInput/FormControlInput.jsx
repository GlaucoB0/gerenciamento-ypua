import $ from './FormControlInput.module.sass'

const FormControlInput = ({type, placeholder, iconSrc}) => {
  let name;

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