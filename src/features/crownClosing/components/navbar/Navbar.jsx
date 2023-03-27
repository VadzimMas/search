import {NavLink} from 'react-router-dom'
import React from 'react'
import CartPopup from '../cart-popup/Cart-popup'
import useClickOutside from '../../../../hooks/useClickOutside'
import {NavbarStyled} from './Navbar-styled'
import useScroll from '../../../../hooks/useScroll'
import {FaCrown} from 'react-icons/fa'
import {BsBag} from 'react-icons/bs'
import {useSelector} from 'react-redux'
import User from '../../user/User'

function Navbar() {
  const {cartProducts} = useSelector(state => state.cart)
  const [ref, isMenuOpen, setIsMenuOpen] = useClickOutside('navbar')
  const isActive = ({isActive}) => isActive ? 'link active' : 'link'
  const showCart = () => setIsMenuOpen(!isMenuOpen)
  const [isScroll] = useScroll(1)
  const {isUserExist} = useSelector(state => state.user)
  
  
  return (
    <NavbarStyled isScroll={isScroll}>
      <NavLink className="logo-container" to="/crownClothing">
        <FaCrown className="svg"/>
      </NavLink>
      <div className="links-container">
        <NavLink className={isActive} to="shop">Shop</NavLink>
        {
          !isUserExist && <NavLink className={isActive} to="auth">Sign in</NavLink>
        }
        <div className="cart-container" ref={ref}>
          <div className="img-container" onClick={showCart}>
            <BsBag/>
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
        {isUserExist && <User/>}
      </div>
    </NavbarStyled>
  )
}

export default Navbar