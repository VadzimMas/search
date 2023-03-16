import {
  createUserDocumentFromAuth, signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../../utils/firebase/firebase'
import FormField from '../../formField/Form-field'
import {useState} from 'react'
import ButtonStyled from '../../button/Button-styled'
import SignInStyled from './Sign-in-styled'

const SignIn = () => {
  const defaultFormFields = {
    email: '',
    password: '',
  }
  
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {email, password} = formFields
  
  const logGoogleUser = async () => await signInWithGooglePopup()
  
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
    try {
      const {user} = await signInAuthWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user)
      resetFormFields()
    } catch (error) {
      
      switch (error.code) {
        case 'auth/wrong-password': {
          alert('Password incorrect')
          break
        }
        case 'auth/user-not-found': {
          alert('Email incorrect')
          break
        }
        default: {
          alert(error.code)
        }
      }
      
    }
  }
  
  return (
    <SignInStyled onSubmit={handleSubmit}>
      <h2 className="title">I already have an account.</h2>
      <h2 className="subtitle">Sign in with your credentials.</h2>
      <div className="forms">
        <FormField
          labelOptions={{
            options: {
              htmlFor: 'sign-in-email',
            },
            label: 'Email',
          }}
          inputOptions={{
            id: 'sign-in-email',
            type: 'email',
            value: email,
            onChange: handleChange,
            name: 'email',
            required: true,
          }}
        />
        <FormField
          labelOptions={{
            options: {
              htmlFor: 'sign-in-password',
            },
            label: 'Password',
          }}
          inputOptions={{
            type: 'password',
            id: 'sign-in-password',
            name: 'password',
            value: password,
            onChange: handleChange,
            required: true,
          }}
        />
      </div>
      <div className="buttons">
        <ButtonStyled type="submit">Sign in</ButtonStyled>
        <ButtonStyled className="google" type="button" onClick={logGoogleUser}>Google Sign In</ButtonStyled>
      </div>
    </SignInStyled>
  )
}

export default SignIn

