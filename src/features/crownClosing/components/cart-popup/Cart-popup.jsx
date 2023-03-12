import s from './cart-popup.module.scss'
import Button from '../button/Button'
import {useContext, useEffect, useState} from 'react'
import {CartContext} from '../../context/CartContext'
import CartItem from './cart-item/Cart-item'
import {NavLink, useNavigate} from 'react-router-dom'

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
    <div className={s.cart}>
      <div className={s.products}>
        {
          renderedProducts.length > 0 ? renderedProducts : <h2 className={s.empty}>Empty</h2>
        }
      
      </div>
      <div className={s.btn}>
        <div className={s.total}>
          <span>Total overall :</span>
          <span>{`$ ${total}`}</span>
        </div>
        <Button onClick={goToCheckout}>Go to checkout</Button>
      </div>
    </div>
  )
}

export default CartPopup