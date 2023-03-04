import './sidebar.scss'
import {NavLink} from 'react-router-dom'
import {IoLogoReact} from 'react-icons/io5'
import {BsSearch} from 'react-icons/bs'
import {TiThMenu} from 'react-icons/ti'
import OutsideClickHandler from 'react-outside-click-handler/esm/OutsideClickHandler'
import React, {useState} from 'react'
import {FaCrown} from 'react-icons/fa'

function Sidebar() {
  const [isMenuClick, setIsMenuClick] = useState(true)
  const [navClass, setNavClass] = useState('nav')
  const [menuClass, setMenuClass] = useState('menu')
  
  const onClickToggleActive = () => {
    isMenuClick ? setNavClass('nav active') : setNavClass('nav')
    isMenuClick ? setMenuClass('menu active') : setMenuClass('menu')
    setIsMenuClick(!isMenuClick)
  }
  
  const onClickOutsideClickHandler = () => {
    !isMenuClick && onClickToggleActive()
  }
  
  
  return (
    <div className="sidebar">
      <OutsideClickHandler onOutsideClick={onClickOutsideClickHandler}>
        <TiThMenu className={menuClass} onClick={onClickToggleActive}/>
        <nav className={navClass}>
          <NavLink to={'/'} className="link">
            <IoLogoReact className="link-icon"/>
            <span className="link-title">Home</span>
          </NavLink>
          <NavLink to={'/searchUsers'} className="link">
            <BsSearch className="link-icon"/>
            <span className="link-title">Search Users</span>
          </NavLink>
          <NavLink to={'/crownClothing'} className="link">
            <FaCrown className="link-icon"/>
            <span className="link-title">Crown Clothing</span>
          </NavLink>
          {/*<ImSun/>*/}
          {/*<BsMoonStars/>*/}
        </nav>
      </OutsideClickHandler>
    </div>
  
  )
}

export default Sidebar