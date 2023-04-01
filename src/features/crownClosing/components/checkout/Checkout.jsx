import CheckoutItem from './checkout-item/Checkout-item'
import {Fragment} from 'react'
import Payment from './payment/Payment'
import s from './checkout.module.scss'
import {useFetchCartQuery} from '../../redux/api/cart.api'
import LoadingSpinner from '../loading-spiner/Loading-spinner'

function Checkout() {
  const {data: cartData} = useFetchCartQuery()
  
  
  const renderedProducts = () => {
    if (cartData) {
      return cartData.map((product) => {
        return <CheckoutItem product={product} key={product.id} />
      })
    } else {
      return <LoadingSpinner />
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
        <div className={s.renderedProducts}>
          {renderedProducts()}
        </div>
        <div className={s.total}>
          <span>Total over all :</span>
          <span>{`$ ${totalOverAllPrice()}`}</span>
        </div>
      </div>
      <Payment />
    </Fragment>
  )
}

export default Checkout