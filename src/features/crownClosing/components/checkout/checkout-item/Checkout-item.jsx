import {RiArrowUpSLine, RiArrowDownSLine, RiDeleteBin5Line} from 'react-icons/ri'
import {useContext} from 'react'
import {CartContext} from '../../../context/Cart-context'
import CheckoutItemStyled from './Checkout-item-styled'

function CheckoutItem({product}) {
  const {id, name, price, imageUrl, quantity} = product
  const {upQuantity, downQuantity, deleteProductFromCart} = useContext(CartContext)
  
  return (
    <CheckoutItemStyled key={id}>
      <div className="img flexItem">
        <img src={imageUrl} alt={name}/>
      </div>
      
      <h2 className="description flexItem">{name}</h2>
      
      <div className="quantity flexItem">
        <RiArrowUpSLine className="up" onClick={() => upQuantity(id)}/>
        <span>{quantity}</span>
        <RiArrowDownSLine className="down" onClick={() => downQuantity(id)}/>
      </div>
      
      <div className="price flexItem">
        <div>
          <span>Price : </span>
          <span>{`$ ${price}`}</span>
        </div>
        <div>
          <span>Total : </span>
          <span>{`$ ${price * quantity}`}</span>
        </div>
      </div>
      
      <div className="remove flexItem">
        <RiDeleteBin5Line onClick={() => deleteProductFromCart(id)}/>
      </div>
    
    </CheckoutItemStyled>
  )
}

export default CheckoutItem