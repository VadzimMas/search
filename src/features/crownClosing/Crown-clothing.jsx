import {Outlet} from 'react-router-dom'
import {useEffect} from 'react'
import Navbar from './components/navbar/Navbar'
import CrownClothingStyled from './Crown-clothing.styled'
import {setCurrentUser} from './redux/store'
import {useDispatch} from 'react-redux'
import {createUserDocumentFromAuth, onAuthStateChangeListener} from './utils/firebase/firebase'
import {getCategories} from './redux/categories-slice'
import {getDirectories} from './redux/directories-slice'

function CrownClothing() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
        dispatch(setCurrentUser({
          name: user.displayName,
          avatar: user.photoURL
        }))
      }
      dispatch(getDirectories())
      dispatch(getCategories())
    })
    
    return unsubscribe()
  }, [dispatch])
  
  return (
    
    <CrownClothingStyled>
      <Navbar/>
      <div id="detail"><Outlet/></div>
    </CrownClothingStyled>
  
  )
}


export default CrownClothing
