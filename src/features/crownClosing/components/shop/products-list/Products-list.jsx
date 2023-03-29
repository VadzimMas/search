import ProductsItem from './products-item/Products-item'
import {useSelector} from 'react-redux'
import LoadingSpinner from '../../loading-spiner/Loading-spinner'
import s from './products-list.module.scss'


function ProductsList() {
  const {categoriesData} = useSelector(state => state.categories)
  
  const renderedProducts = () => {
    if (categoriesData) {
      return categoriesData.map((category) => {
        return <ProductsItem key={category.title} title={category.title} products={category} />
      })
    } else {
      return <LoadingSpinner />
    }
  }
  
  return (
    <div className={s.productsList}>
      {renderedProducts()}
    </div>
  )
}

export default ProductsList






