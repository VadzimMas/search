import {NavLink} from 'react-router-dom'
import './navbar.module.scss'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import s from './navbar.module.scss'
import {useContext} from 'react'
import {UserContext} from '../../context/user.context'
import {signOutUser} from '../../utils/firebase/firebase'
import {ReactComponent as CartImg} from '../../assets/cart.svg'
import CartPopup from '../cart-popup/Cart-popup'
import useClickOutside from '../../../../app/hooks/useClickOutside'
import {CartContext} from '../../context/CartContext'

function Navbar() {
  const {cartProducts} = useContext(CartContext)
  const [ref, isCartShow, setIsCartShow] = useClickOutside()
  const {currentUser} = useContext(UserContext)
  const isActive = ({isActive}) => isActive ? `${s.link} ${s.active}` : s.link
  const showCart = () => {
    setIsCartShow(!isCartShow)
  }
  
  return (
    <div className={s.navbar}>
      <NavLink className={s.logoContainer} to="/crownClothing">
        <CrownLogo/>
      </NavLink>
      <div className={s.links}>
        <NavLink className={isActive} to="shop">Shop</NavLink>
        {
          currentUser
            ?
            <NavLink className={isActive} onClick={signOutUser}>Sign out</NavLink>
            :
            <NavLink className={isActive} to="auth">Sign in</NavLink>
        }
        <div className={s.cartContainer} ref={ref}>
          <div className={s.imgContainer} onClick={showCart}>
            <CartImg className={s.img}/>
            <span className={s.count}>{cartProducts.length}</span>
          </div>
          {
            isCartShow
            &&
            <div className={s.cartPopup}>
              <CartPopup/>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar