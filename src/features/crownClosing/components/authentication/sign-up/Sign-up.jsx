import {useState} from 'react'
import FormField from '../../formField/Form-field'
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../../utils/firebase/firebase'
import ButtonStyled from '../../button/Button-styled'
import SignUpStyled from './Sign-up-styled'

function SignUp() {
  
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
      alert('password incorect')
      return
    }
    
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password)
      const userRef = await createUserDocumentFromAuth(user, {displayName})
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
    <SignUpStyled onSubmit={handleSubmit}>
      <h2 className="title">Don't have an account?</h2>
      <h2 className="subtitle">Sign up with your credentials.</h2>
      <FormField
        labelOptions={{
          options: {
            htmlFor: 'sign-up-name',
          },
          label: 'Name',
        }}
        inputOptions={{
          type: 'text',
          id: 'sign-up-name',
          onChange: handleChange,
          name: 'displayName',
          value: displayName,
          required: true,
        }}
      />
      <FormField
        labelOptions={{
          options: {
            htmlFor: 'sign-up-email',
          },
          label: 'Email',
        }}
        inputOptions={{
          type: 'email',
          id: 'sign-up-email',
          onChange: handleChange,
          name: 'email',
          value: email,
          required: true,
        }}
      />
      <FormField
        labelOptions={{
          options: {
            htmlFor: 'sign-up-password',
          },
          label: 'Password',
        }}
        inputOptions={{
          type: 'password',
          id: 'sign-up-password',
          onChange: handleChange,
          name: 'password',
          value: password,
          required: true,
        }}
      />
      <FormField
        labelOptions={{
          options: {
            htmlFor: 'sign-up-confirm-password',
          },
          label: 'Password',
        }}
        inputOptions={{
          type: 'password',
          id: 'sign-up-confirm-password',
          onChange: handleChange,
          name: 'confirmPassword',
          value: confirmPassword,
          required: true,
        }}
      />
      <ButtonStyled type="submit">Sign Up</ButtonStyled>
    </SignUpStyled>
  )
}

export default SignUp