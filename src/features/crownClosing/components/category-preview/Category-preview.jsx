import s from './category-preview.module.scss'
import ProductCard from '../product-card/Product-card'
import {useNavigate} from 'react-router-dom'


function CategoryPreview({title, products}) {
  const navigate = useNavigate()
  
  const navigateToCategory = () => {
    navigate(title)
  }
  
  return (
    <div className={s.categoryPreview}>
      <h2 className={s.title} onClick={navigateToCategory}>
        {title.toUpperCase()}
      </h2>
      <div className={s.category}>
        {
          products.filter((_, index) => index < 4)
            .map((product) => {
              return <ProductCard key={product.id} product={product}/>
            })
        }
      </div>
    </div>
  )
}

export default CategoryPreview