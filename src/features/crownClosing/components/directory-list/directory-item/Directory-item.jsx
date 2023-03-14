import {useNavigate} from 'react-router-dom'

function DirectoryItem({category}) {
  const {title, imageUrl} = category
  const navigate = useNavigate()
  
  const navigateToCategory = () => {
    navigate(`shop/${title}`)
  }
  
  return (
    <div className="category-container" onClick={navigateToCategory}>
      <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default DirectoryItem