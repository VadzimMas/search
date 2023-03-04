import React, {useState} from 'react'
import './header.scss'
import {BiUser} from 'react-icons/bi'
import {faker} from '@faker-js/faker'
import {Link} from 'react-router-dom'

function Header() {
  
  const [avatarClassName, setAvatarClassName] = useState('avatar-invisible')
  const [biUserClassName, setBiUserClassName] = useState('avatar-visible')
  
  const handleLoadImg = () => {
    setAvatarClassName('avatar-visible')
    setBiUserClassName('avatar-invisible')
  }
  
  
  return (
    <header className="header">
      <nav className="header-nav">
        <Link className="avatar" to={'sidebar'}>
          <div className={biUserClassName}><BiUser/></div>
          <img className={avatarClassName} src={faker.image.avatar()} alt="avatar" onLoad={handleLoadImg}/>
        </Link>
      </nav>
    </header>
  )
}

export default Header