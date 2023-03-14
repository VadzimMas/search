import {useParams} from 'react-router-dom'
import {useContext} from 'react'
import {CategoriesContext} from '../../context/Categories.context'
import ProductCard from '../product-card/Product-card'
import s from './category.module.scss'
import {TbBrandReactNative} from 'react-icons/tb'

function Category() {
  const {categoriesMap, isCategoriesMapLoading} = useContext(CategoriesContext)
  const {id} = useParams()
  
  return (
    <div className={s.category}>
      <h2 className={s.title}>
        {id}
        {isCategoriesMapLoading && <TbBrandReactNative className={s.loading}/>}
      </h2>
      <div className={s.products}>
        {
          !isCategoriesMapLoading && categoriesMap[id].map((product) => {
            return <ProductCard key={product.id} product={product}/>
          })
        }
      </div>
    </div>
  )
}

export default Category