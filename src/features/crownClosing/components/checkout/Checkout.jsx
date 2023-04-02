import CheckoutItem from './checkout-item/Checkout-item'
import {Fragment} from 'react'
import Payment from './payment/Payment'
import s from './checkout.module.scss'
import {useFetchCartQuery} from '../../store/api/cart.api'

function Checkout() {
  const {data: cartData} = useFetchCartQuery()
  
  const renderedProducts = () => {
    if (cartData && cartData.length > 0) {
      return cartData.map((product) => {
        return <CheckoutItem product={product} key={product.id} />
      })
    } else {
      return <h2 className={s.empty}>No products yet</h2>
    }
  }
  const totalOverAllPrice = () => {
    if (cartData && cartData.length > 0) {
      let temp = 0
      for (const product of cartData) {
        temp += product.price * product.quantity
      }
      return temp
    } else {
      return 0
    }
  }
  
  return (
    <Fragment>
      <div className={s.checkout}>
        <div className={s.header}>
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </div>
        <div className={s.products}>
          {renderedProducts()}
        </div>
        <div className={s.total}>
          <span>Total overall :</span>
          <span>{`$ ${totalOverAllPrice()}`}</span>
        </div>
      </div>
      {cartData && cartData.length > 0 ? <Payment /> : null}
    </Fragment>
  )
}

export default Checkout