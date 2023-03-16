import {createContext, useEffect, useState} from 'react'
import {getCollectionAndDocument} from '../utils/firebase/firebase'

export const DirectoriesContext = createContext({
  categoriesMap: {},
  isCategoriesMapLoading: true,
})

export const DirectoriesProvider = ({children}) => {
  const [directoriesMap, setDirectoriesMap] = useState({})
  const [isDirectoriesMapLoading, setIsDirectoriesMapLoading] = useState(true)
  
  useEffect(() => {
    const getDirectoriesMap = async () => {
      const directoriesMap = await getCollectionAndDocument('directories')
      setDirectoriesMap(directoriesMap)
      setIsDirectoriesMapLoading(false)
      // console.log(directoriesMap)
    }
    getDirectoriesMap()
  }, [])
  
  const value = {directoriesMap, isDirectoriesMapLoading}
  return <DirectoriesContext.Provider value={value}>{children}</DirectoriesContext.Provider>
}

