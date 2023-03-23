import {useParams} from 'react-router-dom'
import ProductCard from '../product-card/Product-card'
import CategoryStyled from './Category-styled'
import {useSelector} from 'react-redux'
import LoadingSpinner from '../loading-spiner/Loading-spinner'
import {Fragment} from 'react'

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
      {
        categoriesMap
          ?
          <Fragment>
            <h2 className="title">{id}</h2>
            <div className="products">{renderedCategories}</div>
          </Fragment>
          : <LoadingSpinner/>
      }
    </CategoryStyled>
  )
}

export default Category