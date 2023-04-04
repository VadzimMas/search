import s from './category.module.scss'
import {useFetchCategoriesQuery} from '../../store/api/categories.api'
import {useParams} from 'react-router-dom'
import LoadingSpinner from '../loading-spiner/Loading-spinner'
import ProductCard from '../product-card/Product-card'


function Category() {
  const {data, error, isLoading} = useFetchCategoriesQuery()
  const {id} = useParams()
  
  const renderedProducts = () => {
    if (isLoading) {
      return <LoadingSpinner />
    } else if (error) {
      return error
    } else {
      //getting current category of products
      const getCurrentCategory = data.filter((category) => {
        return category.title.toLowerCase() === id.toLowerCase()
      })
      //rendering every product
      return getCurrentCategory[0]?.items.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })
    }
  }
  
  return (
    <div className={s.category}>
      <h2 className={s.title}>{id}</h2>
      <div className={s.products}>{renderedProducts()}</div>
    </div>
  )
}

export default Category