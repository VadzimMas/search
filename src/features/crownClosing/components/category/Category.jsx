import {useParams} from 'react-router-dom'
import ProductCard from '../product-card/Product-card'
import CategoryStyled from './Category-styled'
import {useSelector} from 'react-redux'
import LoadingSpinner from '../loading-spiner/Loading-spinner'

function Category() {
  const {categoriesData} = useSelector(state => state.categories)
  const {id} = useParams()
  //future products but before fetching success show loading
  let renderedProducts = <LoadingSpinner/>
  //when categoriesData fetched successful start rendering
  if (categoriesData) {
    //getting current category of products
    const getCurrentCategory = categoriesData.filter((category) => {
      return category.title.toLowerCase() === id.toLowerCase()
    })
    //rendering every product
    renderedProducts = getCurrentCategory[0].items.map((product) => {
      return <ProductCard key={product.id} product={product}/>
    })
  }
  
  return (
    <CategoryStyled>
      <h2 className="title">{id}</h2>
      <div className="products">{renderedProducts}</div>
    </CategoryStyled>
  )
}

export default Category