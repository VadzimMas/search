import s from './cart-item.module.scss'
import {RiArrowUpSLine, RiArrowDownSLine, RiDeleteBin5Line} from 'react-icons/ri'
import {useContext} from 'react'
import {CartContext} from '../../../context/CartContext'

function CartItem({product}) {
  const {id, name, price, imageUrl, quantity} = product
  const {upQuantity, downQuantity, deleteProductFromCart} = useContext(CartContext)
  
  return (
    <div className={s.product} key={id}>
      <h2 className={s.name}>{name}</h2>
      <div className={s.info}>
        <img className={s.img} src={imageUrl} alt={name}/>
        <div className={s.quantity}>
          <div className={s.price}>
            <span>Price : </span>
            <span>{`$ ${price}`}</span>
          </div>
          <div className={s.count}>
            <span>Pieces : </span>
            <RiArrowUpSLine className={s.up} onClick={() => upQuantity(id)}/>
            <span>{quantity}</span>
            <RiArrowDownSLine className={s.down} onClick={() => downQuantity(id)}/>
          </div>
        </div>
      </div>
      <div className={s.total}>
        <div>
          <span>Total : </span>
          <span>{`$ ${price * quantity}`}</span>
        </div>
        <RiDeleteBin5Line className={s.delete} onClick={() => deleteProductFromCart(id)}/>
      </div>
    </div>
  )
}

export default CartItem