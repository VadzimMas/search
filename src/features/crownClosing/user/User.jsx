import {signOutUser} from '../utils/firebase/firebase'
import React from 'react'
import s from './User.module.scss'
import {useFetchUserQuery} from '../redux/api/user.api'

const User = () => {
  const {data} = useFetchUserQuery()
  const userInitials = data.displayName[0]
  const userAvatar = data.photoURL ? <img src={data.photoURL} alt="user avatar" /> : <span>{userInitials}</span>
  
  const handleSignOut = async () => {
    await signOutUser()
  }
  
  return (
    <div className={s.user} onClick={handleSignOut}>
      {userAvatar}
    </div>
  )
  
}

export default User