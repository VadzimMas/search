import {useState} from 'react'
import FormField from '../../formField/Form-field'
import {createUser, createUserInDB, updateUserProfile} from '../../../utils/firebase/firebase'
import s from './sign-up.module.scss'


function SignUp() {
  
  
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword} = formFields
  
  const handleChange = (event) => {
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
  }
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('password incorrect')
      return
    }
    
    try {
      await createUser(email, password)
      await updateUserProfile({displayName})
      await createUserInDB()
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case ('auth/email-already-in-use'): {
          alert(`you already have an account, sign in instead...`)
          resetFormFields()
          break
        }
        default: {
          alert(`creating user failed... ${error}`)
        }
      }
    }
  }
  
  
  return (
    <form className={s.signUp} onSubmit={handleSubmit}>
      <h2 className={s.title}>Don't have an account?</h2>
      <h2 className={s.subtitle}>Sign up with your credentials.</h2>
      <FormField
        labelOptions={{
          options: {
            htmlFor: 'sign-up-name'
          },
          label: 'Name'
        }}
        inputOptions={{
          type: 'text',
          id: 'sign-up-name',
          onChange: handleChange,
          name: 'displayName',
          value: displayName,
          required: true
        }}
      />
      <FormField
        labelOptions={{
          options: {
            htmlFor: 'sign-up-email'
          },
          label: 'Email'
        }}
        inputOptions={{
          type: 'email',
          id: 'sign-up-email',
          onChange: handleChange,
          name: 'email',
          value: email,
          required: true
        }}
      />
      <FormField
        labelOptions={{
          options: {
            htmlFor: 'sign-up-password'
          },
          label: 'Password'
        }}
        inputOptions={{
          type: 'password',
          id: 'sign-up-password',
          onChange: handleChange,
          name: 'password',
          value: password,
          required: true
        }}
      />
      <FormField
        labelOptions={{
          options: {
            htmlFor: 'sign-up-confirm-password'
          },
          label: 'Password'
        }}
        inputOptions={{
          type: 'password',
          id: 'sign-up-confirm-password',
          onChange: handleChange,
          name: 'confirmPassword',
          value: confirmPassword,
          required: true
        }}
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUp