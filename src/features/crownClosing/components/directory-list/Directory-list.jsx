import './Directory-list-styled'
import DirectoryItem from './directory-item/Directory-item'
import {useEffect} from 'react'
import DirectoryListStyled from './Directory-list-styled'
import {useDispatch, useSelector} from 'react-redux'
import {getDirectories} from '../../redux/directories-slice'

function DirectoryList() {
  
  const {
    directoriesMap,
    isLoading
  } = useSelector(state => state.directories)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getDirectories())
  }, [dispatch])
  
  let renderedDirectories
  if (!isLoading) {
    const getDirectories = Object.keys(directoriesMap).map((key) => {
      return directoriesMap[key][0]
    })
    renderedDirectories = getDirectories.map((category) => {
      return <DirectoryItem category={category} key={category.id}/>
    })
  }
  
  return (
    <DirectoryListStyled>
      {
        isLoading
          ? '...loading'
          : renderedDirectories
      }
    </DirectoryListStyled>
  )
}

export default DirectoryList