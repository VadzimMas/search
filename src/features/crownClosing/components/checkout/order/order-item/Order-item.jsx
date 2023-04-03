import s from './order-item.module.scss'


function OrderItem({product}) {
  return (
    <div className={s.orderItem}>
      <span className={s.img}><img src={product.imageUrl} alt="" /></span>
      <span>{product.name}</span>
      <span>{product.quantity}</span>
      <span>$ {product.price}</span>
      <span>$ {product.price * product.quantity}</span>
    </div>
  )
}

export default OrderItem