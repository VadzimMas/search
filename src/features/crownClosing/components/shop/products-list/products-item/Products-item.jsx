import ProductCard from '../../../product-card/Product-card'
import {useNavigate} from 'react-router-dom'
import s from './products-item.module.scss'

function ProductsItem({title, products}) {
  const navigate = useNavigate()
  const navigateToCategory = () => navigate(title)
  const renderedItem = () => {
    if (products) {
      return products.items.filter((_, index) => index < 4)
                     .map((product) => {
                       return <ProductCard key={product.id} product={product} />
                     })
    } else {
      return null
    }
  }
  
  return (
    <div className={s.productsItem}>
      <h2 className={s.title} onClick={navigateToCategory}>
        {title.toUpperCase()}
      </h2>
      <div className={s.category}>
        {renderedItem()}
      </div>
    </div>
  )
}

export default ProductsItem