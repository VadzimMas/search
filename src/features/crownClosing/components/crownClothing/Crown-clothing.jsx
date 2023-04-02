import {Outlet} from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import s from './crown-clothing.module.scss'
import useUserProvider from '../hooks/useUserProvider'
import useUserCartProvider from '../hooks/useUserCartProvider'


function CrownClothing() {
  
  // listen to change cartData on server
  useUserCartProvider()
  // listen to user login logout
  useUserProvider()
  
  return (
    <div className={s.crownClothing}>
      <Navbar />
      <div id="detail"><Outlet /></div>
    </div>
  )
}

export default CrownClothing
