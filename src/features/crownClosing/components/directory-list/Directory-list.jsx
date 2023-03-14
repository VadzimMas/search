import './directory-list.scss'
import DirectoryItem from './directory-item/Directory-item'
import {useContext} from 'react'
import {DirectoriesContext} from '../../context/Directories.context'

function DirectoryList() {
  const {directoriesMap, isDirectoriesMapLoading} = useContext(DirectoriesContext)
  
  let renderedDirectories
  if (!isDirectoriesMapLoading) {
    const getDirectories = Object.keys(directoriesMap).map((key) => {
      return directoriesMap[key][0]
    })
    renderedDirectories = getDirectories.map((category) => {
      return <DirectoryItem category={category} key={category.id}/>
    })
  }
  
  return (
    <div className="categories-container">
      {!isDirectoriesMapLoading && renderedDirectories}
    </div>
  )
}

export default DirectoryList