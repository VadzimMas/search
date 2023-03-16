import ProductCard from '../../../product-card/Product-card'
import {useNavigate} from 'react-router-dom'
import ProductsItemStyled from './Products-item-styled'


function ProductsItem({title, products}) {
  const navigate = useNavigate()
  
  const navigateToCategory = () => {
    navigate(title)
  }
  
  return (
    <ProductsItemStyled>
      <h2 className="title" onClick={navigateToCategory}>
        {title.toUpperCase()}
      </h2>
      <div className="category">
        {
          products.filter((_, index) => index < 4)
            .map((product) => {
              return <ProductCard key={product.id} product={product}/>
            })
        }
      </div>
    </ProductsItemStyled>
  )
}

export default ProductsItem