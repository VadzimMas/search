import './crownClothing.scss'
import {Outlet} from 'react-router-dom'
import {Fragment} from 'react'
import Navbar from './components/navbar/Navbar'

function CrownClothing() {
  
  return (
    <Fragment>
      <Navbar/>
      <div id="detail"><Outlet/></div>
    </Fragment>
  )
}


export default CrownClothing
