import {useParams} from 'react-router-dom'
import ProductCard from '../product-card/Product-card'
import {TbBrandReactNative} from 'react-icons/tb'
import CategoryStyled from './Category-styled'
import {useSelector} from 'react-redux'

function Category() {
  const {categoriesMap, isLoading} = useSelector(state => state.categories)
  const {id} = useParams()
  
  let renderedCategories
  if (categoriesMap) {
    renderedCategories = categoriesMap[id].map((product) => {
      return <ProductCard key={product.id} product={product}/>
    })
  }
  
  return (
    <CategoryStyled>
      <h2 className="title">
        {id}
        {isLoading && <TbBrandReactNative className="loading"/>}
      </h2>
      <div className="products">
        {!isLoading && renderedCategories}
      </div>
    </CategoryStyled>
  )
}

export default Category