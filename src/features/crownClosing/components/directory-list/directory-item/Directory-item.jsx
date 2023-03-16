import {useNavigate} from 'react-router-dom'
import './Directory-item-styled'
import DirectoryItemStyled from './Directory-item-styled'

function DirectoryItem({category}) {
  const {title, imageUrl} = category
  const navigate = useNavigate()
  
  const navigateToCategory = () => {
    navigate(`shop/${title}`)
  }
  
  return (
    <DirectoryItemStyled onClick={navigateToCategory}>
      <img className="background-image" src={imageUrl} alt=""/>
      <div className="title-container">
        <h2 className="title">{title}</h2>
        <h2 className="shop-now">Shop Now</h2>
      </div>
    </DirectoryItemStyled>
  )
}

export default DirectoryItem