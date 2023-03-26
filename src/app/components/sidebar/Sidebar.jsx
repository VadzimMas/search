import {NavLink} from 'react-router-dom'
import {IoLogoReact} from 'react-icons/io5'
import {BsSearch} from 'react-icons/bs'
import {TiThMenu} from 'react-icons/ti'
import {FaCrown} from 'react-icons/fa'
import useClickOutside from '../../../hooks/useClickOutside'
import useScroll from '../../../hooks/useScroll'
import s from './sidebar.module.scss'

function Sidebar() {
  const [ref, isMenuOpen, setIsMenuOpen] = useClickOutside('sidebar')
  const toggleClass = () => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen)
    }
  }
  const isActive = ({isActive}) => isActive ? `${s.link} ${s.active}` : s.link
  const openMenu = () => setIsMenuOpen(!isMenuOpen)
  const [isScroll] = useScroll(1)
  // isScroll={isScroll}
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
          {/*<ImSun/>*/}
          {/*<BsMoonStars/>*/}
        </nav>
      </div>
    
    </div>
  
  )
}

export default Sidebar