import {useDispatch, useSelector} from 'react-redux'
import {signOutUser} from '../utils/firebase/firebase'
import React from 'react'
import s from './User.module.scss'
import {setCurrentUser} from '../redux/user-slice'

const User = () => {
  const dispatch = useDispatch()
  const {name, avatar} = useSelector(state =>state.user)
  
  const userInitials = name[0]
  const userAvatar = avatar ? <img src={avatar} alt="user avatar"/> : <span>{userInitials}</span>
  
  const handleSignOut = async () => {
    await signOutUser()
    dispatch(setCurrentUser())
  }
  
  return (
    <div className={s.user} onClick={handleSignOut}>
      {userAvatar}
    </div>
  )
}

export default User