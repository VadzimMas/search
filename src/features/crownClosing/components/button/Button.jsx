import './button.scss'

function Button({children, buttonType, className, ...rest}) {
  const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
  }
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  
  )
}

export default Button