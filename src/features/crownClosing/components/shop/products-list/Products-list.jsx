import ProductsItem from './products-item/Products-item'
import ProductsListStyled from './Products-list-styled'
import {useSelector} from 'react-redux'


function ProductsList() {
  const {categoriesMap} = useSelector(state => state.categories)
  
  return (
    <ProductsListStyled>
      {
        Object.keys(categoriesMap).map((title) => {
          const category = categoriesMap[title]
          return <ProductsItem key={title} title={title} products={category}/>
        })
      }
    </ProductsListStyled>
  )
}

export default ProductsList






