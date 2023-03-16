import {useContext} from 'react'
import {CategoriesContext} from '../../../context/Categories-context'
import s from './Products-list-styled'
import ProductsItem from './products-item/Products-item'
import ProductsListStyled from './Products-list-styled'


function ProductsList() {
  const {categoriesMap} = useContext(CategoriesContext)
  
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






