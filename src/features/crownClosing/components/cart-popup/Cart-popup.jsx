import CartItem from './cart-item/Cart-item'
import {useNavigate} from 'react-router-dom'
import s from './cart-popup.module.scss'
import {useFetchCartQuery} from '../../store/api/cart.api'

function CartPopup(props) {
  const {data: cartData} = useFetchCartQuery()
  const navigate = useNavigate()
  
  const renderedProducts = () => {
    if (cartData && cartData.length > 0) {
      return cartData.map((product) => {
        return <CartItem product={product} key={product.id} />
      })
    } else {
      return <h2 className={s.empty}>No products yet</h2>
    }
  }
  
  const totalOverAllPrice = () => {
    if (cartData) {
      let temp = 0
      for (const product of cartData) {
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
  
  return (
    <div className={s.cartPopup}>
      <div className={s.products}>{renderedProducts()}</div>
      <div className={s.btn}>
        <div className={s.total}>
          <span>Total overall :</span>
          <span>{`$ ${totalOverAllPrice()}`}</span>
        </div>
        <button onClick={goToCheckout}>Go to checkout</button>
      </div>
    </div>
  )
}

export default CartPopup