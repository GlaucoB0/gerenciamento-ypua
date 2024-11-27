import $ from './Button.module.sass'

const Button = ({isEnabled = true, onClick, children}) => {
  return (
    <button
      className={$.button}
      type="button" 
      disabled={!isEnabled}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;