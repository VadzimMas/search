import s from './checkout.module.scss'
import {useContext, useEffect, useState} from 'react'
import {CartContext} from '../../context/CartContext'
import CheckoutItem from './checkout-item/Checkout-item'

function Checkout() {
  
  const {cartProducts, totalOverAllPrice} = useContext(CartContext)
  
  const renderedProducts = cartProducts.map((product) => {
    return <CheckoutItem product={product} key={product.id}/>
  })
  
  
  return (
    <div className={s.checkout}>
      <div className={s.header}>
        <span className={s.product}>Product</span>
        <span className={s.description}>Description</span>
        <span className={s.quantity}>Quantity</span>
        <span className={s.price}>Price</span>
        <span className={s.remove}>Remove</span>
      </div>
      <div className={s.renderedProducts}>
        {renderedProducts}
      </div>
      <div className={s.total}>
        <span>Total over all :</span>
        <span>{`$ ${totalOverAllPrice}`}</span>
      </div>
    </div>
  )
}

export default Checkout