import {Fragment, useContext} from 'react'
import {CategoriesContext} from '../../context/Categories.context'
import s from './category-preview-list.module.scss'
import CategoryPreview from '../category-preview/Category-preview'
import {Outlet} from 'react-router-dom'


function CategoryPreviewList() {
  const {categoriesMap} = useContext(CategoriesContext)
  
  return (
    
    <div className={s.categoryPreviewList}>
      {
        Object.keys(categoriesMap).map((title) => {
          const category = categoriesMap[title]
          return <CategoryPreview key={title} title={title} products={category}/>
        })
      }
    </div>
  
  
  )
}

export default CategoryPreviewList






