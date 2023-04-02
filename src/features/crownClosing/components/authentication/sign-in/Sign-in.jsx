import {signInUserEmailPassword} from '../../../utils/firebase'
import FormField from '../../formField/Form-field'
import {useState} from 'react'
import s from './sign-in.module.scss'
import createUserDataInDB from '../../../utils/firebase/authentication/createUserInDB'
import signInWithGooglePopup from '../../../utils/firebase/authentication/signInWithGooglePopup'
import {useFetchUserQuery} from '../../../redux/api/user.api'


const SignIn = () => {
  const {refetch: userRefetch} = useFetchUserQuery()
  
  const defaultFormFields = {
    email: '',
    password: ''
  }
  
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {email, password} = formFields
  
  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
    await createUserDataInDB()
    userRefetch()
  }
  
  const handleChange = (event) => {
    const {name, value} = event.target
    event.preventDefault()
    setFormFields({...formFields, [name]: value})
  }
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  
  const signInWithEmailAndPassword = async (event) => {
    event.preventDefault()
    await signInUserEmailPassword(email, password)
    resetFormFields()
  }
  
  return (
    <form className={s.signIn} onSubmit={signInWithEmailAndPassword}>
      <h2 className={s.title}>I already have an account.</h2>
      <h2 className={s.subtitle}>Sign in with your credentials.</h2>
      <div className={s.forms}>
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
      <div className={s.buttons}>
        <button type="submit">Sign in</button>
        <button className="google" type="button" onClick={signInWithGoogle}>Google Sign In</button>
      </div>
    </form>
  )
}

export default SignIn

