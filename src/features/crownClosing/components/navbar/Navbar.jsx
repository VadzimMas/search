import {NavLink} from 'react-router-dom'
import React from 'react'
import CartPopup from '../cart-popup/Cart-popup'
import useClickOutside from '../../../../hooks/useClickOutside'
import useScroll from '../../../../hooks/useScroll'
import {FaCrown} from 'react-icons/fa'
import {BsBag} from 'react-icons/bs'
import {useSelector} from 'react-redux'
import User from '../../user/User'
import s from './navbar.module.scss'
import {useFetchUserQuery} from '../../redux/api/user.api'
import {useFetchCartQuery} from '../../redux/api/cart.api'


function Navbar() {
  const {cartProducts} = useSelector(state => state.cart)
  const [ref, isMenuOpen, setIsMenuOpen] = useClickOutside('navbar')
  const isActive = ({isActive}) => isActive ? `${s.link} ${s.active}` : `${s.link}`
  const showCart = () => setIsMenuOpen(!isMenuOpen)
  const [isScroll] = useScroll(1)
  const {data: userData} = useFetchUserQuery()
  const {data: cartData} = useFetchCartQuery()
  
  return (
    <div className={s.navbar}>
      <NavLink className={s.logoContainer} to="/crownClothing">
        <FaCrown className={s.svg} />
      </NavLink>
      <div className={s.linksContainer}>
        <NavLink className={isActive} to="shop">Shop</NavLink>
        {
          !userData && <NavLink className={isActive} to="auth">Sign in</NavLink>
        }
        <div className={s.cartContainer} ref={ref}>
          <div className={s.imgContainer} onClick={showCart}>
            <BsBag />
            <span className={s.count}>{cartData ? cartData.length : 0}</span>
          </div>
          {
            isMenuOpen
            &&
            <div className={s.cartPopup}>
              <CartPopup showCart={showCart} />
            </div>
          }
        </div>
        {userData && <User />}
      </div>
    </div>
  )
}

export default Navbar