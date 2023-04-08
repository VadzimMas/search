import {NavLink} from 'react-router-dom'
import {IoLogoReact} from 'react-icons/io5'
import {BsSearch} from 'react-icons/bs'
import {TiThMenu} from 'react-icons/ti'
import {FaCrown} from 'react-icons/fa'
import useClickOutside from '../../../hooks/useClickOutside'
import s from './sidebar.module.scss'
import useTheme from '../../../hooks/useTheme'
import useScroll from '../../../hooks/useScroll'
import VMWebLogo from '../../assets/VM-Web-Logo.jpeg'

function Sidebar() {
  const [ref, isMenuOpen, setIsMenuOpen] = useClickOutside('sidebar')
  const toggleClass = () => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen)
    }
  }
  const isActive = ({isActive}) => isActive ? `${s.link} ${s.active}` : s.link
  const openMenu = () => setIsMenuOpen(!isMenuOpen)
  const [themeIcon] = useTheme()
  const [isScroll] = useScroll(1)
  
  
  // isScroll={isScroll}
  
  
  return (
    <div className={s.sidebar}>
      <div className={s.container} ref={ref}>
        <TiThMenu className={isMenuOpen ? `${s.menu} ${s.active}` : s.menu} onClick={openMenu} />
        <div className={s.logoContainer}>
          <img className={s.logo} src={VMWebLogo} alt="" />
          <span className={s.text}>VM Dev</span>
        </div>
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
          <div className={s.navTheme}>
            {themeIcon()}
          </div>
        </nav>
        <div className={s.sidebarTheme}>{themeIcon()}</div>
      </div>
    </div>
  
  )
}

export default Sidebar