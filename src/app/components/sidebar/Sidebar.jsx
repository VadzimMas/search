import {NavLink} from 'react-router-dom'
import {IoLogoReact} from 'react-icons/io5'
import {BsSearch} from 'react-icons/bs'
import {TiThMenu} from 'react-icons/ti'
import {FaCrown} from 'react-icons/fa'
import useClickOutside from '../../../hooks/useClickOutside'
import SidebarStyled from './Sidebar.styled'
import useScroll from '../../../hooks/useScroll'

function Sidebar() {
  const [ref, isMenuOpen, setIsMenuOpen] = useClickOutside('sidebar')
  const toggleClass = () => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen)
    }
  }
  const isActive = ({isActive}) => isActive ? 'link active' : 'link'
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const [isScroll] = useScroll(1)
  return (
    <SidebarStyled isScroll={isScroll}>
      <div className="container" ref={ref}>
        <TiThMenu className={isMenuOpen ? 'menu active' : 'menu'} onClick={openMenu}/>
        <nav className={isMenuOpen ? 'nav active' : 'nav'}>
          <NavLink className={isActive} to={'/'} onClick={toggleClass}>
            <span className="linkIcon"><IoLogoReact/></span>
            <span className="linkTitle">Home</span>
          </NavLink>
          <NavLink className={isActive} to={'searchUsers'} onClick={toggleClass}>
            <span className="linkIcon"><BsSearch/></span>
            <span className="linkTitle">Search Users</span>
          </NavLink>
          <NavLink className={isActive} to={'crownClothing'} onClick={toggleClass}>
            <span className="linkIcon"><FaCrown/></span>
            <span className="linkTitle">Crown Clothing</span>
          </NavLink>
          {/*<ImSun/>*/}
          {/*<BsMoonStars/>*/}
        </nav>
      </div>
    
    </SidebarStyled>
  
  )
}

export default Sidebar