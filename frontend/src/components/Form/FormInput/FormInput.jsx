import $ from './FormInput.module.scss'

const FormInput = ({type, name, label, placeholder, iconSrc}) => {
  return (
    <div className={$.label_wrapper}>
      { label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder}
        style={{
          backgroundImage: `url(${iconSrc})`
        }} />
    </div>
  )
}

export default FormInput