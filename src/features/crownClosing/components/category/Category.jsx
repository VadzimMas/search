import s from './category.module.scss'


function Category() {
  // const {data, error, isLoading} = useFetchCategoriesQuery()
  // if (!isLoading) {
  //   console.log(data)
  // }
  
  // const {categoriesData} = useSelector(state => state.categories)
  // const {id} = useParams()
  // //future products but before fetching success show loading
  // let renderedProducts = <LoadingSpinner />
  // //when categoriesData fetched successful start rendering
  // if (categoriesData) {
  //   //getting current category of products
  //   const getCurrentCategory = categoriesData.filter((category) => {
  //     return category.title.toLowerCase() === id.toLowerCase()
  //   })
  //   //rendering every product
  //   renderedProducts = getCurrentCategory[0].items.map((product) => {
  //     return <ProductCard key={product.id} product={product} />
  //   })
  // }
  
  
  return (
    <div className={s.category}>
      {/*<h2 className={s.title}>{id}</h2>*/}
      {/*<div className={s.products}>{renderedProducts}</div>*/}
    </div>
  )
}

export default Category