import {useParams} from 'react-router-dom'
import {useContext} from 'react'
import {CategoriesContext} from '../../context/Categories-context'
import ProductCard from '../product-card/Product-card'
import {TbBrandReactNative} from 'react-icons/tb'
import CategoryStyled from './Category-styled'

function Category() {
  const {categoriesMap, isCategoriesMapLoading} = useContext(CategoriesContext)
  const {id} = useParams()
  
  return (
    <CategoryStyled>
      <h2 className="title">
        {id}
        {isCategoriesMapLoading && <TbBrandReactNative className="loading"/>}
      </h2>
      <div className="products">
        {
          !isCategoriesMapLoading && categoriesMap[id].map((product) => {
            return <ProductCard key={product.id} product={product}/>
          })
        }
      </div>
    </CategoryStyled>
  )
}

export default Category