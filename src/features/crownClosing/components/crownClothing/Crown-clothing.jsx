import {Outlet} from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import s from './crown-clothing.module.scss'
import useUserLogInOutListener from '../hooks/useUserLogInOutListener'

function CrownClothing() {
  // listen to user login logout
  useUserLogInOutListener()
  //start cookie
  
  return (
    <div className={s.crownClothing}>
      <Navbar />
      <div id="detail"><Outlet /></div>
    </div>
  )
}

export default CrownClothing
