import {Outlet} from 'react-router-dom'
import {useEffect} from 'react'
import Navbar from './components/navbar/Navbar'
import CrownClothingStyled from './Crown-clothing.styled'
import { useDispatch} from 'react-redux'
import {getCategories} from './redux/categories-slice'
import {getDirectories} from './redux/directories-slice'
import {setCurrentUser} from './redux/user-slice'

function CrownClothing() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setCurrentUser())
    dispatch(getDirectories())
    dispatch(getCategories())
  }, [dispatch])
  
  return (
    <CrownClothingStyled>
      <Navbar/>
      <div id="detail"><Outlet/></div>
    </CrownClothingStyled>
  
  )
}


export default CrownClothing
