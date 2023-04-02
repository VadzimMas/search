import {signOutUser} from '../../utils/firebase'
import React from 'react'
import s from './User.module.scss'
import {useFetchUserQuery} from '../../store/api/user.api'
import {faker} from '@faker-js/faker'

const User = () => {
  const {data} = useFetchUserQuery()
  
  const userAvatar = () => {
    if (data) {
      const userInitials = data.displayName && data.displayName[0]
      return data.photoURL
        ? <img src={data.photoURL} alt="user avatar" />
        : <img src={faker.image.avatar()} alt="user avatar" />
    } else {
      return null
    }
  }
  
  
  const handleSignOut = async () => {
    await signOutUser()
  }
  
  return (
    <div className={s.user} onClick={handleSignOut}>
      {userAvatar()}
    </div>
  )
  
}

export default User