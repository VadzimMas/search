import {useNavigate} from 'react-router-dom'
import './directory-item.module.scss'
import s from './directory-item.module.scss'


function DirectoryItem({category}) {
  const {title, imageUrl} = category
  const navigate = useNavigate()
  
  const navigateToCategory = () => {
    navigate(`shop/${title}`)
  }
  
  return (
    <div className={s.directoryItem} onClick={navigateToCategory}>
      <img className={s.backgroundImage} src={imageUrl} alt="" />
      <div className={s.titleContainer}>
        <h2 className={s.title}>{title}</h2>
        <h2 className={s.shopNow}>Shop Now</h2>
      </div>
    </div>
  )
}

export default DirectoryItem