import {createContext, useEffect, useState} from 'react'
import {getCollectionAndDocument} from '../utils/firebase/firebase'

export const CategoriesContext = createContext({
  categoriesMap: {},
  isCategoriesMapLoading: true,
})

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  const [isCategoriesMapLoading, setIsCategoriesMapLoading] = useState(true)
  
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCollectionAndDocument('categories')
      setCategoriesMap(categoryMap)
      setIsCategoriesMapLoading(false)
    }
    getCategoryMap()
  }, [])
  
  const value = {categoriesMap, isCategoriesMapLoading}
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}

