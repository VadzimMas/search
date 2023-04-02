import DirectoryItem from './directory-item/Directory-item'
import LoadingSpinner from '../loading-spiner/Loading-spinner'
import s from './directory-list.module.scss'
import {Fragment} from 'react'
import {useFetchDirectoriesQuery} from '../../store/api/directories.api'

function DirectoryList() {
  
  const {data, error, isLoading} = useFetchDirectoriesQuery()
  
  const renderedDirectories = () => {
    if (isLoading) {
      return <LoadingSpinner />
    } else if (error) {
      return error
    } else {
      // getting directoriesData list
      const getDirectories = data.map((directory) => {
        return directory.items[0]
      })
      //rendering each directory
      return getDirectories.map((directory) => {
        return <DirectoryItem category={directory} key={directory.id} />
      })
    }
  }
  
  return (
    <Fragment>
      <div className={s.directoryList}>
        {renderedDirectories()}
      </div>
    </Fragment>
  )
}

export default DirectoryList