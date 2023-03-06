import './signIn.scss'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth, signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../../utils/firebase/firebase'
import SignUp from '../sign-up/SignUp'
import Button from '../../button/Button'
import FormField from '../../formField/FormField'
import {useState} from 'react'

const SignIn = ({className}) => {
  const defaultFormFields = {
    email: '',
    password: '',
  }
  
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {email, password} = formFields
  
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userRef = await createUserDocumentFromAuth(user)
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
    try {
      const {user} = await signInAuthWithEmailAndPassword(email, password)
      const result = await createUserDocumentFromAuth(user)
      resetFormFields()
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <form className={`sign-in ${className}`} onSubmit={handleSubmit}>
      <h2 className="title">I already have an account.</h2>
      <h2 className="subtitle">Sign in with your credentials.</h2>
      <div className="form-fields-group">
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
      <div className="buttons-group">
        <Button type="submit" buttonType="">Sign in</Button>
        <Button type="button" buttonType="google" onClick={logGoogleUser}>Google Sign In</Button>
      </div>
    </form>
  )
}

export default SignIn

