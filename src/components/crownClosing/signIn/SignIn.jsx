import {createUserDocumentFromAuth, signInWithGooglePopup} from '../utils/firebase/firebase'

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }
  
  
  return (
    <div>
      <h1>SignIn</h1>
      <button type="button" onClick={logGoogleUser}>
        Google Sign In
      </button>
    </div>
  )
}

export default SignIn

