import {useContext} from 'react'
import {CartContext} from '../../context/Cart-context'
import CheckoutItem from './checkout-item/Checkout-item'
import CheckoutStyled from './Checkout-styled'

function Checkout() {
  
  const {cartProducts, totalOverAllPrice} = useContext(CartContext)
  
  const renderedProducts = cartProducts.map((product) => {
    return <CheckoutItem product={product} key={product.id}/>
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
    </CheckoutStyled>
  )
}

export default Checkout