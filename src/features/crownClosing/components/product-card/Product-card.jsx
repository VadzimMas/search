import s from './product-card.module.scss'
import Button from '../button/Button'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'

function ProductCard({product}) {
  const {name, imageUrl, price, id} = product
  const {addProductToCart} = useContext(CartContext)
  
  const addToCart = () => {
    addProductToCart(product)
  }
  
  return (
    <div className={s.productCard}>
      <img className={s.img} src={imageUrl} alt={name}/>
      <div className={s.footer}>
        <h2 className={s.title}>{name}</h2>
        <h3 className={s.price}>{`$ ${price}`}</h3>
      </div>
      <div className={s.btn}>
        <Button typy="button" buttonType="inverted" onClick={addToCart}>Add to cart</Button>
      </div>
    </div>
  )
}

export default ProductCard