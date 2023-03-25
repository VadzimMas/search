import DirectoryItem from './directory-item/Directory-item'
import {useSelector} from 'react-redux'
import LoadingSpinner from '../loading-spiner/Loading-spinner'
import s from './directory-list.module.scss'
import {Fragment} from 'react'

function DirectoryList() {
  
  const {directoriesData} = useSelector(state => state.directories)
  //future directoriesData but before fetching success show loading
  let renderedDirectories = <LoadingSpinner/>
  //when directoriesData fetched successful start rendering
  if (directoriesData) {
    // getting directoriesData list
    const getDirectories = directoriesData.map((directory) => {
      return directory.items[0]
    })
    //rendering each directory
    renderedDirectories = getDirectories.map((directory) => {
      return <DirectoryItem category={directory} key={directory.id}/>
    })
  }
  
  return (
    <Fragment>
      <div className={s.directoryList}>{renderedDirectories}</div>
    </Fragment>
  )
}

export default DirectoryList