import CheckoutItem from './checkout-item/Checkout-item'
import CheckoutStyled from './Checkout-styled'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {setTotalOverAllPrice} from '../../redux/store'
import Payment from './payment/Payment'

function Checkout() {
  
  const dispatch = useDispatch()
  const {cartProducts, totalOverAllPrice} = useSelector(state => state.cart)
  
  useEffect(() => {
    dispatch(setTotalOverAllPrice())
  })
  
  const renderedProducts = cartProducts.map((product) => {
    return <CheckoutItem product={product} key={product.id} />
  })
  
  return (
    <CheckoutStyled>
      <div className="header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      <div className="renderedProducts">
        {renderedProducts}
      </div>
      <div className="total">
        <span>Total over all :</span>
        <span>{`$ ${totalOverAllPrice}`}</span>
      </div>
      <Payment />
    
    </CheckoutStyled>
  )
}

export default Checkout