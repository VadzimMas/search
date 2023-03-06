import './authentication.scss'
import SignIn from './sign-in/SignIn'
import SignUp from './sign-up/SignUp'

function Authentication() {
  return (
    <div className="authentication">
      <SignIn className={'form'}/>
      <SignUp className={'form'}/>
    </div>
  )
}

export default Authentication