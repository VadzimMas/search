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

function Navbar() {
  const {cartProducts} = useContext(CartContext)
  const [ref, isCartShow, setIsCartShow] = useClickOutside()
  const {currentUser} = useContext(UserContext)
  const isActive = ({isActive}) => isActive ? 'link active' : 'link'
  const showCart = () => setIsCartShow(!isCartShow)
  
  
  return (
    <NavbarStyled>
      <NavLink className="logo-container" to="/crownClothing">
        <CrownLogo/>
      </NavLink>
      <div className="links-container">
        <NavLink className={isActive} to="shop">Shop</NavLink>
        {
          currentUser
            ?
            <NavLink className={isActive} onClick={signOutUser}>Sign out</NavLink>
            :
            <NavLink className={isActive} to="auth">Sign in</NavLink>
        }
        <div className="cart-container" ref={ref}>
          <div className="img-container" onClick={showCart}>
            <CartImg/>
            <span className="count">{cartProducts.length}</span>
          </div>
          {
            isCartShow
            &&
            <div className="cart-popup">
              <CartPopup/>
            </div>
          }
        </div>
      </div>
    </NavbarStyled>
  )
}

export default Navbar