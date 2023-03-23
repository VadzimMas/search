import ProductsItem from './products-item/Products-item'
import ProductsListStyled from './Products-list-styled'
import {useSelector} from 'react-redux'
import LoadingSpinner from '../../loading-spiner/Loading-spinner'


function ProductsList() {
  const {categoriesMap} = useSelector(state => state.categories)
  
  
  let renderedProducts
  
  if (categoriesMap) {
    renderedProducts = Object.keys(categoriesMap).map((title) => {
      const category = categoriesMap[title]
      return <ProductsItem key={title} title={title} products={category}/>
    })
  }
  
  
  return (
    <ProductsListStyled>
      {categoriesMap ? renderedProducts : <LoadingSpinner/>}
    </ProductsListStyled>
  )
}

export default ProductsList






