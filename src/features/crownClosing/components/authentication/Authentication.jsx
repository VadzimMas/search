import SignIn from './sign-in/Sign-in'
import SignUp from './sign-up/Sign-up'
import AuthenticationStyled from './Authentication-styled'

function Authentication() {
  return (
    <AuthenticationStyled>
      <SignIn/>
      <SignUp/>
    </AuthenticationStyled>
  )
}

export default Authentication