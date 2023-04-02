import s from './product-card.module.scss'
import {useAddProductToUserMutation} from '../../store/api/user.api'

function ProductCard({product}) {
  const [setAddProductToUser, result] = useAddProductToUserMutation()
  const {name, imageUrl, price} = product
  const addToCart = () => {
    setAddProductToUser(product)
  }
  
  return (
    <div className={s.productCard}>
      <img className={s.img} src={imageUrl} alt={name} />
      <div className={s.footer}>
        <h2 className={s.title}>{name}</h2>
        <h2 className={s.price}>{`$ ${price}`}</h2>
      </div>
      <div className={s.btnContainer}>
        <button className="inverted" type="button" onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  
  )
}

export default ProductCard

