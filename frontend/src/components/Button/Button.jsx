import $ from './Button.module.sass'

const Button = (props) => {
  if(props.color == 'gray'){
    return (
      <button
        className={$.buttonGray}
        type="button" 
        style={{ height: props.height }}
        {...props}>
        {props.children}
      </button>
    )
  }
  if(props.color == 'yellow'){
    return (
      <button
        className={$.buttonYellow}
        type="button" 
        style={{ height: props.height }}
        {...props}>
        {props.children}
      </button>
    )
  }
  return (
    <button
      className={$.button}
      type="button" 
      style={{ height: props.height }}
      {...props}>
      {props.children}
    </button>
  )
}

export default Button;