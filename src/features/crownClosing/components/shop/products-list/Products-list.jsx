import ProductsItem from './products-item/Products-item'
import LoadingSpinner from '../../loading-spiner/Loading-spinner'
import s from './products-list.module.scss'
import {useFetchCategoriesQuery} from '../../../store/api/categories.api'
import {faker} from '@faker-js/faker'


function ProductsList() {
  const {data, error, isLoading} = useFetchCategoriesQuery()
  
  const renderedCategories = () => {
    if (isLoading) {
      return <LoadingSpinner />
    } else if (error) {
      return error
    } else {
      return data.map((category) => {
        return <ProductsItem key={category.title} title={category.title} products={category} />
      })
    }
  }
  
  
  
  
  const fakerProducts = faker.image.unsplash
  console.log(fakerProducts)
  
  return (
    <div className={s.productsList}>
      {renderedCategories()}
    </div>
  )
}

export default ProductsList






