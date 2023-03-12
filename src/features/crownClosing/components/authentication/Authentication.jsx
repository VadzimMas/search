import s from './authentication.module.scss'
import SignIn from './sign-in/Sign-in'
import SignUp from './sign-up/Sign-up'

function Authentication() {
  return (
    <div className={s.authentication}>
      <SignIn/>
      <SignUp/>
    </div>
  )
}

export default Authentication