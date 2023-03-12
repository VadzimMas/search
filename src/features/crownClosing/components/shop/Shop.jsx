import {useContext} from 'react'
import {ProductContext} from '../../context/product.context'
import ProductCard from '../product-card/Product-card'
import s from './shop.module.scss'

function Shop() {
  const {products} = useContext(ProductContext)
  return (
    <div className={s.shop}>
      {
        products.map((product) => {
          return <ProductCard product={product} key={product.id}/>
        })
      }
    </div>
  )
}

export default Shop