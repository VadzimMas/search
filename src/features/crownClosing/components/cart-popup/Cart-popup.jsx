import {useContext, useEffect, useState} from 'react'
import {CartContext} from '../../context/Cart-context'
import CartItem from './cart-item/Cart-item'
import {useNavigate} from 'react-router-dom'
import ButtonStyled from '../button/Button-styled'
import CartPopupStyled from './Cart-popup-styled'

function CartPopup() {
  const {cartProducts} = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  
  const renderedProducts = cartProducts.map((product) => {
    return <CartItem product={product} key={product.id}/>
  })
  
  useEffect(() => {
    let temp = 0
    for (const product of cartProducts) {
      temp += product.price * product.quantity
    }
    setTotal(temp)
  }, [cartProducts])
  
  const goToCheckout = () => {
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
          <span>{`$ ${total}`}</span>
        </div>
        <ButtonStyled onClick={goToCheckout}>Go to checkout</ButtonStyled>
      </div>
    </CartPopupStyled>
  )
}

export default CartPopup