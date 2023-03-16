import './Directory-list-styled'
import DirectoryItem from './directory-item/Directory-item'
import {useContext} from 'react'
import {DirectoriesContext} from '../../context/Directories-context'
import DirectoryListStyled from './Directory-list-styled'

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
    <DirectoryListStyled>
      {!isDirectoriesMapLoading && renderedDirectories}
    </DirectoryListStyled>
  )
}

export default DirectoryList