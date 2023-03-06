import {NavLink} from 'react-router-dom'
import './navbar.module.scss'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import s from './navbar.module.scss'

function Navbar() {
  return (
    
    <div className={s.navbar}>
      <NavLink className={s.logoContainer} to="/crownClothing">
        <CrownLogo/>
      </NavLink>
      <div className={s.navLinkContainer}>
        <NavLink className={s.navLink} to="shop">Shop</NavLink>
        <NavLink className={s.navLink} to="auth">Sign in</NavLink>
      </div>
    </div>
  )
}

export default Navbar