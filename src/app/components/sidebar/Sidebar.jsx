import {NavLink} from 'react-router-dom'
import {IoLogoReact} from 'react-icons/io5'
import {BsMoonStars, BsSearch} from 'react-icons/bs'
import {TiThMenu} from 'react-icons/ti'
import {FaCrown} from 'react-icons/fa'
import useClickOutside from '../../../hooks/useClickOutside'
import useScroll from '../../../hooks/useScroll'
import s from './sidebar.module.scss'
import {ImSun} from 'react-icons/im'
import {useEffect, useState} from 'react'

function Sidebar() {
  const [ref, isMenuOpen, setIsMenuOpen] = useClickOutside('sidebar')
  const toggleClass = () => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen)
    }
  }
  const isActive = ({isActive}) => isActive ? `${s.link} ${s.active}` : s.link
  const openMenu = () => setIsMenuOpen(!isMenuOpen)
  const [theme, setTheme] = useState('')
  const [isScroll] = useScroll(1)
  // isScroll={isScroll}
  
  
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark-mode')
    } else {
      setTheme('light-mode')
    }
  }, [])
  
  const themeIcon = () => {
    if (theme === 'light-mode') {
      return <BsMoonStars onClick={() => changeTheme('dark-mode')} />
    } else {
      return <ImSun onClick={() => changeTheme('light-mode')} />
    }
  }
  
  const changeTheme = (themeMode) => {
    setTheme(themeMode)
    document.querySelector('body').classList.remove('light-mode')
    document.querySelector('body').classList.remove('dark-mode')
    document.querySelector('body').classList.add(themeMode)
  }
  
  
  return (
    <div className={s.sidebar}>
      <div className={s.container} ref={ref}>
        <TiThMenu className={isMenuOpen ? `${s.menu} ${s.active}` : s.menu} onClick={openMenu} />
        <nav className={isMenuOpen ? `${s.nav} ${s.active}` : s.nav}>
          <NavLink className={isActive} to={'/'} onClick={toggleClass}>
            <span className={s.linkIcon}><IoLogoReact /></span>
            <span className={s.linkTitle}>Home</span>
          </NavLink>
          <NavLink className={isActive} to={'searchUsers'} onClick={toggleClass}>
            <span className={s.linkIcon}><BsSearch /></span>
            <span className={s.linkTitle}>Search Users</span>
          </NavLink>
          <NavLink className={isActive} to={'crownClothing'} onClick={toggleClass}>
            <span className={s.linkIcon}><FaCrown /></span>
            <span className={s.linkTitle}>Crown Clothing</span>
          </NavLink>
        </nav>
        
        <div className={s.theme}>{themeIcon()}</div>
      </div>
    
    </div>
  
  )
}

export default Sidebar