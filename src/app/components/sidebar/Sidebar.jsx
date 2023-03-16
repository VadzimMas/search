import s from './sidebar.module.scss'
import {NavLink} from 'react-router-dom'
import {IoLogoReact} from 'react-icons/io5'
import {BsSearch} from 'react-icons/bs'
import {TiThMenu} from 'react-icons/ti'
import {FaCrown} from 'react-icons/fa'
import useClickOutside from '../../../hooks/useClickOutside'

function Sidebar() {
  const [ref, isMenuOpen, setIsMenuOpen] = useClickOutside('sidebar')
  const toggleClass = () => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen)
    }
  }
  const isActive = ({isActive}) => isActive ? `${s.link} ${s.active}` : s.link
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className={s.sidebar}>
      <div className={s.container} ref={ref}>
        <TiThMenu className={`${s.menu}  ${isMenuOpen ? s.active : ''}`} onClick={openMenu}/>
        <nav className={`${s.nav}  ${isMenuOpen ? s.active : ''}`}>
          <NavLink className={isActive} to={'/'} onClick={toggleClass}>
            <span className={s.linkIcon}><IoLogoReact/></span>
            <span className={s.linkTitle}>Home</span>
          </NavLink>
          <NavLink className={isActive} to={'searchUsers'} onClick={toggleClass}>
            <span className={s.linkIcon}><BsSearch/></span>
            <span className={s.linkTitle}>Search Users</span>
          </NavLink>
          <NavLink className={isActive} to={'crownClothing'} onClick={toggleClass}>
            <span className={s.linkIcon}><FaCrown/></span>
            <span className={s.linkTitle}>Crown Clothing</span>
          </NavLink>
          {/*<ImSun/>*/}
          {/*<BsMoonStars/>*/}
        </nav>
      </div>
    
    </div>
  
  )
}

export default Sidebar