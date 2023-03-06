import './userCard.scss'
import {useAddDislikeMutation, useAddLikeMutation, useDeleteUserMutation} from '../../../store/api/userApi'
import {GoThumbsup, GoThumbsdown, GoTrashcan} from 'react-icons/go'
import {useSelector} from 'react-redux'
import {BiUser} from 'react-icons/bi'
import {useState} from 'react'

function UserCard({user}) {
  
  const [deleteUser, deleteUserResult] = useDeleteUserMutation()
  const [addLike, addLikeResult] = useAddLikeMutation()
  const [addDislike, addDislikeResult] = useAddDislikeMutation()
  const searchTerm = useSelector((state) => state.users.searchTerm)
  const [avatarClassName, setAvatarClassName] = useState('avatar-invisible')
  const [biUserClassName, setBiUserClassName] = useState('avatar-visible')
  
  const handleDelete = () => deleteUser(user)
  const handleLike = () => addLike(user)
  const handleDislike = () => addDislike(user)
  
  function getHighlightedText(text, highlight) {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
    return (
      
      <span>{
        parts.map((part, i) =>
          <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? {
            border: '2px solid wheat',
          } : {}}>
            {part}
          </span>)
      }</span>
    )
  }
  
  let firstName = searchTerm ? getHighlightedText(user.firstName, searchTerm) : user.firstName
  let lastName = searchTerm ? getHighlightedText(user.lastName, searchTerm) : user.lastName
  
  const handleLoadImg = () => {
    setAvatarClassName('avatar-visible')
    setBiUserClassName('avatar-invisible')
  }
  return (
    <div className="userCard">
      
      <div className={biUserClassName}><BiUser/></div>
      <img className={avatarClassName} src={user.avatar} alt="avatar" onLoad={handleLoadImg}/>
      <div className="fieldset">
        <div className="firstName">{firstName}</div>
        <div className="lastName">{lastName}</div>
        <div className="email">{user.email}</div>
        <div className="rating">
          <div className="like">
            <GoThumbsup className="likeImg" onClick={handleLike}/>
            <span className="likeCount">{user.likes}</span>
          </div>
          <span className="separator">:</span>
          <div className="dislike">
            <GoThumbsdown className="dislikeImg" onClick={handleDislike}/>
            <span className="dislikeCount">{user.dislikes}</span>
          </div>
        </div>
      </div>
      <button className="btn" onClick={handleDelete}>
        <GoTrashcan/>
        <span>delete user</span>
      </button>
    </div>
  )
}

export default UserCard

