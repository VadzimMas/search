import {RiArrowDownSLine, RiArrowUpSLine, RiDeleteBin5Line} from 'react-icons/ri'
import CheckoutItemStyled from './Checkout-item-styled'
import {useDispatch} from 'react-redux'
import {deleteProductFromCart, downQuantity, upQuantity} from '../../../redux/store'

function CheckoutItem({product}) {
  const {id, name, price, imageUrl, quantity} = product
  const dispatch = useDispatch()
  
  
  return (
    <CheckoutItemStyled key={id}>
      <div className="img flexItem">
        <img src={imageUrl} alt={name}/>
      </div>
      
      <h2 className="description flexItem">{name}</h2>
      
      <div className="quantity flexItem">
        <RiArrowUpSLine className="up" onClick={() => dispatch(upQuantity(id))}/>
        <span>{quantity}</span>
        <RiArrowDownSLine className="down" onClick={() => dispatch(downQuantity(id))}/>
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
        <RiDeleteBin5Line onClick={() => dispatch(deleteProductFromCart(id))}/>
      </div>
    
    </CheckoutItemStyled>
  )
}

export default CheckoutItem