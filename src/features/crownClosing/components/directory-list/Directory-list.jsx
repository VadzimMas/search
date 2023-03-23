import DirectoryItem from './directory-item/Directory-item'
import {useSelector} from 'react-redux'
import LoadingSpinner from '../loading-spiner/Loading-spinner'
import s from './directory-list.module.scss'
import {Fragment} from 'react'

function DirectoryList() {
  
  const {directoriesMap} = useSelector(state => state.directories)
  
  
  let renderedDirectories
  if (directoriesMap) {
    const getDirectories = Object.keys(directoriesMap).map((key) => {
      return directoriesMap[key][0]
    })
    renderedDirectories = getDirectories.map((category) => {
      return <DirectoryItem category={category} key={category.id}/>
    })
  }
  
  return (
    <Fragment>
      {
        directoriesMap
          ? <div className={s.directoryList}>{renderedDirectories}</div>
          : <LoadingSpinner/>
      }
    </Fragment>
  )
}

export default DirectoryList