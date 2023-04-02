import {RiArrowDownSLine, RiArrowUpSLine, RiDeleteBin5Line} from 'react-icons/ri'
import {useDispatch} from 'react-redux'
import {downQuantity, upQuantity} from '../../../redux/store'
import s from './cart-item.module.scss'
import {useRemoveCartItemMutation} from '../../../redux/api/cart.api'


function CartItem({product}) {
  const dispatch = useDispatch()
  const {id, name, price, imageUrl, quantity} = product
  const [removeCartItem, result] = useRemoveCartItemMutation()
  
  return (
    <div className={s.cartItem} key={id}>
      <h2 className={s.name}>{name}</h2>
      <div className={s.info}>
        <img className={s.img} src={imageUrl} alt={name} />
        <div className={s.quantity}>
          <div className={s.price}>
            <span>Price : </span>
            <span>{`$ ${price}`}</span>
          </div>
          <div className={s.count}>
            <span>Pieces : </span>
            <RiArrowUpSLine className={s.up} onClick={() => dispatch(upQuantity(id))} />
            <span>{quantity}</span>
            <RiArrowDownSLine className={s.down} onClick={() => dispatch(downQuantity(id))} />
          </div>
        </div>
      </div>
      <div className={s.total}>
        <div>
          <span>Total : </span>
          <span>{`$ ${price * quantity}`}</span>
        </div>
        <RiDeleteBin5Line className={s.delete} onClick={() => removeCartItem(product)} />
      </div>
    </div>
  )
}

export default CartItem