import SignIn from './sign-in/Sign-in'
import SignUp from './sign-up/Sign-up'
import s from './authentication.module.scss'
import {Fragment, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useFetchUserQuery} from '../../redux/api/user.api'

function Authentication() {
  const {data} = useFetchUserQuery()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (data) {
      navigate('/crownClothing')
    }
  }, [data, navigate])
  
  const authForm = () => {
    if (!data) {
      return (
        <div className={s.authentication}>
          <SignIn />
          <SignUp />
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