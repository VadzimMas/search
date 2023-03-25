import {signInUserEmailPassword, signInWithGooglePopup} from '../../../utils/firebase/firebase'
import FormField from '../../formField/Form-field'
import {useState} from 'react'
import {BaseButton, GoogleButton} from '../../button/Button.styled'
import SignInStyled from './Sign-in-styled'
import {useDispatch} from 'react-redux'
import {setCurrentUser} from '../../../redux/user-slice'


const SignIn = () => {
  const defaultFormFields = {
    email: '',
    password: ''
  }
  
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {email, password} = formFields
  const dispatch = useDispatch()
  
  const logGoogleUser = async () => {
    await signInWithGooglePopup()
    dispatch(setCurrentUser())
  }
  
  const handleChange = (event) => {
    const {name, value} = event.target
    event.preventDefault()
    setFormFields({...formFields, [name]: value})
  }
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    await signInUserEmailPassword(email, password)
    resetFormFields()
    dispatch(setCurrentUser())
  }
  
  return (
    <SignInStyled onSubmit={handleSubmit}>
      <h2 className="title">I already have an account.</h2>
      <h2 className="subtitle">Sign in with your credentials.</h2>
      <div className="forms">
        <FormField
          labelOptions={{
            options: {
              htmlFor: 'sign-in-email'
            },
            label: 'Email'
          }}
          inputOptions={{
            id: 'sign-in-email',
            type: 'email',
            value: email,
            onChange: handleChange,
            name: 'email',
            required: true
          }}
        />
        <FormField
          labelOptions={{
            options: {
              htmlFor: 'sign-in-password'
            },
            label: 'Password'
          }}
          inputOptions={{
            type: 'password',
            id: 'sign-in-password',
            name: 'password',
            value: password,
            onChange: handleChange,
            required: true
          }}
        />
      </div>
      <div className="buttons">
        <BaseButton type="submit">Sign in</BaseButton>
        <GoogleButton type="button" onClick={logGoogleUser}>Google Sign In</GoogleButton>
      </div>
    </SignInStyled>
  )
}

export default SignIn

