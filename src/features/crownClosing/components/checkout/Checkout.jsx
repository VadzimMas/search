import CheckoutItem from './checkout-item/Checkout-item'
import {useDispatch, useSelector} from 'react-redux'
import {Fragment, useEffect} from 'react'
import {setCartProducts, setTotalOverAllPrice} from '../../redux/store'
import Payment from './payment/Payment'
import s from './checkout.module.scss'
import {useFetchCartQuery} from '../../redux/api/cart.api'

function Checkout() {
  
  const dispatch = useDispatch()
  const {cartProducts, totalOverAllPrice} = useSelector(state => state.cart)
  const {data} = useFetchCartQuery()
  
  useEffect(() => {
    if (data) {
      dispatch(setCartProducts(data))
      dispatch(setTotalOverAllPrice())
    }
  }, [data])
  
  const renderedProducts = cartProducts?.map((product) => {
    return <CheckoutItem product={product} key={product.id} />
  })
  
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
          {renderedProducts}
        </div>
        <div className={s.total}>
          <span>Total over all :</span>
          <span>{`$ ${totalOverAllPrice}`}</span>
        </div>
      </div>
      <Payment />
    </Fragment>
  )
}

export default Checkout