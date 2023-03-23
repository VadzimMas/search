import {useDispatch, useSelector} from 'react-redux'
import {signOutUser} from '../utils/firebase/firebase'
import {setCurrentUser} from '../redux/user-slice'
import React from 'react'
import UserStyled from './User.styled'


const User = () => {
  
  const {userName, userAvatar} = useSelector((state) => {
    return {
      userName: state.user.name,
      userAvatar: state.user.avatar
    }
  })
  
  const dispatch = useDispatch()
  const handleSignOut = () => {
    signOutUser()
    dispatch(setCurrentUser())
  }
  
  return (
    <UserStyled onClick={handleSignOut}>
      <img src={userAvatar} alt="user avatar"/>
    </UserStyled>
  )
}

export default User