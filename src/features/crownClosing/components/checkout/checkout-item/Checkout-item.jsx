import s from './checkout-item.module.scss'
import {RiArrowUpSLine, RiArrowDownSLine, RiDeleteBin5Line} from 'react-icons/ri'
import {useContext} from 'react'
import {CartContext} from '../../../context/CartContext'

function CheckoutItem({product}) {
  const {id, name, price, imageUrl, quantity} = product
  const {upQuantity, downQuantity, deleteProductFromCart} = useContext(CartContext)
  
  return (
    <div className={s.checkoutItem} key={id}>
      <div className={`${s.img} ${s.flexItem}`}>
        <img src={imageUrl} alt={name}/>
      </div>
      
      <h2 className={`${s.description} ${s.flexItem}`}>{name}</h2>
      
      <div className={`${s.quantity} ${s.flexItem}`}>
        <RiArrowUpSLine className={s.up} onClick={() => upQuantity(id)}/>
        <span>{quantity}</span>
        <RiArrowDownSLine className={s.down} onClick={() => downQuantity(id)}/>
      </div>
      
      <div className={`${s.price} ${s.flexItem}`}>
        <div>
          <span>Price : </span>
          <span>{`$ ${price}`}</span>
        </div>
        <div>
          <span>Total : </span>
          <span>{`$ ${price * quantity}`}</span>
        </div>
      </div>
      
      <div className={`${s.remove} ${s.flexItem}`}>
        <RiDeleteBin5Line onClick={() => deleteProductFromCart(id)}/>
      </div>
    
    </div>
  )
}

export default CheckoutItem