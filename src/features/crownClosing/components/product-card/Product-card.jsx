import s from './product-card.module.scss'
import {useAddProductToCartMutation} from '../../store/api/cart.api'
import {auth} from '../../utils/firebase'
import {useNavigate} from 'react-router-dom'

function ProductCard({product}) {
  const navigate = useNavigate()
  const [addProductToCartDB] = useAddProductToCartMutation()
  const {name, imageUrl, price} = product
  const addToCart = () => addProductToCartDB(product)
  const navigateToSignIn = () => navigate('/crownClothing/auth')
  
  const button = () => {
    return auth.currentUser
      ? <button className="inverted" type="button" onClick={addToCart}>Add to cart</button>
      : <button className="inverted" type="button" onClick={navigateToSignIn}>Sign in</button>
  }
  
  return (
    <div className={s.productCard}>
      <img className={s.img} src={imageUrl} alt={name} />
      <div className={s.footer}>
        <h2 className={s.title}>{name}</h2>
        <h2 className={s.price}>{`$ ${price}`}</h2>
      </div>
      <div className={s.btnContainer}>{button()}</div>
    </div>
  
  )
}

export default ProductCard

