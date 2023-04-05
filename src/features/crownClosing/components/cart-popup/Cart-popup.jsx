import CartItem from './cart-item/Cart-item'
import {useNavigate} from 'react-router-dom'
import s from './cart-popup.module.scss'
import {useFetchCartQuery} from '../../store/api/cart.api'
import {auth} from '../../utils/firebase'

function CartPopup(props) {
  const {data: cartApi} = useFetchCartQuery()
  
  const user = auth.currentUser
  const navigate = useNavigate()
  
  const renderedProducts = () => {
    if (cartApi && cartApi.length > 0) {
      return cartApi.map((product) => {
        return <CartItem product={product} key={product.id} />
      })
    } else {
      return <h2 className={s.empty}>No products yet</h2>
    }
  }
  
  const totalOverAllPrice = () => {
    if (cartApi) {
      let temp = 0
      for (const product of cartApi) {
        temp += product.price * product.quantity
      }
      return temp
    } else {
      return 0
    }
  }
  
  const goToCheckout = () => {
    props.showCart()
    navigate('checkout')
  }
  const goToAuth = () => {
    props.showCart()
    navigate('auth')
  }
  
  const chooseButton = () => {
    if (user) {
      return <button onClick={goToCheckout}>Go to checkout</button>
    } else {
      return <button onClick={goToAuth}>Sign in</button>
    }
  }
  
  return (
    <div className={s.cartPopup}>
      <div className={s.products}>{renderedProducts()}</div>
      <div className={s.btn}>
        <div className={s.total}>
          <span>Total overall :</span>
          <span>{`$ ${totalOverAllPrice()}`}</span>
        </div>
        {chooseButton()}
      </div>
    </div>
  )
}

export default CartPopup