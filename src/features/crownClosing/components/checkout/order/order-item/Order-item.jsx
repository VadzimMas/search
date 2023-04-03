import s from './order-item.module.scss'


function OrderItem({product}) {
  console.log(product)
  return (
    <div className={s.orderItem}>
      <span><img className={s.img} src={product.imageUrl} alt="" /></span>
      <span>{product.name}</span>
      <span>{product.quantity}</span>
      <span>$ {product.price}</span>
      <span>$ {product.price * product.quantity}</span>
    </div>
  )
}

export default OrderItem