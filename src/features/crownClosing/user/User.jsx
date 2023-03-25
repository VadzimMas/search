import {useDispatch, useSelector} from 'react-redux'
import {signOutUser} from '../utils/firebase/firebase'
import {setCurrentUser} from '../redux/user-slice'
import React from 'react'
import s from './User.module.scss'

const User = () => {
  
  const {userName, avatar} = useSelector((state) => {
    return {
      userName: state.user.name,
      avatar: state.user.avatar
    }
  })
  const userInitials = userName[0]
  const userAvatar = avatar ? <img src={avatar} alt="user avatar"/> : <span>{userInitials}</span>
  
  const dispatch = useDispatch()
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