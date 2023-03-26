import ProductsItem from './products-item/Products-item'
import ProductsListStyled from './Products-list-styled'
import {useSelector} from 'react-redux'
import LoadingSpinner from '../../loading-spiner/Loading-spinner'


function ProductsList() {
  const {categoriesData} = useSelector(state => state.categories)
  
  const renderedProducts = () => {
    if (categoriesData) {
      return categoriesData.map((category) => {
        return <ProductsItem key={category.title} title={category.title} products={category}/>
      })
    } else {
      return <LoadingSpinner/>
    }
  }
  
  return (
    <ProductsListStyled>
      {renderedProducts()}
    </ProductsListStyled>
  )
}

export default ProductsList






