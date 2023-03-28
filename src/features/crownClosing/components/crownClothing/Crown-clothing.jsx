import {Outlet} from 'react-router-dom'
import {useEffect} from 'react'
import Navbar from '../navbar/Navbar'
import s from './crown-clothing.module.scss'
import {useDispatch} from 'react-redux'
import {getCategories} from '../../redux/categories-slice'
import {getDirectories} from '../../redux/directories-slice'
import {setCurrentUser} from '../../redux/user-slice'

function CrownClothing() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(setCurrentUser())
    dispatch(getDirectories())
    dispatch(getCategories())
  }, [dispatch])
  
  return (
    <div className={s.crownClothing}>
      <Navbar />
      <div id="detail"><Outlet /></div>
    </div>
  
  )
}


export default CrownClothing
