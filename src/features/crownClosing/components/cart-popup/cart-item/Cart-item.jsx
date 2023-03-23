import {RiArrowDownSLine, RiArrowUpSLine, RiDeleteBin5Line} from 'react-icons/ri'
import CartItemStyled from './Cart-item-styled'
import {useDispatch} from 'react-redux'
import {deleteProductFromCart, downQuantity, upQuantity} from '../../../redux/store'


function CartItem({product}) {
  const dispatch = useDispatch()
  const {id, name, price, imageUrl, quantity} = product
  
  return (
    <CartItemStyled key={id}>
      <h2 className="name">{name}</h2>
      <div className="info">
        <img className="img" src={imageUrl} alt={name}/>
        <div className="quantity">
          <div className="price">
            <span>Price : </span>
            <span>{`$ ${price}`}</span>
          </div>
          <div className="count">
            <span>Pieces : </span>
            <RiArrowUpSLine className="up" onClick={() => dispatch(upQuantity(id))}/>
            <span>{quantity}</span>
            <RiArrowDownSLine className="down" onClick={() => dispatch(downQuantity(id))}/>
          </div>
        </div>
      </div>
      <div className="total">
        <div>
          <span>Total : </span>
          <span>{`$ ${price * quantity}`}</span>
        </div>
        <RiDeleteBin5Line className="delete" onClick={() => dispatch(deleteProductFromCart(id))}/>
      </div>
    </CartItemStyled>
  )
}

export default CartItem