import {NavLink} from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import React, {useContext} from 'react'
import {UserContext} from '../../context/User-context'
import {signOutUser} from '../../utils/firebase/firebase'
import {ReactComponent as CartImg} from '../../assets/cart.svg'
import CartPopup from '../cart-popup/Cart-popup'
import useClickOutside from '../../../../hooks/useClickOutside'
import {CartContext} from '../../context/Cart-context'
import {NavbarStyled} from './Navbar-styled'
import useScroll from '../../../../hooks/useScroll'

function Navbar() {
  const {cartProducts} = useContext(CartContext)
  const [ref, isMenuOpen, setIsMenuOpen] = useClickOutside('navbar')
  const {currentUser} = useContext(UserContext)
  const isActive = ({isActive}) => isActive ? 'link active' : 'link'
  const showCart = () => setIsMenuOpen(!isMenuOpen)
  const [isScroll] = useScroll(1)
  
  return (
    <NavbarStyled isScroll={isScroll}>
      <NavLink className="logo-container" to="/crownClothing">
        <CrownLogo/>
      </NavLink>
      <div className="links-container">
        <NavLink className={isActive} to="shop">Shop</NavLink>
        {
          currentUser
            ?
            <div className="link" onClick={signOutUser}>Sign out</div>
            :
            <NavLink className={isActive} to="auth">Sign in</NavLink>
        }
        <div className="cart-container" ref={ref}>
          <div className="img-container" onClick={showCart}>
            <CartImg/>
            <span className="count">{cartProducts.length}</span>
          </div>
          {
            isMenuOpen
            &&
            <div className="cart-popup">
              <CartPopup showCart={showCart}/>
            </div>
          }
        </div>
      </div>
    </NavbarStyled>
  )
}

export default Navbar