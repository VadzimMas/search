import s from './order-item.module.scss'


function OrderItem({product}) {
  console.log(product)
  return (
    <div className={s.orderItem}>
      {product.imageUrl}
    </div>
  )
}

export default OrderItem