import s from './sign-in.module.scss'
import {
  createUserDocumentFromAuth, signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../../utils/firebase/firebase'
import Button from '../../button/Button'
import FormField from '../../formField/FormField'
import {useState} from 'react'

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
      const result = await createUserDocumentFromAuth(user)
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
    <form className={s.signIn} onSubmit={handleSubmit}>
      <h2 className={s.title}>I already have an account.</h2>
      <h2 className={s.subtitle}>Sign in with your credentials.</h2>
      <div className={s.forms}>
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
      <div className={s.buttons}>
        <Button type="submit" buttonType="">Sign in</Button>
        <Button type="button" buttonType="google" onClick={logGoogleUser}>Google Sign In</Button>
      </div>
    </form>
  )
}

export default SignIn

