import {NavLink} from 'react-router-dom'
import './navbar.scss'
import {ReactComponent as CrownLogo} from '../../../assets/crown.svg'

function Navbar() {
  return (
    
    <div className="navbar">
      <NavLink to="/crownClothing" className="logo-container">
        <CrownLogo/>
      </NavLink>
      <div className="navLink-container">
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="sign-in">Sign in</NavLink>
      </div>
    </div>
  )
}

export default Navbar