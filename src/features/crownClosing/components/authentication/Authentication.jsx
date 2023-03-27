import SignIn from './sign-in/Sign-in'
import SignUp from './sign-up/Sign-up'
import s from'./authentication.module.scss'
import {useSelector} from 'react-redux'
import {Fragment, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Authentication() {
  const isUserExist = useSelector(state => state.user.isUserExist)
  const navigate = useNavigate()
  
  
  useEffect(() => {
    if (isUserExist) {
      navigate('/crownClothing')
    }
  }, [isUserExist, navigate])
  
  const authForm = () => {
    if (!isUserExist) {
      return (
        <div className={s.authentication}>
          <SignIn/>
          <SignUp/>
        </div>
      )
    }
    
  }
  
  return (
    <Fragment>
      {authForm()}
    </Fragment>
  )
}

export default Authentication