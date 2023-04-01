import CartItem from './cart-item/Cart-item'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setCartProducts, setTotalOverAllPrice} from '../../redux/store'
import {useEffect} from 'react'
import s from './cart-popup.module.scss'
import {useFetchCartQuery} from '../../redux/api/cart.api'


function CartPopup(props) {
  const dispatch = useDispatch()
  const {cartProducts, totalOverAllPrice} = useSelector(state => state.cart)
  const {data} = useFetchCartQuery()
  
  useEffect(() => {
    if (data) {
      dispatch(setCartProducts(data))
      dispatch(setTotalOverAllPrice())
    }
  }, [data])
  
  const navigate = useNavigate()
  
  const renderedProducts = cartProducts.map((product) => {
    return <CartItem product={product} key={product.id} />
  })
  
  const goToCheckout = () => {
    props.showCart()
    navigate('checkout')
  }
  
  return (
    <div className={s.cartPopup}>
      <div className={s.products}>
        {
          renderedProducts.length > 0 ? renderedProducts : <h2 className={s.empty}>Empty</h2>
        }
      </div>
      <div className={s.btn}>
        <div className={s.total}>
          <span>Total overall :</span>
          <span>{`$ ${totalOverAllPrice}`}</span>
        </div>
        <button onClick={goToCheckout}>Go to checkout</button>
      </div>
    </div>
  )
}

export default CartPopup