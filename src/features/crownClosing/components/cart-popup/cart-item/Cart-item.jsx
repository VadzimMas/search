import {RiArrowUpSLine, RiArrowDownSLine, RiDeleteBin5Line} from 'react-icons/ri'
import {useContext} from 'react'
import {CartContext} from '../../../context/Cart-context'
import CartItemStyled from './Cart-item-styled'

function CartItem({product}) {
  const {id, name, price, imageUrl, quantity} = product
  const {upQuantity, downQuantity, deleteProductFromCart} = useContext(CartContext)
  
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
            <RiArrowUpSLine className="up" onClick={() => upQuantity(id)}/>
            <span>{quantity}</span>
            <RiArrowDownSLine className="down" onClick={() => downQuantity(id)}/>
          </div>
        </div>
      </div>
      <div className="total">
        <div>
          <span>Total : </span>
          <span>{`$ ${price * quantity}`}</span>
        </div>
        <RiDeleteBin5Line className="delete" onClick={() => deleteProductFromCart(id)}/>
      </div>
    </CartItemStyled>
  )
}

export default CartItem