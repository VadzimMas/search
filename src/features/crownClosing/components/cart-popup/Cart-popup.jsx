import CartItem from './cart-item/Cart-item'
import {useNavigate} from 'react-router-dom'
import {BaseButton} from '../button/Button.styled'
import CartPopupStyled from './Cart-popup-styled'
import {useDispatch, useSelector} from 'react-redux'
import {setTotalOverAllPrice} from '../../redux/store'
import {useEffect} from 'react'

function CartPopup(props) {
  const dispatch = useDispatch()
  const {cartProducts, totalOverAllPrice} = useSelector((state) => {
    return {
      cartProducts: state.cart.cartProducts,
      totalOverAllPrice: state.cart.totalOverAllPrice
    }
  })
  
  useEffect(() => {
    dispatch(setTotalOverAllPrice())
  })
  
  const navigate = useNavigate()
  
  const renderedProducts = cartProducts.map((product) => {
    return <CartItem product={product} key={product.id}/>
  })
  
  const goToCheckout = () => {
    props.showCart()
    navigate('checkout')
  }
  
  return (
    <CartPopupStyled>
      <div className="products">
        {
          renderedProducts.length > 0 ? renderedProducts : <h2 className="empty">Empty</h2>
        }
      </div>
      <div className="btn">
        <div className="total">
          <span>Total overall :</span>
          <span>{`$ ${totalOverAllPrice}`}</span>
        </div>
        <BaseButton onClick={goToCheckout}>Go to checkout</BaseButton>
      </div>
    </CartPopupStyled>
  )
}

export default CartPopup